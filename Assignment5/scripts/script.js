// card fields
var cardNumber = document.getElementsByClassName("number")[0];
var cardName = document.getElementsByClassName("name")[0];
var cardFullDate = document.getElementsByClassName("to")[0];
var cardCVV = document.getElementsByClassName("cvv")[0];

// input fields

//cvv
var cvvInput = document.getElementById("cvvinput");
cvvInput.addEventListener("mouseover",(e)=> RotateCard(e));
cvvInput.addEventListener("mouseout",(e)=> RotateCard(e));
cvvInput.addEventListener("keyup", (e)=>CardCVVChanged(e.target));

//number
var cardNumberInput = document.getElementById("cardNumberInput");
cardNumberInput.addEventListener("keyup", (e)=>CardNumberChanged(e.target));

//name
var cardNameInput = document.getElementById("cardNameInput");
cardNameInput.addEventListener("keyup", (e)=> CardNameChanged(e.target));

//date
var cardValidDate = document.getElementById("date");
cardValidDate.addEventListener("change", (e) => CardValidationDateChanged(e.target));

//year
var carValidYear = document.getElementById("year");
carValidYear.addEventListener("change", (e) => CardValidationYearChanged(e.target));

//submit
var btn = document.getElementById("submitbtn");
btn.addEventListener("click", (e)=> SaveData(e));

// rotating card
const RotateCard = (e)=>
{
    if(e.type == "mouseover")
    {
        var front = document.getElementsByClassName("card-side front");
        front[0].style.transform='rotateY(180deg)';
  
        var back = document.getElementsByClassName("card-side back");
        back[0].style.transform='rotateY(0deg)';
    }
    else if(e.type == "mouseout")
    {
        var front = document.getElementsByClassName("card-side front");
        front[0].style.transform='rotateY(0deg)';
  
        var back = document.getElementsByClassName("card-side back");
        back[0].style.transform='rotateY(180deg)';
    }
}

// update card number
const CardNumberChanged = (input)=>
{
    var len = 0;
    cardNumber.innerText = "";
    while(len < input.value.length)
    {
        cardNumber.innerText +=input.value[len];
        len++;
        if(len == 4 || len == 8 || len == 12)
        {
            cardNumber.innerHTML +='&nbsp;';
        }
    }

    while(cardNumber.innerText.length < 19)
    {
        cardNumber.innerText +="#";
        if(cardNumber.innerText.length == 4 || cardNumber.innerText.length == 9 || cardNumber.innerText.length == 14)
        {
            cardNumber.innerHTML +='&nbsp;';
        }
    }
}

// update card name
const CardNameChanged = (input) =>
{
    if(input.value == "")
    {
        cardName.innerHTML = "JOHN DOE";
    }
    else
    {
        cardName.innerHTML = input.value.toUpperCase();
    }
}

// update card date
const CardValidationDateChanged = (date)=>
{
    cardFullDate.innerHTML = date.value +  cardFullDate.innerHTML.slice(2);
}

// update card year
const CardValidationYearChanged = (year)=>
{
    cardFullDate.innerHTML = cardFullDate.innerHTML.slice(0,3) +  year.value;
}

// update card cvv
const CardCVVChanged = (cvv)=>
{
    cardCVV.innerHTML = cvv.value;
}

// fictive save data on submit
const SaveData = (e)=>
{
    if(document.forms.cardInfo.checkValidity())
    {
        var cardInfo = 
        {
            cardNumber: document.forms.cardInfo.elements["cardNumberInput"].value,
            cardName: document.forms.cardInfo.elements["cardNameInput"].value,
            cardValidDate: document.forms.cardInfo.elements["date"].value,
            cardValidYear: document.forms.cardInfo.elements["year"].value,
            cardCVV: document.forms.cardInfo.elements["cvvinput"].value,
        }
        if(localStorage.getItem("cardInfos") == null)
        {
            var cardInfos=[];
            localStorage.setItem("cardInfos", JSON.stringify(cardInfos));
        }

        var cardInfos = JSON.parse(localStorage.getItem("cardInfos"));
        cardInfos.push(cardInfo);
        localStorage.setItem("cardInfos", JSON.stringify(cardInfos));
    }
    else
    {
        e.preventDefault();
    }
}
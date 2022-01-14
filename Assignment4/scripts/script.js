const textInput = document.querySelector('.text-input');
const dateInput = document.querySelector('.datepicker-input');
dateInput.addEventListener('change', event => {
  textInput.value = event.target.value;
});

var reload = document.getElementById("reload");
reload.addEventListener("click", ()=>ReloadPage());

var form = document.getElementById("accountInfo");
form.addEventListener("submit",(e)=> SaveDate(e));

const SaveDate = (event) =>
{
    var form = event.target;
    var account = 
    {
        FirstName: form.elements["firstname"].value,
        LastName: form.elements["lastname"].value,
        Email: form.elements["email"].value,
        Phone: form.elements["phone"].value,
        Dob: form.elements["date"].value,
        Gender: form.elements["gender"].value,
        Street: form.elements["street"].value,
        City: form.elements["city"].value,
        Province: form.elements["province"].value,
        Country: form.elements["country"].value,
        Image: form.elements["img"].value,
    }
    if(localStorage.getItem("accounts") == null)
    {
        var accounts=[];
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }

    var accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    
    DisplayData(account);

    form.style.display = "none";
    var accountDisplay = document.getElementById("accountDisplay");
    accountDisplay.style.display="block";
    event.preventDefault();
}

const DisplayData = (account)=>
{
    document.getElementById("firstnamespan").innerHTML = account.FirstName;
    document.getElementById("lastnamespan").innerHTML = account.LastName;
    document.getElementById("emailspan").innerHTML = account.Email;
    document.getElementById("phonespan").innerHTML = account.Phone;
    document.getElementById("genderspan").innerHTML = account.Gender;
    document.getElementById("dobspan").innerHTML = account.Dob;
    document.getElementById("imgspan").innerHTML = account.Image;
    document.getElementById("streetspan").innerHTML = account.Street;
    document.getElementById("cityspan").innerHTML = account.City;
    document.getElementById("provincespan").innerHTML = account.Province;
    document.getElementById("countryspan").innerHTML = account.Country;
}

const ReloadPage = ()=>
{
    window.location.reload(true);
}


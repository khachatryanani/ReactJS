const inputText = (text, e) => {
    var presentorDiv = document.getElementById("presentor");
    debugger;
    if(e.key == "Backspace")
    {
        if(presentorDiv.lastChild.textContent.length >= 1 && presentorDiv.lastChild != presentorDiv.lastElementChild)
        {
            presentorDiv.innerHTML = presentorDiv.innerHTML.slice(0,presentorDiv.innerHTML.length -1);
        }
        else
        {
            var currentNode = presentorDiv;
            var nextNode = presentorDiv.lastElementChild;
            while(nextNode != null)
            {
                currentNode = nextNode;
                nextNode = currentNode.lastElementChild;
            }
    
            if(currentNode.textContent.length == 1 && currentNode != presentorDiv)
            {
                var parentNode = currentNode.parentNode;
                parentNode.removeChild(currentNode);
                while(parentNode.textContent.length == 0 && parentNode != presentorDiv)
                {
                    var grandParentNode = parentNode.parentNode;
                    grandParentNode.removeChild(parentNode);
                    parentNode = grandParentNode;
                }
            }
            else
            {
                currentNode.innerHTML = currentNode.innerHTML.slice(0,currentNode.innerHTML.length -1);
            }
        }
    }
    else if (e.keyCode === 37 || e.keyCode === 39)
    {
        e.preventDefault();
       return;
    }
    else
    {
        presentorDiv.innerHTML+= text;
    }
}

const editSelectedText = (newParent)=>{
   var sel = getSelection().getRangeAt(0);
   sel.surroundContents(newParent);
}

const onBoldClicked = ()=>{
    const boldParent = document.createElement('b');
    editSelectedText(boldParent);
}

const onItalicClicked = ()=>{
    const italicParent = document.createElement('i');
    editSelectedText(italicParent);
}

const onStrikedClicked = ()=>{
    const strikedParent = document.createElement('del');
    editSelectedText(strikedParent);
}

const onUnderlinedClicked = ()=>{
    const underlineParent = document.createElement('u');
    editSelectedText(underlineParent);
}

const onUpperCaseClicked = ()=>{
    const upperCaseParrent = document.createElement('span');
    upperCaseParrent.style.textTransform ="uppercase";
    editSelectedText(upperCaseParrent);
}

const onMakeRedClicked = ()=>{
    const redParent = document.createElement('span');
    redParent.style.color ="red";
    editSelectedText(redParent);
}

const onMakeGreenClicked = ()=>{
    const greenParent = document.createElement('span');
    greenParent.style.color ="green";
    editSelectedText(greenParent);
}

const onActionButtonClicked = (id)=>{
    switch(id)
    {
        case "bold":
            onBoldClicked();
        break;
        case "italic":
            onItalicClicked();
        break;
        case "striked":
            onStrikedClicked();
        break;  
        case "underlined":
            onUnderlinedClicked();
        break;
        case "uppercase":
            onUpperCaseClicked();
        break;  
        case "red":
            onMakeRedClicked();
        break;  
        case "green":
            onMakeGreenClicked();
        break;       
    }
    getSelection().empty();
}

const disableArrows = (e)=>
{
    if (e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
      }
}

var input = document.getElementById("inputfield");
input.addEventListener('keydown', (e)=>disableArrows(e));
input.addEventListener("keyup", (e)=> inputText(input.value[input.value.length -1], e));

var actionBtn = document.getElementsByClassName("chareditor");
for(let i = 0; i < actionBtn.length; i++)
{
    actionBtn[i].addEventListener("click", ()=> onActionButtonClicked(actionBtn[i].id));
}



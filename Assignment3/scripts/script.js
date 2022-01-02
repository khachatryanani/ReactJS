const CompleteTask =(elem)=>{

        if(VerifyTask(elem))
        {
            elem.classList.add("completed");
        }
}

const VerifyTask = (elem) =>
{
    if(elem.previousElementSibling != null && !elem.previousElementSibling.classList.contains('completed'))
    {
        alert("Previous Task is not completed!");
        return false;
    }

    return true;
}

var listitems = document.getElementById('todo').getElementsByTagName('li');
for (let index = 0; index < listitems.length; index++) {
    listitems[index].addEventListener("click", () => CompleteTask(listitems[index]));
}
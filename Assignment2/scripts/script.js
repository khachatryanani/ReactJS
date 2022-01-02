const changeBackgroundColor = ()=>
{
    var index = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = collorPallete[index];
}

var collorPallete = ['#fff100', '#ff8c00','#e81123','#ec008c','#68217a','#00188f','#00bcf2','#00b294','#009e49','#bad80a'];

var button = document.getElementsByTagName("button");
button[0].addEventListener("click", ()=> changeBackgroundColor());

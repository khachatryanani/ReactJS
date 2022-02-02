const body = document.body;
const orderedList = document.getElementById("events");
const keyCodeArray = document.getElementById("keyarray");
const keyArray=[];

const btn = document.getElementById("sort");
btn.addEventListener("click", (e)=>SortAndUpdate());

window.addEventListener("click",(e)=>Notify(e));
window.addEventListener("keyup",(e)=>Notify(e));
window.addEventListener("keydown",(e)=>Notify(e));
window.addEventListener("keypress",(e)=>Notify(e));
window.addEventListener("mousewheel",(e)=>Notify(e));
window.addEventListener("contextmenu", (e) => Notify(e));
window.addEventListener("resize", (e)=>Notify(e));
document.addEventListener("mouseenter",(e)=>Notify(e));
document.addEventListener("mouseleave",(e)=>Notify(e));


const Update = (name) =>{
    let li = document.createElement('li');
    li.innerHTML= name;
    orderedList.appendChild(li);
}

const Notify = (event)=>{
    if(event.type == "keyup"){
        Collect(event.keyCode);
    }

    Update(event.type);
    event.preventDefault();
}

const Collect = (keyCode) =>
{
    keyArray.push(keyCode);
    
    const span = document.createElement('span');
    span.innerHTML = keyCode +", ";
    keyCodeArray.appendChild(span);
}

const SortAndUpdate = ()=>
{
    quickSort(keyArray, 0, keyArray.length-1);
    keyCodeArray.innerHTML = "";
    for(let i=0; i<keyArray.length; i++){
        const span = document.createElement('span');
        span.innerHTML = keyArray[i] + ", " ;
        keyCodeArray.appendChild(span);
    }
}

///QUICK SORT ALGORITHM///
const partition = (arr, low, high) => {
    let pivot = arr[low];
    let i = low;
    for(let j = low; j <= high; j++){
      if(arr[j] <= pivot){ 
        swap(arr, i, j);
        i++;
      }
    }
    
    swap(arr, i - 1, low);
    
    return i - 1;
}
  
const quickSort = (arr, low, high) => {
    if (low >= high) {
        return;
    }
  
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
}

const swap = (arr, left, right) =>  {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
}


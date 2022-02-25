
// Problem 2: Getting Dogs
var dog = document.getElementById("dogs");
dog.addEventListener("change", (e) => dogSelectionChanged(e.target));

 const dogSelectionChanged = async(dog)=>{
    let url = "https://dog.ceo/api/breed/" + dog.value+"/images/random";

    let response = await fetch(url);

    let resp = await response.json(); 
    let img = document.getElementById('image');

    img.src = resp.message;
 }
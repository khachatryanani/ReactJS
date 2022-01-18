// Create seed data if not available
if(localStorage.getItem("candidates") == null)
{
    let candidates =
    [
        {name:"B.Obama", age:58, state:"Alabama", votes: 1},
        {name:"D.Trump", age:58, state:"California", votes: 1},
        {name:"J.Baiden", age:58, state:"Ohaio", votes: 1},
    ];
    localStorage.setItem("candidates", JSON.stringify(candidates));
}

// Get candidates list
let candidates = JSON.parse(localStorage.getItem("candidates"));

// listen to form submittions
const form = document.getElementById("newcandidate");
form.addEventListener("submit",(e)=>CreateCandidate(e));

// listen to voting button clicks
let btn = document.getElementById("vote");
btn.addEventListener("click", ()=>UpdateTableForNewVote());


// Create new candidate
const CreateCandidate = (event) =>
{
    var form = event.target;
    var candidate = 
    {
        name: form.elements["name"].value,
        age: form.elements["age"].value,
        state: form.elements["state"].value,
        votes: 1
    };

    CheckIfAlreadyExists(candidate);
    UpdateTableForNewCandidate(candidate);
    AddCandidateToList(candidate);
}

// Add candidate to selection list
const AddCandidateToList = (candidate)=>
{
    const list = document.getElementById("candidates");
    let newCandidate = new Option(candidate.name,GetIndexByName(candidate.name));
    list.add(newCandidate,undefined);
}

// Update table view for new candidate
const UpdateTableForNewCandidate = (candidate) =>
{
    let table = document.getElementById("candidatesData");
    let row = table.insertRow();
    let nameCell = row.insertCell();
    nameCell.innerHTML = candidate.name;

    let ageCell = row.insertCell();
    ageCell.innerHTML = candidate.age;

    let stateCell = row.insertCell();
    stateCell.innerHTML = candidate.state;

    let votesCell = row.insertCell();
    votesCell.innerHTML = candidate.votes;
}

// Update table after voting
const UpdateTableForNewVote = ()=>
{
    let sel = document.getElementById("candidates");
    let index = parseInt(sel.value);
    candidates[index].votes++;
    const table = document.getElementById("candidatesData");

    table.rows[index + 1].cells[3].innerHTML = candidates[index].votes;
    sel.value = "";
}

// Get candidate's index by name
const GetIndexByName = (name)=>
{
    for(let i = 0; i< candidates.length; i++)
    {
        if(candidates[i].name == name)
        {
            return i;
        }
    }

    return -1;
}

// Check if candidate already exisits in the list and update its info: assume we are updating already exisitng info on candidate.
const CheckIfAlreadyExists = (candidate)=>
{
    let index = GetIndexByName(candidate.name);
    if(index!== -1)
    {
        candidates[index].age = candidate.age;
        candidates[index].state = candidate.state;
    }
    else
    {
        candidates.push(candidate);
    }

    localStorage.setItem("candidates", JSON.stringify(candidates));
}

// Update data on page
const InputData = ()=>
{
    debugger;
    const table = document.getElementById("candidatesData");
    for(let i = 0; i< candidates.length; i++)
    {
        UpdateTableForNewCandidate(candidates[i]);
        AddCandidateToList(candidates[i]);
    }
}

InputData();
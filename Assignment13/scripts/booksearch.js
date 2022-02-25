let searchbtn = document.getElementById("search_button");
let searchBar = document.getElementById("searchbar");
searchbtn.addEventListener("click", () => SearchForABook(searchBar));

const baseUrl = "http://openlibrary.org/search.json?q=";

const SearchForABook = async (searchBox)=>
{
    let title = searchBox.value;
    let searchTitle  = title.trim().replaceAll(" ", "+");

    let url = baseUrl + searchTitle;
    //debugger;
    let response = await fetch(url);
    let booksJSON = await response.json(); 
    let resultbooks = [];
    booksJSON.docs.forEach(bookJSON => {
        let book = {
            title: bookJSON.title, 
            author: bookJSON.author_name ? bookJSON.author_name[0] : bookJSON.author_name  ,
            publicYear: bookJSON.publish_year ? bookJSON.publish_year[0] : bookJSON.publish_year,
            subject: bookJSON.subject ?  bookJSON.subject.slice(0,5): bookJSON.subject
        }
        resultbooks.push(book);
    });

    // Fill in the table
    CreateTable();
    UpdateTable(resultbooks);
}


const UpdateTable = (dataSet)=>{
    
    let bookTable = document.getElementById("bookTable");
    dataSet.forEach(data =>{
        
    let row = document.createElement("tr");
        Object.entries(data).forEach(([key, value]) => {
            
             var tdTitle = document.createElement("td");
            tdTitle.innerText = value;
            
            row.appendChild(tdTitle);
          });
    bookTable.appendChild(row);
    });
}

const CreateTable =()=>{
    let table = document.createElement('table');
    table.setAttribute("id", "bookTable");
    
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);

    let row_1 = document.createElement('tr');
    
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Title";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Author";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Published";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Subject";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);

    thead.appendChild(row_1);
    document.getElementById('result').appendChild(table);
}
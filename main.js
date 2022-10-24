const ul = document.querySelector(".ul-taskList");          //lista ul zadań
const inputTask = document.querySelector(".inputTask");     //task podany w input
const btnSubmit = document.querySelector(".submit");        //przycisk dodania zadania
const listItems = document.getElementsByClassName("task");  //pojedyńcze elementy listy ul

const toDoList = [];    //tablica przechowująca elementy li


//Funkcja dodająca zadania
const addTask = (e) => {    
    e.preventDefault();
    const titleTask = inputTask.value;
    if(titleTask == "") return;
    const liElement = document.createElement("li");
    liElement.className="task";
    liElement.innerHTML = `${titleTask} <button class="remove">usuń</button>`;
    toDoList.push(liElement);
    renderList();
    ul.appendChild(liElement);
    inputTask.value="";
    document.querySelector(".taskNumber").innerHTML = listItems.length;
    document.querySelectorAll(".remove").forEach(e=>{e.addEventListener("click", removeTask)});
}

//Funkcja usuwająca zadania
const removeTask = (e) => {
    index = e.target.parentNode.id;
    toDoList.splice(index,1);
    ul.textContent = "";
    renderList();
    document.querySelector(".taskNumber").innerHTML = listItems.length;
}

//Funkcja renderująca listę aktualnych zadań
const renderList = () => {
    toDoList.forEach((el,index)=>{
        el.id = index;
        ul.appendChild(el);
    });
}
btnSubmit.addEventListener("click",addTask);


//wyszukiwarka elementów
const inputSearch = document.querySelector(".search");

const searchKeyword = (e) => {
    const liItems = document.querySelectorAll("li.task");
    const inputContent = e.target.value.toLowerCase();
    let searchList = [...liItems];
    searchList = toDoList.filter(li => {return li.textContent.toLowerCase().includes(inputContent)});

    ul.textContent="";
    console.log(searchList);
    searchList.forEach((el,index)=>{
        el.id = index;
        ul.appendChild(el);
    })
    if(inputContent == ""){
        renderList();
    }
}

inputSearch.addEventListener("input",searchKeyword);
inputSearch.addEventListener("focus",searchKeyword);




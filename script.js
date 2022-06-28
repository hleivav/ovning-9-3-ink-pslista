//de globala variablerna
let userInput = document.getElementById("txtUserInput");
let addElement = document.getElementById("btnAdd");
let pText = document.querySelector('#resultatListan')

addElement.onclick = addToList;
console.log(pText.value);

pText.addEventListener('dblclick', x =>{
    x.target.remove(); 
})

pText.addEventListener('click', x =>{
    console.log(x.target);
    if(x.target.style.backgroundColor === 'green'){
        x.target.style.backgroundColor = 'aquamarine'
    }else{
        x.target.style.backgroundColor = 'green'
    }
    //x.target.text-decoration = 'line-through';
})

function addToList(){
    pText.innerHTML = pText.innerHTML + "<div><p>" + userInput.value + "</p></div>"; 
    userInput.value = "";
}


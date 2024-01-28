const inputbox=document.getElementById("input_box")
const listconatainer=document.getElementById("list_container")

function addtask(){
  if(inputbox.value===''){
    alert("add your Todo item")
  }
  else{
    let li=document.createElement("li")
    li.innerHTML=inputbox.value
    listconatainer.appendChild(li)

    inputbox.value=''
    
    let span=document.createElement("span")
    span.classList="fa-solid fa-trash"
    li.appendChild(span)
  }
  store()
}

listconatainer.addEventListener('click',function(e){
  
  if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove()
    store()
  }
  else if(e.target.tagName==='LI'){
    e.target.classList.toggle("checked")
    store()
  }
});

function store(){
  localStorage.setItem("data",listconatainer.innerHTML)
}
function show(){
  listconatainer.innerHTML=localStorage.getItem("data")
}
show();
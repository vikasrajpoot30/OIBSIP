let listContainer= document.getElementById('list-container');

let inputBox= document.getElementById('input-box');

function addTask(){
    if(inputBox.value===''){
        alert('You must write something');
    }
    else {
        // ab task banao and append kro
        let task= document.createElement('li');
        // task me input content fill kro
        task.textContent= inputBox.value;
        listContainer.appendChild(task);

        let span= document.createElement('span');
        span.textContent='\u00d7';
        task.appendChild(span);

    }
      inputBox.value='';
      saveData();
}
listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName==='LI'){
        el.target.classList.toggle('checked');
        saveData();
    }
    else if(el.target.tagName==='SPAN'){
        el.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("items",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('items')
}
showData();
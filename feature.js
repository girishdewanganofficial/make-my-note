const addNoteBtn=document.querySelector('#add-btn')




const addnotes = (text = '')=>{
    const note = document.createElement('div')
    note.classList.add('note')

    const htmldata= `
    <div class="action">
    <button id="remove">X</button>
    <button id="edit">+</button>
</div>

<div class="main ${text ? "":"hide"} "></div>
<textarea id="text-note" class="${text ? "hide":""}"></textarea>
    `

note.insertAdjacentHTML("afterbegin", htmldata)
console.log(note);
document.body.appendChild(note);


const editButton =note.querySelector('#edit')
const removeButton =note.querySelector('#remove')
const maindiv =note.querySelector('.main')
const textarea =note.querySelector('textarea');

removeButton.addEventListener('click',()=>{
    note.remove();
})

editButton.addEventListener('click',()=>{
    maindiv.classList.toggle('hide')
    textarea.classList.toggle('hide')
})

textarea.addEventListener('change',(event)=>{
  const value = event.target.value
  maindiv.innerHTML=value;
})



}


addNoteBtn.addEventListener('click',()=>{
    addnotes()
});
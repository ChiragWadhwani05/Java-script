const addbutton = document.getElementById('add');
const updateLSdata =()=>{
    const textareaData = document.querySelectorAll('textarea');
    const notes =[];
    textareaData.forEach((note)=> {
        return notes.push(note.value);
    })

    localStorage.setItem('notes',JSON.stringify(notes));
}
const addNewNote = (text = '')=>{
const note = document.createElement('div');
note.classList.add('note');

const htmldata =`
     <div class="operation">
        <button class="edit"><i class="far fa-edit"></i></button>
        <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea> `;
note.insertAdjacentHTML('afterbegin',htmldata);
console.log(note);
const editbtn = note.querySelector('.edit');
const deletebtn = note.querySelector('.delete');
const maindiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');

deletebtn.addEventListener('click',()=>{
    note.remove();
    updateLSdata();
})
textarea.value =text;
    maindiv.innerHTML =text;
    document.body.appendChild(note);
    editbtn.addEventListener('click',()=>{
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})
textarea.addEventListener('change',(event)=>{
    const value = event.target.value;
    maindiv.innerHTML = value;
    
    updateLSdata();
})

}
const notes = JSON.parse(localStorage.getItem('notes'));
 if (notes) {
    notes.forEach((note)=>addNewNote(note))
 }


addbutton.addEventListener('click', () => addNewNote());
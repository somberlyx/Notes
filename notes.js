const notes = document.querySelector(".notes");
const createNotes = document.querySelector(".create-new");

let userNotes = document.querySelectorAll(".input-note");

function savedNotes(){
  notes.innerHTML = localStorage.getItem("note")
}

function updateNotes(){
  localStorage.setItem("note", notes.innerHTML)
}

createNotes.addEventListener("click", ()=>{
  let inputNote = document.createElement("p");
  let deleteIcon = document.createElement("img");
  inputNote.className = "input-note";
  inputNote.setAttribute("contenteditable", "true");
  deleteIcon.src = "images/delete-svgrepo-com.svg";
  deleteIcon.className = "delete";
  notes.appendChild(inputNote).appendChild(deleteIcon);
})

notes.addEventListener("click", function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateNotes();
  } else if (e.target.tagName === "P"){
    userNotes = document.querySelectorAll(".input-note");
    userNotes.forEach(note => {
      note.onkeyup = function(){
        updateNotes();
      }
    })
  }
})

savedNotes();
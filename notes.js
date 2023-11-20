const notes = document.querySelector(".notes");
const createNotes = document.querySelector(".create-new");

let userNotes = document.querySelectorAll(".input-note");

let deleteIcon = document.createElement("img");

createNotes.addEventListener("click", ()=>{
  let inputNote = document.createElement("p");
  inputNote.className = "input-note";
  inputNote.setAttribute("contenteditable", "true");
  deleteIcon.src = "images/delete-svgrepo-com.svg";
  deleteIcon.className = "delete";
  notes.appendChild(inputNote).appendChild(deleteIcon);
})

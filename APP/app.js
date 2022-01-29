console.log('Welcome to NOTES App');
showNotes();
//id user add a notes add it to the local storage
let addBtn=document.getElementById('addbtn');
addBtn.addEventListener("click",function(e){

    let addTxt= document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value= "";
    // console.log(notesobj);
    showNotes();
});
//function to show elements from local storage
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element,index){
        html += ` 
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
                </div>
            </div>
            `;
    });
    let notesEle=document.getElementById("notes");
    if(notesobj.length!=0){
        notesEle.innerHTML=html;
    }else{
        notesEle.innerHTML=`Nothing to show! Use "Add a note" section above to add notes.`;
    }
}
//function to delete node
function deleteNote(index){
    console.log("I am delete");

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
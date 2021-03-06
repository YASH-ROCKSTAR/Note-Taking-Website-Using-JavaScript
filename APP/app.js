console.log('Welcome to NOTES App');
showNotes();
//id user add a notes add it to the local storage
let addBtn=document.getElementById('addbtn');
addBtn.addEventListener("click",function(e){

    let addTxt= document.getElementById("addtxt");
    let addTitle=document.getElementById("addTitle")
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let myobj={
        title:addTitle.value,
        text:addTxt.value
    }
    notesobj.push(myobj);
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
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
                </div>
            </div>
            `;
    });
    let notesEle=document.getElementById("notes");
    if(notesobj.length!=0){
        notesEle.innerHTML=html;
    }else{
        notesEle.innerHTML=`Nothing to show! Use "ADD TO LIST" section above to add your task.`;
    }
}
//function to delete node
function deleteNote(index){
    // console.log("I am delete");

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
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    
    let inputval=search.value.toLowerCase();
    // console.log("input event fired",inputval);
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
        // console.log(cardTxt);
    })
})
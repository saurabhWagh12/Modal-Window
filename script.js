
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener("click",openMODAL);
}

btnCloseModal.addEventListener("click",closeMODAL);
overlay.addEventListener("click",closeMODAL);


function openMODAL(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    }

function closeMODAL(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

document.addEventListener("keydown",function(event){
    if(event.key==='Escape'){
        // if(!modal.classList.contains("hidden"))
        closeMODAL();
    }
    
});
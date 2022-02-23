var modalBtn = document.querySelector(".modal-btn");
var modal = document.querySelector(".modal-overlay");
var closeBtn = document.querySelector(".close-btn");

modal.addEventListener("click" , function(){
    modal.classList.add("opan-modal");
});

closeBtn.addEventListener("click" , function(){
    modal.classList.remove("opan-modal");

});

console.log(modal);

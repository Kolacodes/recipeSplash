let modal = document.getElementById('myModal');
let modalBtn = document.querySelector('#mdl');
// add [] cause close button is a collection of a buttons
let closeBtn = document.getElementsByClassName('closeBtn')[0];


// document.addEventListener('DOMContentLoaded', openModal);



//listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

// listen for outside click
window.addEventListener('click', outsideClick);


function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}



































// let mdl = document.querySelector('.newsletter-area');
// let  mdlBtn = document.querySelector('.delicious-btn');

// listen for a click on modalBtn
// mdlBtn.addEventListener('click', openMdl);

// function openMdl(){
//   mdl.style.display = 'block';
// }

// listen for a click on modalBtn
// modalBtn.addEventListener('click', openModal);

// let  closelBtn = document.querySelector('.closeBtn');



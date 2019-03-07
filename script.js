let changeClass = false;//<<<false because change class is not set to the element 

// Menu and contents
let burgerMenu = document.querySelector('.burger');
let navItems = document.getElementById('navItems');


// functions

let myFunction = (x) =>{
	console.log('inside function body');
	if(!changeClass){//<<< this is when menu expands
		changeClass = true;
		x.currentTarget.classList.toggle("change");
		navItems.style.left = '0';		
	}

	else{
		changeClass = false;
		x.currentTarget.classList.toggle("change");
		navItems.style.left = '5000px';
	}
}




// eventListeners
burgerMenu.addEventListener('click', myFunction);

// let slideContainer = document.getElementById('container')
// let arrowButton = document.getElementById('arrow-symbol')
// let viewport = 100

// let functionSlide = function(){
// 	slideContainer.style.left = '100px'

// arrowButton.addEventListener('click', functionSlide)


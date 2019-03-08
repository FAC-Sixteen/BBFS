let changeClass = false;//<<<false because change class is not set to the element

// Menu and contents
const burgerMenu = document.querySelector('.burger');
const navItems = document.getElementById('navItems');


// functions

const myFunction = (x) => {
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

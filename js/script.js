
// Меню бургер на чистом JS =======================================================================
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.head-menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
//====================================================================================
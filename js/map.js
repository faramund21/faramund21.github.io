var linkup = document.querySelector(".map-link-up");
var linkdown = document.querySelector(".map-link-down");
var popup = document.querySelector(".modal-map");
var close = document.querySelector(".modal-close");

linkup.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});
				
linkdown.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});		
				
close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
				
window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
		}
	}
});
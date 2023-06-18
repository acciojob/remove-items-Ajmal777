function remove(){
	const dropdown = document.getElementById('colorSelect');
	const selected = dropdown.options[dropdown.selectedIndex];
	selected.remove();
}
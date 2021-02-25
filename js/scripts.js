function iframe_set (tag,file){ 
	document.getElementById("content").src = "html/"+file;
	remove_active()
	document.getElementById(tag).classList.add('active');
}

function remove_active () {
	document.getElementById('navbarDropdown').classList.remove('active');
	document.getElementById('home').classList.remove('active');
	document.getElementById('about').classList.remove('active');
	document.getElementById('contact').classList.remove('active');
}
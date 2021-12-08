function signin(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if (username=="Loveday" && password=="Loveday1@"){
		window.location.replace("../index.html");
	}
	else{
		alert("Enter the correct details");
	}
}
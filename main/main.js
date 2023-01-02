let object={
	name:"aruna",
	email:"arunaani2000@gmail.com",
	password:357,
}
function myFunction(event){
	var name=document.getElementById("name");
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	
	if(object.name==name.value&&object.email==email.value && object.password==password.value){
		alert("sucessful");
		return false;
	}
	else{
		alert("invalid");
		return false;
	}
}
window.onload=function() {
	var button=document.getElementById("btn");
	var name=document.getElementById("name");
	var password=document.getElementById("password");
	var isValid = function() {
		console.log('clicked',name.value,password.value)

                 var errNameRef=document.getElementById("name-err-js");
	 	var errPasswordRef=document.getElementById("password-err-js");

		var match=name.value.match(/[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/g);
	      if(!match)
			{

			errNameRef.innerHTML="enter valid email";
			return false;

			}
			else if(!password.value)
			{
			errNameRef.innerHTML="";
			errPasswordRef.innerHTML="enter valid password";
			return false;

			}
			else{
			errNameRef.innerHTML=errPasswordRef.innerHTML="";
			return true;
			}
		}
 	name.onkeypress=function(){
		isValid();
	}
	password.onkeypress=function(){
		isValid();
	}
	button.onclick=function(){
		if(isValid())
		alert("login success");
	localStorage.setItem('auth',name.value);
	location.href="index.html"
	}
}

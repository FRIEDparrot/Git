// JavaScript Document

function Log_In(){  //The "ERROR" is not a problem
	window.location.href = "subpages/Log_In.html"
}

function ConfirmSignUp(){
	if(confirm("Do you want to sign up a new account?"))
		{
			window.location.href = "subpages/Sign_Up.html"; 
			//Use this to realize the link be opened by the javascript
		 	// semicolon must be added!!!
		}
	else
		{
		alert('Sign up canceled');
		}
}
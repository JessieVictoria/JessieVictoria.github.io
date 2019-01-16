function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password (you will be taken to another page)',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "testingpassword") {
alert('That was it!');
window.open('aA1Bsd4EQ77gh.html');
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 


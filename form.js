function validate()
{
	
if(document.form.n1.value=="")
{
	alert("enter your firstname");
}
else if(document.form.n2.value=="")
{
	
alert("enter password");

}
else if(document.form.n3.value=="")
{
	alert("enter your email");

}

else if(document.form.n2.value!=document.form.n4.value)
{
	
alert("password incorrect");

}
else if(document.form1.n5.value=="")
{
	
alert("enter dob");

}
else if(document.form1.n6.value=="")
{
	alert("select Gender");

}

else if(document.form1.n7.value=="-1")

{
	alert("enter yours blood group");
}

else if(document.form1.n8.value=="-1")

{
	alert("Please enter one option");
}

else if(isNaN(document.form2.n9.value)||document.form2.n9.value.length!=10)

{
	alert("enter your phone number");
}
else if(isNaN(document.form2.n10.value)||document.form2.n10.value.length!=10)

{
	alert("enter your mobile number");
}

else if(document.form2.n11.value=="")

{
	alert("enter your address");
}
else if(document.form2.n12.value=="0")

{
	alert("enter your city");
}






}
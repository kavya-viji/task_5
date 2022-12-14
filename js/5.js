var x = parseInt(prompt("enter 1st people age"));
var y = parseInt(prompt("enter 2nd people age"));
var z = parseInt(prompt("enter 3rd people age"));

if (x>y && x>z)
{
	alert ("x is oldest");
	
	if (y<z)
	{
		alert ("y is youngest");
	}
	else
	{
		alert ("z is youngest");
	}
	
}
	
if (y>x && y>z)
{
   alert ("y is oldest");
	
   if (x<z)
   {
        alert ("x is youngest");
   }
   else
   {
        alert ("z is youngest");
   }	
	
}			
else (z>x && z>y)
{
   alert ("z is oldest");
	
   if (x<y)
   {
        alert ("x is youngest");
   }
   else
   {
        alert ("y is youngest");
   }	
}   
   
   
   
   
   
   
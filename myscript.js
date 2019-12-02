function openAccountHome() 
{
    var username=document.getElementById("uname").value;
    var password=document.getElementById("psw").value;

    if(username=="biswajit" && password=="sundara")
    {
      window.open("gh-pages/account-home.html");
    }
   else
   {  
     document.getElementById('alertbox').style.display='block'
   }
   
}
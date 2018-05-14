function val()
{
    var str1=document.getElementById('usn').value;
    var str2=document.getElementById('pwd').value;

    if(str1.length==0 || str2.length==0)
    {
        alert("Please enter username and password");
    }
    if(str1.length<6 || str1.length>12)
    {
      alert("user name should be between 6 char to 12 char");
    }
    if(/[0-9]/.test(str1))
    {
      alert("user name should contain only character");
    }
    if(str2.length<5 || str2.length>15)
    {
      alert("password should be between 5 char to 15");
    }
    


}

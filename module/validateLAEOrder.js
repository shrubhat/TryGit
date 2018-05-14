function val(){
    var VLAEName=document.getElementById('VLAEname').value;
    var mailer=document.getElementById('mailer').value;
    var ARU=document.getElementById('ARU').value;
    var ERU=document.getElementById('ERU');
    var VRU=document.getElementById('VRU');
    
    var iChars = "!#$%^&*()+=[]\\\';,/{}|\":<>?";
    var jChars =/@cisco.com/;

    if(VLAEName.length<6 || VLAEName.length>16)
    {
        alert("VLAE Name must contain 6 to 16 character");
    }
    if(/[0-9]/.test(VLAEName[0]))
    {
        alert("First Character of VLAE name should be alphabet");
    }
    
    for (var i = 0; i < VLAEName.length; i++) 
    {       
      if (iChars.indexOf(VLAEName.charAt(i)) != -1) 
      {     
         alert ("Your string has special characters. \nThese are not allowed."); 
//          document.getElementById("VLAEname").value = ""; 
//          return false;  
      }  
    } 
    for (var i = 0; i < mailer.length; i++) 
    {
        if (iChars.indexOf(mailer.charAt(i)) != -1) 
        {     
            alert ("Special characters are not allowed in mailer."); 
             document.getElementById("VLAEname").value = ""; 
            return false;
        }
        else if(jChars.test(mailer))
        {
            alert ("Please enter the mailer without '@cisco.com'");
            document.getElementById("VLAEname").value = ""; 
            return false;
        }
    }
    
}
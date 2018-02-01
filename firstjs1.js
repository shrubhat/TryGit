function check_info() {

	var result=true;
	var l=document.getElementById('fn').value;
	var m=document.getElementById('ln').value;
	var k=document.getElementById('age').value;

	if(/[0-9]/.test(l) || /[0-9]/.test(m))
	{
		alert('Please Enter Valid information');
		result=false;
    return(result);
	}
	else if(l==""||m=="")
	{
		alert('Please enter the values');
		result=false;
        return(result);
	}
	else if(Number(k)<1 || Number(k)>100)
	{
		alert('please enter age between 1 and 100');
		result=false;
    return(result);
	}
  else
	{
		result=true;
		return(result);
	}
}

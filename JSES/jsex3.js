String.prototype.repeatify=String.prototype.repeatify || function (times)
{
    var str1 = ' ';

    for(var i=0;i<times;i++)
    {
        str1+=this;
    }
    return str1;
}

console.log('shruti'.repeatify(3));
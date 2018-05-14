function getProductsOfAllIntsExceptAtIndex()
{
  var arr=[1,7,4,3];
  var  prod=1;
  var ans=0;
  for(var i=0;i<arr.length;i++)
    {
    
         for(var j=0;j<arr.length;j++)
           {
                prod*=arr[j];
             
            }
            ans=prod/arr[i];
            console.log(ans);
            prod=1;
      }
}

getProductsOfAllIntsExceptAtIndex()

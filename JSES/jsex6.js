var animals=[
    {name:"tipu", species:"dog"},
    {name:"raju", species:"dog"},
    {name:"chinnu", species:"cat"},
    {name:"puttu", species:"cat"}
]

var dog=animals.filter(function(a){
    return a.species==="dog"
})
console.log(dog[0]);
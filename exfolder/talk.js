//example about this keyword usage and scope

let talk=function()
{
  console.log(this.sound);
}

let blbber={
  bormier:talk,
  sound:'hello'
}

let golem={
  speak:blbber.bormier,//.bind(blbber),
  sound:'my precious'
}

golem.speak();//output:my precious not hello. because it is not bounded. bad code.
talk();
blbber.bormier();

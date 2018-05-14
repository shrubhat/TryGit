var dog = {
 sound: 'woof',
  talk:function() {
    console.log(this.sound);
  }

}
dog.talk();
var dogtalk=dog.talk.bind(dog);
dogtalk();


// var button=document.getElementByID('MyNiceButton')
// button.addEventListener('click', dog.talk.bind(dog));

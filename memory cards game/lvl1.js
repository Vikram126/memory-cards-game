const emojis= ["😊","😊","💧","💧","👺","👺","👽","👽","💀","💀","🐵","🐵","👍","👍","☢️","☢️"];
var shuffledEmojis = emojis.sort(() => (Math.random() > 0.5)? 2: -1);
for (let i = 0; i < shuffledEmojis.length; i++) {
  const box = document.createElement('div');
  box.className = 'item';
  box.innerHTML=shuffledEmojis[i];
  box.onclick = function() {
    this.classList.add('boxOpen');
    setTimeout(function(){
      if(document.querySelectorAll('.boxOpen').length > 1){
        if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
          document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
            document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

            if(document.querySelectorAll('.boxMatch').length == emojis.length){
              var winstatement = document.getElementById('win');
              winstatement.innerHTML = "You Win!";
              var lol = document.getElementById('bounce');
              lol.innerHTML = "🎮";
            }

      }
      else{
        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
      }}
    }, 500);
  }
  document.querySelector('.game').appendChild(box);

}
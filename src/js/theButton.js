const button = document.getElementById("runaway-btn");
const emoji = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','🥲','😚','🤯','🙂','🤗','🤩','🤔','🤨','😐','😑','😶','🙄','😏','😣','😥','😮','🤐','😯','😪','😫','🥱','😴','😌','😛','😜','😝','🤤','😒','😓','😔']
score = 1
// 😳

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
    //$('#runaway-btn').html(emoji[Math.floor(Math.random()*emoji.length)])

    $('#runaway-btn').hover(function(){
      $('#score').html(score)
      score += 1
      $('#runaway-btn').html('😳')
    },function(){
      $('#runaway-btn').html('🤣')
    })

  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

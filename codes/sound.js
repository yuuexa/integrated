const se1 = new Audio('../sounds/γγΌγι³.mp3');

[...document.getElementsByClassName('btn--red')].forEach(bt=>{
  bt.addEventListener('mousedown',()=>{
    se1.pause();
    se1.currentTime = 0;
    se1.play();
  });
});
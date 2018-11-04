let arrowLeft = document.querySelector(`.carousel > span:nth-of-type(1)`);
let arrowRight = document.querySelector(`.carousel > span:nth-of-type(2)`);
let pictures = document.querySelectorAll(`.slider`);
let count = 0;

arrowLeft.addEventListener(`click`, function(ev) {
  count++;

    for (let i = 0; i < pictures.length; i++) {

      if (pictures[i].style.width !== `0`) {
        pictures[i].style.width = `0`;
        pictures[i].style.height = `0`;
      }
       if (count === pictures.length) {
        count = -1;
        count++;
      }
    }
    // console.log(count);
    pictures[`${count}`].style.width = `100%`;
    pictures[`${count}`].style.height = `45vw`;
})
arrowRight.addEventListener(`click`, function(ev) {
  count--;

    for (let i = 0; i < pictures.length; i++) {

      if (pictures[i].style.width !== `0`) {
        pictures[i].style.width = `0`;
        pictures[i].style.height = `0`;
      }
       if (count === -1) {
        count = pictures.length;
        count--;
      }
    }
    // console.log(count);
    pictures[`${count}`].style.width = `100%`;
    pictures[`${count}`].style.height = `45vw`;
})


let member = document.querySelectorAll(`.bandImages > img`);
let info = document.querySelectorAll(`.memberInfo`);

for (let i = 0; i < member.length; i++) {
member[i].addEventListener(`click`, function showInfo(ev) {

  for (let j = 0; j < info.length; j++) {
    if (info[j].style.display === `flex`) {
      info[j].style.display = `none`;
      break;
    }
    info[j].style.display = `flex`;
  }
})
}

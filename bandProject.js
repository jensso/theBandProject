let blogTabs = document.querySelectorAll('.pills ul li');
let blogText = document.querySelectorAll('.blogContainer div');


let toggleText = function(arrayOfText, typeOfClass) {
  for (let j = 0; j < arrayOfText.length; j++) {
    if (arrayOfText[j].classList.contains(typeOfClass)) {
      arrayOfText[j].classList.remove(typeOfClass);
      break;
    }
  }
}

for (let i = 0; i < blogTabs.length; i++) {
  blogTabs[i].addEventListener('click', function(ev) {
    toggleText(blogText, 'active');
    toggleText(blogTabs, 'selected');

    blogText[i].classList.add('active');
    blogTabs[i].classList.add('selected');
  })
}

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

let closeButton = document.querySelector(`.ticketPopUp > p > span`);
let orderBox = document.querySelector(`.ticketPopUp`);
let cancelButton = document.querySelector(`.cancel`);

closeButton.addEventListener(`click`, function(ev) {
  orderBox.style.display = `none`;
})
cancelButton.addEventListener(`click`, function(ev) {
  orderBox.style.display = `none`;
})


let buyButton = document.querySelectorAll(`.location > button`);

for (let i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener(`click`, function(ev) {
    orderBox.style.display = `flex`;
})
}

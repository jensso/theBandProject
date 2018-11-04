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

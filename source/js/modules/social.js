export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    socialBlock.classList.add(`social-block--fade`);
    setTimeout(() => {
      socialBlock.classList.remove(`social-block--fade`);
    }, 100);
  });
};

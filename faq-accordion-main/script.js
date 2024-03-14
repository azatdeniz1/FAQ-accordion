/*document.addEventListener("DOMContentLoaded", function () {
    const answers = document.querySelectorAll(".answer");
    console.log(answers);
    answers.forEach((answer) => {
      answer.classList.add("hidden");
    });
  });*/

/*document.addEventListener("DOMContentLoaded", function () {
  const answers = document.querySelectorAll(".answer");
  const body = document.getElementsByTagName("body");
  const buttons = document.querySelectorAll(".button");
  const data = function (e) {
    console.log(buttons);
    console.log(answers);
    answers.forEach((answer, i) => {
      console.log(answer);
      console.log(i);
      answer.dataset.answer = i + 1;
      answer.classList.add(`answered${i + 1}`);
    });

    buttons.forEach((button, i) => {
      button.dataset.tab = i + 1;
      console.log(button);
    });
    window.addEventListener("click", (e) => {
      console.log();
      const clicked = e.target.dataset;
      console.log(clicked);
      const open = document.querySelector(`.answered${clicked}`);
      console.log(open);
    });
  };
  data();
});
*/
document.addEventListener("DOMContentLoaded", function () {
  const answers = document.querySelectorAll(".answer");
  const buttons = document.querySelectorAll(".button");
  const faq = document.querySelector(".faq_container");
  answers.forEach((answer, i) => {
    answer.dataset.answer = i + 1;
    answer.classList.add(`answered${i + 1}`);
  });

  buttons.forEach((button, i) => {
    button.dataset.tab = i + 1;
  });

  faq.addEventListener("click", (e) => {
    let img = e.target;
    console.log(img);
    const clicked = e.target.dataset.tab; // Get the dataset.tab value of the clicked element
    const open = document.querySelector(`.answered${clicked}`);
    open.classList.toggle("hidden");
    img.src = img.src.endsWith("icon-plus.svg")
    ? "assets/images/icon-minus.svg"
    : "assets/images/icon-plus.svg";
  });
});

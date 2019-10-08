let btn = document.querySelector(".button--send");
// let btnShowMore = document.createElement("button.button--showMore");
const btnRandom = document.querySelector(".button--random");
const ul = document.querySelector("ul");
let inputQuestion = document.querySelector(".form__input--question");
let inputAnswer = document.querySelector(".form__input--answer");
let questionArr = [];
let itemList = document.createElement("div");
let flag;

const checkQuestion = function(a, b) {
  questionArr.forEach(a => {
    if (a.question === b) {
      flag = true;
      return alert("dodałeś już to pytanie");
    }
  });
};
btn.addEventListener("click", e => {
  e.preventDefault();
  let question = inputQuestion.value;
  let answer = inputAnswer.value;
  if (question.toLowerCase() === "") return alert("wypełnij pole z pytaniem");
  else if (answer.toLowerCase() === "")
    return alert("Wypełnij pole odpowiedzi");
  let questionElement = {
    answer,
    question
  };
  checkQuestion(questionElement, question);
  if (flag == true) {
    flag = false;
    return;
  }
  //   console.log(questionElement);
  else {
    questionArr.push(questionElement);
  }
  inputQuestion.value = "";
  inputAnswer.value = "";
});
// zrobić listę samych pytań które zostały już wpisan
// console.log("dziala");
//halko
btnRandom.addEventListener("click", () => {
  let questionNumber = Math.floor(Math.random() * questionArr.length);
  // console.log(questionNumber)
  itemList.innerHTML = `<p>${questionArr[questionNumber].question}</p>`;
  console.log(itemList);
  ul.appendChild(itemList);
  btnShowMore.classList.add("button--showMore");
  btnShowMore.textContent = "Rozwiń pytanie";
  itemList.appendChild(btnShowMore);
});

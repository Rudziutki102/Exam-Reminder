let btn = document.querySelector(".button--send");
// console.log(btn);
let inputQuestion = document.querySelector(".form__input--question");
let inputAnswer = document.querySelector(".form__input--answer");
let questionArr = [];
let itemList = document.createElement("li");
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
  // if (question.toLowerCase() == questionElement.question)
  //   return alert("zapisałes już to pytanie");
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

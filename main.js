let btn = document.querySelector("button");
// console.log(btn);
let inputQuestion = document.querySelector(".form__input--question");
let inputAnswer = document.querySelector(".form__input--answer");
let questionArr = [];

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
  //   console.log(questionElement);
  //   questionArr.push(questionElement);
  inputQuestion.value = "";
  inputAnswer.value = "";
});
// zrobić listę samych pytań które zostały już wpisane

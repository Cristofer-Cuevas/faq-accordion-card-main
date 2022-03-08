//const questionContainer = document.querySelectorAll(".question-container");

// const questionContainer = document.querySelector(".question-container");

const question = document.querySelectorAll(".question");

const questionsContainer = document.querySelector(".questions-container");

// Adding to each questio the arrow-down class. The styles for arrow down are in the line 85 CSS

question.forEach((question) => {
  question.classList.toggle("arrow-down");
});

// Adding the click event to the container of the questions

questionsContainer.addEventListener("click", (e) => {
  questionSelected2 = e.target;

  // Asking if the explciitOriginalTarget does exist for firefox and the path for chrome. This select just the element that containes the class question. explicitOriginalTarger for firefox and path for chrome

  if (
    e.explicitOriginalTarget &&
    e.explicitOriginalTarget.classList[0] === "question"
  ) {
    selectedQuestion = e.explicitOriginalTarget;
  } else if (e.target.classList[0] === "question") {
    selectedQuestion = e.path[0];
  }

  // Selecting the answer

  answer = e.target.nextElementSibling;

  // Asking if the answer has the display block property or if it has display none and adding or removing the class arrow-up or arrow down depending if answer has none or block

  if (answer.style.display === "block" && answer.style.maxHeight) {
    questionSelected2.classList.remove("arrow-up");

    selectedQuestion.classList.remove("bold-question");

    answer.style.display = "none";

    answer.style.maxHeight = null;
  } else {
    questionSelected2.classList.add("arrow-up");

    selectedQuestion.classList.add("bold-question");

    answer.style.display = "block";

    answer.classList.add("answer-transition", "answer-size");

    answer.style.maxHeight = answer.scrollHeight + "px";
  }
});

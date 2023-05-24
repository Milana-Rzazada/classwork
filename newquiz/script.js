

document.addEventListener("DOMContentLoaded", function() {
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const url = "http://localhost:3000/questions";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const question = data.questions[currentQuestion];
        questionElement.innerText = question.question;

        optionsElement.innerHTML = "";
        question.options.forEach(option => {
          const li = document.createElement("li");
          li.innerText = option;
          optionsElement.appendChild(li);
        });
      });
  }

  function checkAnswer() {
    const options = optionsElement.getElementsByTagName("li");
    const selectedOption = Array.from(options).find(option => option.classList.contains("selected"));

    if (selectedOption) {
      const url = "http://localhost:3000/questions";
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const question = data.questions[currentQuestion];
          const answer = question.answer;
          const selectedAnswer = selectedOption.innerText;

          if (selectedAnswer === answer) {
            score++;
            resultElement.innerText = "Correct!";
          } else {
            resultElement.innerText = "Wrong!";
          }

          currentQuestion++;
          selectedOption.classList.remove("selected");

          if (currentQuestion < data.questions.length) {
            loadQuestion();
          } else {
            questionContainer.style.display = "none";
            submitButton.style.display = "none";
            resultElement.innerText = `You scored ${score} out of ${data.questions.length} questions.`;
          }
        });
    }
  }

  optionsElement.addEventListener("click", function(event) {
    const selectedOption = event.target;

    if (selectedOption.tagName === "LI") {
      const options = optionsElement.getElementsByTagName("li");

      Array.from(options).forEach(option => {
        option.classList.remove("selected");
      });

      selectedOption.classList.add("selected");
    }
  });

  submitButton.addEventListener("click", function() {
    checkAnswer();
  });

  loadQuestion();
});
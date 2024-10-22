const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++. ",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let section_html_domande = document.getElementById("domande");

let indice = 0;

let all_correct_answer = [];

for (let i = 0; i < questions.length; i++) {
  all_correct_answer.push(questions[i].correct_answer);
}

let user_answer = [];
let interval;

let costruttore_domande = function (indice) {
  const duration = 6;
  let remainingTime = duration;

  const timerElement = document.getElementById("seconds");
  const circle = document.querySelector(".progress-ring-circle");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  timerElement.textContent = remainingTime;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  function startCountdown() {
    clearInterval(interval);
    remainingTime = duration;
    timerElement.textContent = remainingTime;

    setProgress(100);

    interval = setInterval(() => {
      if (remainingTime >= 0) {
        timerElement.textContent = remainingTime;
        const progressPercent = (remainingTime / duration) * 100;
        setProgress(progressPercent);
        remainingTime--;
      } else {
        // mostra_risultato();
        user_answer.push(selected_answer);

        if (!selected_answer) {
          selected_answer = "Non risposto";
        }

        setTimeout(() => {
          clearInterval(interval);
          costruttore_domande(indice + 1);
        }, 500);
      }
    }, 1000);
  }

  section_html_domande.innerHTML = "";

  if (indice >= questions.length) {
    clearInterval(interval);
    const finale = document.createElement("h1");
    const container_timer = document.getElementById("container-timer");
    container_timer.innerHTML = "";
    finale.id = "finish";
    finale.textContent = "Hai completato il quiz!";

    let result_button = document.createElement("button");
    result_button.innerText = "VAI AI RISULTATI";
    result_button.id = "result_button";
    section_html_domande.appendChild(finale);
    section_html_domande.appendChild(result_button);
    console.log(user_answer);
    console.log(all_correct_answer);

    result_button.addEventListener("click", () => {
      window.location.href = "./result_page.html";
    });
    return;
  }

  const h1 = document.createElement("h1");
  h1.textContent = `${questions[indice].question}`;
  section_html_domande.appendChild(h1);

  let div_questions = document.createElement("div");
  div_questions.id = "div-questions";

  let all_answers = [
    questions[indice].correct_answer,
    ...questions[indice].incorrect_answers,
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  all_answers = shuffle(all_answers);

  let buttons = [];
  let selected_answer = null;

  let deselezione_button = function () {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected_button_domande");
    }
    selected_answer = null;
  };

  for (let j = 0; j < all_answers.length; j++) {
    let button = document.createElement("button");
    button.classList.add("button_domande");
    button.textContent = all_answers[j];
    button.addEventListener("click", () => {
      deselezione_button();
      button.classList.add("selected_button_domande");
      selected_answer = all_answers[j];
    });
    buttons.push(button);
    div_questions.appendChild(button);
  }

  for (let j = 0; j < all_answers.length; j++) {
    let button = document.createElement("button");
    button.classList.add("button_domande");
    button.addEventListener("click", () => {
      deselezione_button();
      button.classList.add("selected_button_domande");
      selected_aswer = all_answers[j];
    });
    button.textContent = `${all_answers[j]}`;
    buttons.push(button);
    div_questions.appendChild(button);
  }

  section_html_domande.appendChild(div_questions);

  next_button.addEventListener("click", () => {
    mostra_risultato();
    user_answer.push(selected_answer);
    setTimeout(() => {
      clearInterval(interval);
      costruttore_domande(indice + 1);
    }, 1000);
  });

  next_button.addEventListener("click", () => {
    user_answer.push(selected_aswer);
    costruttore_domande(indice + 1);
  });

  section_html_domande.appendChild(next_button);

  const paragraph_questions = document.createElement("p");
  paragraph_questions.textContent = `QUESTION ${indice + 1} / ${
    questions.length
  }`;
  section_html_domande.appendChild(paragraph_questions);

  startCountdown();

  let mostra_risultato = function () {
    if (selected_answer === all_correct_answer[indice]) {
      const selected_button = buttons.find(
        (btn) => btn.textContent === selected_answer
      );
      selected_button.style.color = "green";
    } else {
      const selected_button = buttons.find(
        (btn) => btn.textContent === selected_answer
      );
      selected_button.style.color = "red";

      const correctButton = buttons.find(
        (btn) => btn.textContent === all_correct_answer[indice]
      );
      if (correctButton) {
        correctButton.style.color = "green";
      }
    }
  };
};

costruttore_domande(indice);

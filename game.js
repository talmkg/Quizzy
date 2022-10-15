const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choices-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
  {
    question: "HTML is what type of language?",
    choice1: "Macro Language",
    choice2: "Scripting Language",
    choice3: "Markup Language",
    choice4: "Programming Language",
    answer: 3,
  },
  {
    question: "what is 2+2?",
    choice1: "2",
    choice2: "4",
    choice3: "23",
    choice4: "20",
    answer: 2,
  },
  {
    question: "what is 2+2?",
    choice1: "2",
    choice2: "4",
    choice3: "23",
    choice4: "20",
    answer: 2,
  },
  {
    question: "what is 2+2?",
    choice1: "2",
    choice2: "4",
    choice3: "23",
    choice4: "20",
    answer: 2,
  },
];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;
startGame = () => {
  questionCounter = 0;
};

import { Difficulty } from "../models/difficulty.model";

export const constants = {
  titles: {
    home: "QUIZ MAKER",
    result: "RESULTS"
  },
  placeholders: {
    selectCategory: "Select a category",
    selectDifficulty: "Select a difficulty"
  },
  buttons: {
    create: "Create",
    submit: "Submit",
    back: "Back",
    createNewQuiz: "Create a new Quiz",
    home: "Home"
  },
  labels: {
    score: "You scored {1} out of {2}",
    noQuiz: "You need to answer the questions first!"
  },
  defValues: {
    defaultCategory: -99999
  },
  dataKeys: {
    question: "questions"
  }
};

export const difficulties: Array<Difficulty> = [
  {
    value: "",
    description: constants.placeholders.selectDifficulty
  },
  {
    value: "easy",
    description: "Easy"
  },
  {
    value: "medium",
    description: "Medium"
  },
  {
    value: "hard",
    description: "Hard"
  }
];

export const endpoint = {
  local: {
    home: "/home/",
    results: "/results/",
    error: "/error/"
  },
  external: {
    category: "https://opentdb.com/api_category.php",
    questions: "https://opentdb.com/api.php"
  }
};

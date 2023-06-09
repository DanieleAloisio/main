import { IAnswer } from "./IAnswer";

export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
  sketchs: IAnswer[];
}
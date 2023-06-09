import { Answer } from "./answer.model";

export class Question {
  category!: string;
  type!: string;
  difficulty!: string;
  question!: string;
  correct_answer!: string;
  incorrect_answers!: Array<string>;
  all_answers?: Array<Answer>;
}

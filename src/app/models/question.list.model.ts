import { Question } from "./question.model";

export class QuestionList {
  response_code!: number;
  results!: Array<Question>;
}

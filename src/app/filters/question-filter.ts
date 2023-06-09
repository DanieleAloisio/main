
export class QuestionsFilter {
  amount!: number;
  category!: number;
  difficulty!: string;
  type!: string;

  constructor() {
    this.amount = 5;
    this.type = "multiple";
    this.difficulty = "";
    this.category = -9999;
  }
}
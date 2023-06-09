export class Answer {
  id!: number;
  description!: string;
  checked!: boolean;
  correct!: boolean;

  constructor(
    id: number,
    description: string,
    checked: boolean,
    correct: boolean
  ) {
    this.id = id;
    this.description = description;
    this.checked = checked;
    this.correct = correct;
  }
}

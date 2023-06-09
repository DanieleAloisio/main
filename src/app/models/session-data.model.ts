export class SessionData {
  key!: string;
  data: string;

  constructor(key: string, data: string) {
    this.key = key;
    this.data = data;
  }
}
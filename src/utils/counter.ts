export class Counter {
  public count: number = 0;

  increment() {
    this.count++;
  }

  print() {
    console.log(this.count);
  }
}

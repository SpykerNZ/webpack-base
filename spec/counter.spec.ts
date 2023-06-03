import { Counter } from "../src/utils/counter";

let counter: Counter;

describe("A suite is just a function", function () {
  beforeEach(() => {
    counter = new Counter();
  });

  it("counter starts at zero", function () {
    expect(counter.count).toBe(0);
  });

  it("counter can be incremented", function () {
    counter.increment();
    expect(counter.count).toBe(1);
  });
});

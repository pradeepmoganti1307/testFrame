import { add, sub, mul, div } from "./operations.js";
import { testSuite } from "./testFrameWork.js";

testSuite(
  add,
  {
    description: "addition of 0 and 0 is 0",
    params: [0, 0],
    expected: 0,
  },
  {
    description: "adding 0 to any number should give that number",
    params: [0, 2],
    expected: 1,
  },
  {
    description: "addition of 2 positive numbers",
    params: [2, 2],
    expected: 4,
  }
);

testSuite(
  sub,
  {
    description: "subtraction of 0 and 0 is 0",
    params: [0, 0],
    expected: 0,
  },
  {
    description: "subtraction of 0 to any number should give that number",
    params: [0, 2],
    expected: 1,
  },
  {
    description: "subtraction of 2 positive numbers",
    params: [2, 2],
    expected: 4,
  }
);

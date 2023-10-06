const questions = [
  {
    id: 1,
    category: "Javascript",
    title: "To what evaluates typeof a and typeof b in the following snippet",
    info: "function foo() { \n \tlet a = b = 0; \n \ta++; \n \treturn a; \n } \n foo(); \n typeof a; // => ??? \n typeof b; // => ???",
    answer: "a = undefined, b = number",
    choices: [
      "a = undefined, b = number",
      "a = number, b = undefined",
      "a = number, b = number",
      "a = undefined, b = undefined",
    ],
  },
  {
    id: 2,
    category: "Javascript",
    title: "What should X be in order to log out the result of true?",
    info: "console.log(typeof NaN === X);",
    answer: "const X = 'number'",
    choices: [
      "const X = NaN",
      "const X = 'number'",
      "const X = number",
      "const X = true",
    ],
  },
  {
    id: 3,
    category: "Javascript",
    title: "What might __ be?",
    info: "The JavaScript __ keyword refers to the object it belongs to. __ has different values depending on where it is used. In a method, __ refers to the owner object and in a function, __ refers to the global object.",
    answer: "this",
    choices: ["super", "New", "this", "default"],
  },
];
module.exports = questions;

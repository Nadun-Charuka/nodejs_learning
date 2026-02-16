// const myFunc = (a, b) => {
//   const c = a * a;
//   const d = c * a;

//   b(c, d);
// };

// myFunc(4, (num1, num2) => {
//   console.log("num1 is: ", num1);
//   console.log("num2 is: ", num2);
// });

const innerFunc = (n1, n2) => {
  console.log("n1 is: ", n1);
  console.log("n2 is: ", n2);
};

const myFuncNew = (a, innerFunc) => {
  const c = a * a;
  const d = c * a;

  innerFunc(c, d);
};

myFuncNew(4, innerFunc);

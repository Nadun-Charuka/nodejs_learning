const sayHello = () => {
  console.log("hello world");
};

export const math = ({ n1, n2, n3, n4 }) => {
  let a = (n1 + n2) * 2;
  if (n3) {
    a += n3 - 5;
  }
  if (n4) {
    a *= n4;
  }

  return a;
};

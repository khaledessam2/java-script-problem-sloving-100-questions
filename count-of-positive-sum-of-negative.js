function CountPositiveSumNegative(array) {
  let newArray = [
    array.filter((positive) => positive > 0).length ,
    array.filter((negative) => negative < 0)
      .reduce((acc, current) => acc + current, 0),
  ];

  return newArray;
}

console.log(
  CountPositiveSumNegative([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
);

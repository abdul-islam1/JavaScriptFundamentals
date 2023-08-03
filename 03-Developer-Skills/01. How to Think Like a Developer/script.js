const numReverse = (num) => {
  const strNum = num.toString();
  let revNum = "";

  for (let i = strNum.length - 1; i >= 0; i--) {
    revNum += strNum[i];
  }
  console.log(`The Reversed Number is ${parseInt(revNum)}.`);
};

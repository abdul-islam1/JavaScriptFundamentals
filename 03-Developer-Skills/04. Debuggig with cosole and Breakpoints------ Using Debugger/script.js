const calcTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);
  let min = 0;
  let max = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitude);

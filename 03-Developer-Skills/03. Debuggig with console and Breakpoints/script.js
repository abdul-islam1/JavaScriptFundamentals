const Kelvin = () => {
  const measurement = {
    type: "temp",
    unit: "cel",
    value: Number(prompt("Degree Celcius")),
  };
  console.log(measurement);
  console.warn(measurement);
  console.error(measurement);
  console.table(measurement);
  const tempKelvin = measurement.value + 273.15;
  return tempKelvin;
};

console.log(Kelvin());

'use strict';
function solveEquation(a, b, c) {
  let arr;
  let discriminant = (Math.pow(b, 2)) - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [(- b / (2 * a))];
  } else {
    let x1 = (- b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
    arr = [x1, x2];
  };
  return arr; // array
};



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  };
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  };
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  };

  let credit = amount - contribution;
  let dateToday = new Date();
  let months = ((date.getFullYear() - dateToday.getFullYear()) * 12) + (date.getMonth() - dateToday.getMonth());
  let percentMonths = percent / 100 / 12;
  let payMonths = credit * (percentMonths + (percentMonths / (((1 + percentMonths) ** months) - 1)));
  totalAmount = +(payMonths * months).toFixed(2);
  

  console.log(totalAmount);

  return totalAmount;
};

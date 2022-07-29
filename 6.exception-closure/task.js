//Задача_1

function parseCount(count){
  const pars = Number.parseInt(count, 10);
  if (isNaN(pars)){
    throw new Error("Невалидное значение");
  }
  return pars;
}

function validateCount(counter){
  try{
    return parseCount(counter);
  } catch (error){
    return error;
  }
}

//Задача_2

class Triangle{
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b < c) || (a + c < b) || (b + c < this.a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  };

  getPerimeter() {
    return this.a + this.b + this.c;
  };

  getArea(){
    let p = (this.a + this.b + this.c) / 2;
    return Number(Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
  } 
}

function getTriangle(a, b, c){
  try{
    return new Triangle(a, b, c);
  } catch (error){
    return {
      getPerimeter: () => "Ошибка! Треугольник не существует",
      getArea: () => "Ошибка! Треугольник не существует",
    }
  }
}
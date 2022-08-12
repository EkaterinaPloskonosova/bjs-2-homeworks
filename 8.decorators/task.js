function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.findIndex(item => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache !== -1) { // если элемент не найден
      console.log("Из кэша: " + cache[objectInCache].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[objectInCache].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}
   


function debounceDecoratorNew(func, delay) {
  let timeoutID = null;
  
  function wrapper (...args) {
    if (timeoutID === null) {
      func(...args);
    }
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => func(...args), delay);
  }
  return wrapper;
}


function debounceDecorator2(func, delay) {
  let timeoutID = null;
  
  function wrapper (...args) {  
    if (timeoutID === null) {
      func(...args);
    }
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => func(...args), delay);
    wrapper.count += 1;
  }
  wrapper.count = 0;
  return wrapper;
}

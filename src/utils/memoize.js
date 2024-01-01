export default function memoize(fn) {
  const cache = {};
  return function (...args) {

    //args 가 object 로 들어올 경우에 대한 로직이 필요함.
    if(args.length !== 1) {
      return fn(...args);
    }

    console.log('메모이즈 ..args ', args);

    if(cache.hasOwnProperty(args)) {
      return cache[args];
    }

    const result = fn(...args);
    cache[args] = result;

    return fn(...args);
  }
}

// memoize(getAverageColorOfImage(img)) === getAverageColorOfImage(img);
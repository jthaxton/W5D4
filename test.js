function madLib(verb, adjective, noun) {
  const v = verb.toUpperCase();
  const a = adjective.toUpperCase();
  const n = noun.toUpperCase()

  console.log(`We shall ${v} the ${a} ${n}`);
}

function isSubstring(searchString, subString) {
  // let arr = []
  // searchString.substring().forEach(function(item){
  //   arr.push(item);
  // });
  // console.log(arr);
  console.log(subString.substring(1,3));
}

function fizzBuzz(array) {
  let arr = []
  array.forEach(function(item){
    if (item % 3 === 0 ^ item % 5 === 0) {
      arr.push(item);
    }
  });
  console.log(arr);
}

function isPrime(n) {
   for(let i = 2; i < n; i++ ) {
    if (n % i === 0) {
      console.log(false);
    }
  }
  console.log(true);
}

function firstNPrimes(n){
  let arr = []
  for(let i = arr.length; i <= n; i++) {
    if (isPrime(i)){
      arr.push(i)
    }
  }
  console.log(arr);
}

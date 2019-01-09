function hi() {
  console.log('HI');
  return 'hey';
}

// hi();

console.log(hi);
console.log(hi())

function number() {
  for(let i = 0; i < 11; i++) {
    console.log(i)
  }
}

number();

let arr = ['this', 'is', 'dumb'];


function ind() {
  for(item of arr) {
   console.log(item);
  }
}

ind();
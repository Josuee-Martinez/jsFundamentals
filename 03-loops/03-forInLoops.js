let student = {
  name: 'harry',
  awesome: true,
  degree: 'javascript',
  week: 1
};

for(item in student) {
  // console.log(item);
  console.log(student[item]);
} 

let pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];

for(item in pieArray) {
  console.log(item);
}

var studentName = 'harry';
var capName;

for(let item in studentName) {
  if(item == 0 ) {
    capName = studentName[item].toUpperCase();
  } else {
    capName += studentName[item].toLowerCase();
  }
}

console.log(capName);


let name = 'josue';

for(item in name) {
  console.log(name[item].toUpperCase());
}


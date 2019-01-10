let food = ['pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for(f in food) {
  console.log(food[f]);
}

food.push('pizza');

food.splice(1,1, 'banana');
//         

console.log(food);

food.splice(4, 3);
console.log(food);
food.pop();
console.log(food);
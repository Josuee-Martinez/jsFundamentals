let friend = 'Ing';

switch(friend) {
  case 'Zach': 
    console.log('lets play ultimate');
    break;
  case 'Ing':
    console.log('so youre taking me to belgium');
    break;
  case 'Adam':
    console.log('i have baby stuff');
   break;
  default:
    console.log('no friend')
}

let dessert = 'cake';

switch(dessert) {
  case 'pie':
    console.log('pie, pie, oh my!');
    break;
  case 'cake':
    console.log('cake is great');
    break;
  case 'ice cream':
    console.log('ice scream for ice cream');
    break;
  default:
    console.log('not in menu');
} 

let range = -8;

switch (true) {
  case (range < 0 && range > -10):
    console.log('worked');
    break;

  default:
    break;
}
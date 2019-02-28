// var amount = prompt('enter amout');
//
// if(amount=== 0 || amount<=300000){
//   alert('REGULAR');
// }else if (amount=== 301000 || amount<=600000) {
//   alert('GOLD');
//
// }else if (amount=== 601000 || amount<=800000) {
//   alert('PLATNIUM');
//
// }else {
//   alert('FIGURE NOT WITHIN RANGE');
// }


var package = prompt('enter your package');

switch (package) {
  case "Regular":
  alert('Account is regular');
    break;

    case "silver":
    alert('Account is Silver');
      break;

      case "Gold":
      alert('Account is Gold');
        break;


  default:
  alert('Account Imnalid');

}

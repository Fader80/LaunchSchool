let chocolate = 'Lifesavers';

switch(chocolate){
  case  'Twix':
  case 'Snickers':
  case 'Maltesers':
  case 'Mars':
    console.log('the chocolate is in the Mars family of confectionery');
    break;
  case 'Dairy Milk':
  case 'Whole Nut':
  case 'Roses':
    console.log('the chocolate is in the Cadbury\'s family of confectionery');
    break;
  case 'Hersheys':
  case 'Lifesavers':
    console.log('the chocolate in an American confectionery');
    break;
  default: 
    console.log('the chocolate is neither Mars, Cadbury\'s nor American');
    break;
}

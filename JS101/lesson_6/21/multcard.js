
let suite  = '♠';

let val = 10;

let card3 =
 `-------       --------        --------
|${val}     |      |${val}     |        |${val}     |     
|       |      |       |        |       |         
|   ${suite}   |      |   ${suite}   |        |   ${suite}   |       
|       |      |       |        |       |
|     ${val}|      |     ${val}|        |     ${val}|  
 -------        -------          ------- `;
 


 let card2 = 
 `  -------       -------  
 |${val}     |     |${val}     |
 |       |     |       |
 |  ${suite}    |     |   ${suite}   |
 |       |     |       |
 |     ${val}|     |     ${val}|
  -------       -------`;


  let card4 =
  `-------       --------        --------          --------
|${val}     |      |${val}     |        |${val}     |    |${val}     |
|       |      |       |        |       |     |     |
|   ${suite}   |      |   ${suite}   |        |   ${suite}   |    |   ${suite}   |       
|       |      |       |        |       |      |       |
|     ${val}|      |     ${val}|        |     ${val}|    |     ${val}|
 -------        -------          -------                -------`;
  
 



 
 console.log(card4);
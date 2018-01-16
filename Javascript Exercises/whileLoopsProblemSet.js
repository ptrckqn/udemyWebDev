var qOneCount = -10;
var qTwoCount = 10;
var qThreeCount = 300;
var qFourCount = 5;

while(qOneCount <=19){
  console.log(qOneCount);
  qOneCount++;
}

while(qTwoCount <= 40){
  if((qTwoCount % 2) === 0){
    console.log(qTwoCount);
  }
  qTwoCount++;
}

while(qThreeCount <= 333){
  if((qThreeCount % 2) === 1){
    console.log(qThreeCount);
  }
  qThreeCount++;
}

while(qFourCount <= 50){
  if(((qFourCount % 3) === 0) && (qFourCount % 5) === 0){
    console.log(qFourCount);
  }
  qFourCount++;
}

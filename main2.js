// 전역변수 3개!
const formSheet= document.querySelector("#formSheet");
const result = document.querySelector("#result");
const maxNumber = document.querySelector("#maxNumber");

function handleNum(event){
  event.preventDefault();
  
  const answerInput = formSheet.querySelector("input"); //ok
  const answerValue = answerInput.value;
  const max = maxNumber.value; //ok
  const result = document.querySelector("span");
  const machine_Num= Math.ceil(Math.random()*max); //ok 기계가 고른 값
  const ans_Num = parseInt(answerValue,10);  //ok 사람이 고른값

  if( max ==="" && answerValue===""){
    return;
  }
  result.innerHTML=
  `You chose ${ans_Num},
  the M/C chose ${machine_Num}
  </br>
  <strong>
  ${
    ans_Num === machine_Num ? "You Right!" : 
    "~ Fail ~" 
  }
  </strong>
  `;

}

formSheet.addEventListener("submit",handleNum);
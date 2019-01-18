window.onload=function(){
   var  inputElms=document.querySelectorAll("input");
  //timer
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var intervallID=setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        document.getElementById("startGame").disabled=true;

        if (--timer < 0) {
          //debugger;
            sudoku();
            clearInterval(intervallID);
            document.getElementById("startGame").disabled=false;
            for(var i= 0;i<inputElms.length;i++){
              inputElms[i].disabled=true;
            }
        }
    }, 1000);
   // clearInterval(intervallID);
}

  //timer
  // randomize rows with value
  function randomize(){
    // clearing prev randoms
    for(var i= 0;i<inputElms.length;i++){
       inputElms[i].value="";
       inputElms[i].disabled=false;
       inputElms[i].style.backgroundColor="";
    }//clearing prev randoms
    // random [1-4] non reapted//
    function generateNumArr(limit) {
      ret = [];
      for (var i = 1; i < limit; i++) {
          ret.push(i);
      }
  
      return ret;
  }
  
  function shuffle(array) {
      var i = array.length,
          j = 0,
          temp;
  
      while (i--) {
  
          j = Math.floor(Math.random() * (i+1));
  
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  
      return array;
  }
  
  var ranNums = shuffle(generateNumArr(5));
  
 // random [1-4] non reapted//

    var randomR1=Math.floor((Math.random() * 4) );//0,1,2,3
    for(var i= 0;i<4;i++){
      if(randomR1==i){
        inputElms[i].value=ranNums[0];//1,2,3,4
        inputElms[i].disabled = true;
        inputElms[i].style.backgroundColor="#ffbc00";

      }
    }
    //debugger;
      var randomR2 = Math.floor(Math.random()*(7-4+1)+4);//4,5,6,7
      for(var i= 4;i<8;i++){
        if( randomR2==i ){
          inputElms[i].value=ranNums[1];//1,2,3,4
          inputElms[i].disabled = true;
          inputElms[i].style.backgroundColor="#ffbc00";

        }
      }
      var randomR3 = Math.floor(Math.random()*(11-8+1)+8);//8,9,10,11
      for( var i =8;i<12;i++){
        if( randomR3==i ){
          inputElms[i].value=ranNums[2];//1,2,3,4
          inputElms[i].disabled = true;
          inputElms[i].style.backgroundColor="#ffbc00";

        }
      }
      var randomR4=Math.floor(Math.random()*(15-12+1)+12);//12,13,14,15
      for(var i =12;i<16;i++){
        if(randomR4==i){
          inputElms[i].value=ranNums[3];//1,2,3,4
          inputElms[i].disabled = true;
          inputElms[i].style.backgroundColor="#ffbc00";
        }
      }
    }


  //randomize rows with value
  // handle sudoku Game
  function sudoku(){
     var checkArray=[1,2,3,4];
     // rows
     var arrRow1=[];
     var arrRow2=[];
     var arrRow3=[];
     var arrRow4=[];
     
     for(var i= 0;i<4;i++){
       arrRow1[i]=parseInt(inputElms[i].value);//0,1,2,3
     }
     //console.log(arrRow1);
     var count1=0;
     for(var i= 4;i<8;i++){
      arrRow2[count1]=parseInt(inputElms[i].value);//4,5,6,7
      count1++;
    }
    //console.log(arrRow2)
     var count2=0;
    for(var i= 8;i<12;i++){
      arrRow3[count2]=parseInt(inputElms[i].value);//8,9,10,11
      count2++;
    }
   // console.log(arrRow3);
      var count3=0;
    for(var i= 12;i<16;i++){
      arrRow4[count3]=parseInt(inputElms[i].value);//12,13,14,15
      count3++;
    }
    //console.log(arrRow4);
// rows
// cols
     var arrCol1=[];
     var arrCol2=[];
     var arrCol3=[];
     var arrCol4=[];
     var count3=0;
     for(var i= 0;i<13;i+=4){
      arrCol1[count3]=parseInt(inputElms[i].value);//0,4,8,12
      count3++;
    }
   // console.log(arrCol1);
     var count4=0;
    for(var i= 1;i<14;i+=4){
      arrCol2[count4]=parseInt(inputElms[i].value);//1,5,9,13
      count4++;
    }
    //console.log(arrCol2);
     var count5=0;
    for(var i= 2;i<15;i+=4){
      arrCol3[count5]=parseInt(inputElms[i].value);//2,6,10,14
      count5++;
    }
    console.log(arrCol3);
    var count6=0;
    for(var i= 3;i<16;i+=4){
      arrCol4[count6]=parseInt(inputElms[i].value);//3,7,11,15
      count6++;
    }
   // console.log(arrCol4);
    // cols
    // blocks
   
    var block1=[parseInt(inputElms[0].value),parseInt(inputElms[1].value),parseInt(inputElms[4].value),parseInt(inputElms[5].value)];
    var block2=[parseInt(inputElms[2].value),parseInt(inputElms[3].value),parseInt(inputElms[6].value),parseInt(inputElms[7].value)];
    var block3=[parseInt(inputElms[8].value),parseInt(inputElms[9].value),parseInt(inputElms[12].value),parseInt(inputElms[13].value)];
    var block4=[parseInt(inputElms[10].value),parseInt(inputElms[11].value),parseInt(inputElms[14].value),parseInt(inputElms[15].value)];
    /* console.log(block1);
     console.log(block2);
     console.log(block3);
     console.log(block4);*/
    // blocks  
    // check code 
    checkFlagArray=[];

    arrRow1.sort(function(a, b){return a - b});
    arrRow2.sort(function(a, b){return a - b});
    arrRow3.sort(function(a, b){return a - b});
    arrRow4.sort(function(a, b){return a - b});
    arrCol1.sort(function(a, b){return a - b});
    arrCol2.sort(function(a, b){return a - b});
    arrCol3.sort(function(a, b){return a - b});
    arrCol4.sort(function(a, b){return a - b});
    block1.sort(function(a, b){return a - b});
    block2.sort(function(a, b){return a - b});
    block3.sort(function(a, b){return a - b});
    block4.sort(function(a, b){return a - b});
    if(JSON.stringify(arrRow1)==JSON.stringify(checkArray)){
      checkFlagArray[0]=true;
    }
    else{
      checkFlagArray[0]=false;
    }
     //
    if(JSON.stringify(arrRow2)==JSON.stringify(checkArray)){
      checkFlagArray[1]=true;
    }
    else{
      checkFlagArray[1]=false;
    }
  ///
  if(JSON.stringify(arrRow3)==JSON.stringify(checkArray)){
    checkFlagArray[2]=true;
  }
  else{
    checkFlagArray[2]=false;
  }
  ///
  if(JSON.stringify(arrRow4)==JSON.stringify(checkArray)){
    checkFlagArray[3]=true;
  }
  else{
    checkFlagArray[3]=false;
  }
  ///
  if(JSON.stringify(arrCol1)==JSON.stringify(checkArray)){
    checkFlagArray[4]=true;
  }
  else{
    checkFlagArray[4]=false;
  }
  //
  if(JSON.stringify(arrCol2)==JSON.stringify(checkArray)){
    checkFlagArray[5]=true;
  }
  else{
    checkFlagArray[5]=false;
  }
  //
  if(JSON.stringify(arrCol3)==JSON.stringify(checkArray)){
    checkFlagArray[6]=true;
  }
  else{
    checkFlagArray[6]=false;
  }
  //
  if(JSON.stringify(arrCol4)==JSON.stringify(checkArray)){
    checkFlagArray[7]=true;
  }
  else{
    checkFlagArray[7]=false;
  }
//
if(JSON.stringify(block1)==JSON.stringify(checkArray)){
  checkFlagArray[8]=true;
}
else{
  checkFlagArray[8]=false;
}
//
if(JSON.stringify(block2)==JSON.stringify(checkArray)){
  checkFlagArray[9]=true;
}
else{
  checkFlagArray[9]=false;
}
//
if(JSON.stringify(block3)==JSON.stringify(checkArray)){
  checkFlagArray[10]=true;
}
else{
  checkFlagArray[10]=false;
}
//
if(JSON.stringify(block4)==JSON.stringify(checkArray)){
  checkFlagArray[11]=true;
}
else{
  checkFlagArray[11]=false;
}
  // Win Check !!!!!!!!!!!!!
  var WinFlag=checkFlagArray.every(function(e){
    return e==true;
  });
  if(WinFlag==true){
    alert(" you Won The Game");
  }
  else{
    alert("sorry you lose!\n try Again");
  }
  }
  // handle sudoku Game
  

  
  // validation 
  for(var i=0;i<inputElms.length;i++){
    /*inputElms[i].addEventListener("focus",function(event){
      if(this.value.match(/^[1-4]$/)) {
        event.preventDefault();
        //event.value="";
        this.style.backgroundColor="#30bfd0";

       }
    })*/
    inputElms[i].addEventListener("blur",function(){
      if(!this.value.match(/^[1-4]$/)) {
        this.value="";
      }
    })
  }// validation
  // keyArrow
  for(var i= 0;i<inputElms.length;i++){
    inputElms[i].addEventListener("keydown",
       function(event){
         if(event.keyCode == 37){//leftArrow
            if(this.id==0 ) {
              document.getElementById("15").focus();
            }
            else{
             var prev = parseInt(this.id )-1
              document.getElementById(prev).focus();
            }
         }//leftArrow

            if(event.keyCode==39){// rightArrow
               if(this.id== 16){
                 document.getElementById("0").focus();
               }
                else{ 
                  var next = parseInt(this.id)+1
                  if(next==16){
                    document.getElementById("0").focus();
                  }
                 else{document.getElementById(next).focus();}
                }

               }//rightArrow

               if(event.keyCode==38){//upArrow
                if(this.id==0){
                  document.getElementById("12").focus();
                }
                else if(this.id ==1){
                  document.getElementById("13").focus();
                }
                else if(this.id==2){
                  document.getElementById("14").focus();
                }
               else  if(this.id==3){
                  document.getElementById("15").focus();
                }
                else{
                  var up = parseInt(this.id)-4
                document.getElementById(up).focus();
                }


               }// upArrow


               if(event.keyCode==40){//downArrow
                   if(this.id==12){
                     document.getElementById("0").focus();

                   }
                   else if(this.id==13){
                    document.getElementById("1").focus();

                  }
                  else if(this.id==14){
                    document.getElementById("2").focus();
                  }
                  else if(this.id==15){
                    document.getElementById("3").focus();
                  }
                  else {
                    var down =  parseInt(this.id)+4
                    document.getElementById(down).focus();
                  }

               }//downArrow
            }
       
      
    );
  }// keyArrow
  
  // timer 
  document.getElementById("startGame").addEventListener("click",function(){
    //document.getElementById("startGame").disabled=true;
    var twoMinutes = 60 * 2;
    var  display = document.querySelector('#time');
    startTimer(twoMinutes, display);
    randomize();// randomize numbers
    
    
  });

};//load
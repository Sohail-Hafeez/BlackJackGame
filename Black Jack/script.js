let music = document.querySelector("#music");
music.play();
// Initializing the scores to zero 
let cptr1Score = 0;
let cptr2Score = 0;
let plyr1Score = 0;
let plyr2Score = 0;
let score = 0;

let i = 0;
let j = 0;
let cptrScore = document.querySelector(".cptrScore");
let plyrScore = document.querySelector(".plyrScore");;
let msg = document.querySelector(".msg");


music.play();
// defining cards as a object 
const deck = {
  spades: {
    1: "🂡", 2: "🂢", 3: "🂣", 4: "🂤", 5: "🂥",
    6: "🂦", 7: "🂧", 8: "🂨", 9: "🂩", 10: "🂪",
    11: "🂫", 12: "🂭", 13: "🂮"
  },
  hearts: {
    1: "🂱", 2: "🂲", 3: "🂳", 4: "🂴", 5: "🂵",
    6: "🂶", 7: "🂷", 8: "🂸", 9: "🂹", 10: "🂺",
    11: "🂻", 12: "🂽", 13: "🂾"
  },
  diamonds: {
    1: "🃁", 2: "🃂", 3: "🃃", 4: "🃄", 5: "🃅",
    6: "🃆", 7: "🃇", 8: "🃈", 9: "🃉", 10: "🃊",
    11: "🃋", 12: "🃍", 13: "🃎"
  },
  clubs: {
    1: "🃑", 2: "🃒", 3: "🃓", 4: "🃔", 5: "🃕",
    6: "🃖", 7: "🃗", 8: "🃘", 9: "🃙", 10: "🃚",
    11: "🃛", 12: "🃝", 13: "🃞"
  }
};


  const cptr1 = document.querySelector("#cptr1");
  const cptr2 = document.querySelector("#cptr2");
  const plyr1 = document.querySelector("#plyr1");
  const plyr2 = document.querySelector("#plyr2");

function splitCards(card){
        let rand = Math.floor(Math.random() * 4)+1;
        if(rand == 1)
        {
            let rand = Math.floor(Math.random() * 13)+1;
            score = rand;
            return deck.spades[rand];
            
        }
        else if(rand==2)
        {
            let rand = Math.floor(Math.random() * 13)+1;
            card.style.color = "red";
            score = rand;
            return deck.spades[rand];
        }
        else if(rand==3)
        {
            let rand = Math.floor(Math.random() * 13)+1;
            score = rand;
            return deck.spades[rand];
        }
        else if(rand==4)
        {
            let rand = Math.floor(Math.random() * 13)+1;
            score = rand;
            card.style.color = "red";
            return deck.spades[rand];
        }
}
// Setting Initial Score of player
function setScorePlayer(){
  
  if(plyr1Score >10)
  {
    plyr1Score = 10;
  }
  if(plyr2Score >10)
  {
    plyr2Score = 10;
  }
  if (plyr1Score == 1)
  {
    plyr1Score = 11;
  }
  
  if(plyr2Score ==1)
  {
    plyr2Score = 11;
  }
  if (plyr1Score == 1 && plyr2Score ==1)
  {
    plyr1Score = 1;
  }
  return plyr1Score + plyr2Score;
}


// set score Computer
function setScoreComputer(){
  if(cptr1Score >10)
  {
    cptr1Score = 10;
  }
  if(cptr2Score >10)
  {
    cptr2Score = 10;
  }
  if (cptr1Score ==1)
  {
    cptr1Score = 11;
  }
  if(cptr2Score ==1)
  {
    cptr2Score = 11;
  }
  cptrScore.innerText = cptr1Score;
}

cptr1.innerText = splitCards(cptr1);

cptr1Score = score;
let stCard = document.querySelector("#stCard");
stCard.innerText = splitCards(stCard);
cptr2Score = score;
plyr1.innerText = splitCards(plyr1);
plyr1Score = score;
plyr2.innerText = splitCards(plyr2);
plyr2Score = score;
setScoreComputer();

plyrScore.innerText = setScorePlayer();

console.log(plyr1Score);
console.log(plyr2Score);



function waitForAnimation(element, className) {
  return new Promise((resolve) => {
    // Remove class if it already exists (to re-trigger)
    element.classList.remove(className);
    void element.offsetWidth; // force reflow

    element.classList.add(className);

    element.addEventListener("animationend", () => {
      resolve();
    }, { once: true }); // listener only once
  });
}

// showing winner
function showWinner(msg)
{
  music.pause();
  if(Number(plyrScore.innerText)<22 && Number(cptrScore.innerText) < 22 && plyrScore > Number(cptrScore.innerText))
  {
    document.querySelector("#massage").innerText = msg.innerText +  "Player Wins";
  }
  else if(Number(plyrScore.innerText)<22 && Number(cptrScore.innerText) < 22 && Number(plyrScore.innerText) == Number(cptrScore.innerText))
  {
    document.querySelector("#massage").innerText =  "Draw";
  }
  else if(Number(plyrScore.innerText) < 22 && Number(cptrScore.innerText) < 22 && Number(plyrScore.innerText) < Number(cptrScore.innerText))
  {
    document.querySelector("#massage").innerText = msg.innerText +  "Computer Wins";
  }
  if(Number(plyrScore.innerText)<22 && Number(cptrScore.innerText) > 21)
  {
    document.querySelector(".msg").innerText =  "Computer Bust's Player Wins";
  }
  if(Number(plyrScore.innerText)>21)
  {
    document.querySelector(".msg").innerText =  "Player Bust's Computer Wins";
  }
  

  document.querySelector("#cptr1").style.display = "none";
  document.querySelector("#cptr2").style.display = "none";
  document.querySelector("#plyr1").style.display = "none";
  document.querySelector("#plyr2").style.display = "none";
  document.querySelector(".plyr").style.display = "none";
  document.querySelector(".cptr").style.display = "none";
  document.querySelector(".continue").style.display = "none";
  document.querySelector(".winner").style.visibility = "visible";
  document.querySelector(".logo-block").style.display = "flex";
  document.querySelector(".cptrScore").style.display = "none";
  document.querySelector(".plyrScore").style.display = "none";

}


document.querySelector("#play").addEventListener("click", async () => {
  // Hide intro UI
  document.querySelector(".logo-block").style.display = "none";
  document.querySelector("#play").style.display = "none";
  document.querySelector("#about").style.display = "none";

  // Make card areas visible
  document.querySelector(".card-stack").style.visibility = "visible";
  document.querySelector(".cptrScore").style.visibility = "visible";
  document.querySelector(".plyrScore").style.visibility = "visible";

  music.play();


  // Animate in sequence
  await waitForAnimation(cptr1, "cpt1");
  await waitForAnimation(plyr1, "ply1");
  await waitForAnimation(cptr2, "cpt2");
  await waitForAnimation(plyr2, "ply2");
  document.querySelector(".continue").style.visibility="visible";
  if(Number(plyrScore.innerText) == 21)
  {
  setTimeout(()=>{
    document.querySelector(".msg").innerText = "Black jack Player Wins";
    showWinner();
    
  },1000);
  return;
  }
});

// hit card score setting
function setHit(){
  if(score==1 && Number(plyrScore.innerText)+11<22)
  {
    score =11;
  }
  else if(score==1 && Number(plyrScore.innerText)+11>21)
  {
    score = 1;
  }
  else if(score>10)
  {
    score = 10
  }
  return score;
}


let hit = document.querySelector(".hit-container");

hit.addEventListener("click", () => {
  
  if(i<4 && Number(plyrScore.innerText)<=21)
  {
    let hitCard = document.createElement("div");
    
    if(i<4)
    {
      hitCard.id = "hitCard" + i;
    }
    hitCard.classList.add("plyr");
    hitCard.innerText = splitCards(hitCard);
    
    plyrScore.innerText = Number(plyrScore.innerText) + setHit();
    
    
    if(plyr1Score==11 && Number(plyrScore.innerText) >21 )
    {
      plyr1Score = 1;
      plyrScore.innerText =  Number(plyrScore.innerText) - 10;
    }
    if(plyr2Score==11 && Number(plyrScore.innerText) >21 )
    {
      plyr2Score = 1;
      plyrScore.innerText =  Number(plyrScore.innerText) - 10;
    }
    document.querySelector(".player").appendChild(hitCard);

    if(Number(plyrScore.innerText) >21 ){
      j=10;
    setTimeout(()=>{
      document.querySelector(".player").style.display = "none";
      document.querySelector(".computer").style.display = "none";
      showWinner(msg);
    },500);
    return;
    }
    i++;
  }
  
});


// hit card score setting for computer
function setHitComputer(){
  if(score==1 && Number(cptrScore.innerText)+11<22)
  {
    score =11;
  }
  else if(score==1 && Number(cptrScore.innerText)+11>21)
  {
    score = 1;
  }
  else if(score>10)
  {
    score = 10
  }
  return score;
}

let stand = document.querySelector(".stand-container");

stand.addEventListener("click", () =>{
if(j<5)
{
   i=10;
  cptr2.innerText = stCard.innerText;
  cptr2.style.backgroundImage = 'url("white.png")';
  cptrScore.innerText = cptr1Score + cptr2Score;
  while(Number(cptrScore.innerText)<18)
  {
    if(j<4 && Number(cptrScore.innerText)<=17)
    {
      let standCard = document.createElement("div");
      
      if(j<4)
      {
        standCard.id = "standCard" + j;
      }
      standCard.classList.add("cptr");
      standCard.innerText = splitCards(standCard);
      
      cptrScore.innerText = Number(cptrScore.innerText) + setHitComputer();
      
      
      if(cptr1Score==11 && Number(cptrScore.innerText) >21 )
      {
        cptr1Score = 1;
        cptrScore.innerText =  Number(cptrScore.innerText) - 10;
      }
      if(cptr2Score==11 && Number(cptrScore.innerText) >21 )
      {
        cptr2Score = 1;
        cptrScore.innerText =  Number(cptrScore.innerText) - 10;
      }
      document.querySelector(".computer").appendChild(standCard);
      j++;
    }
    j++;
  }
  setTimeout(()=>{
    document.querySelector(".player").style.display = "none";
    document.querySelector(".computer").style.display = "none";
    showWinner(msg);
  },1000);
  return;
}
else{
  console.log("hello ");
}
});

let main =  document.querySelector(".playsAgain");

main.addEventListener("click", () =>{
  location.reload();
})

let about = document.querySelector("#about");
about.addEventListener("click", ()=>{
   // Hide intro UI
  document.querySelector(".logo-block").style.display = "none";
  document.querySelector("#play").style.display = "none";
  document.querySelector("#about").style.display = "none";
  document.querySelector(".rules").style.visibility = "visible";
})


let close = document.querySelector(".close");
close.addEventListener("click", ()=>{
   // Hide intro UI
  document.querySelector(".logo-block").style.display = "block";
  document.querySelector("#play").style.display = "block";
  document.querySelector("#about").style.display = "block";
  document.querySelector(".rules").style.visibility = "hidden";
})
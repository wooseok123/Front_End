function randInt(m,n) {
  return m + Math.ceil(Math.random()*(n-m));
}

function randFace(facesKey) {
  return facesKey[randInt(0,5)];
}

let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
  round ++
  console.log(`round ${round}`);
  console.log(`\tstarting funds : ${funds}p`);

  let faces = { 
    "crown"  : 0, 
    "anchor" : 0,
    "heart" : 0,
    "spade" : 0,
    "club" : 0,
    "diamond" : 0,
  };
  const facesKey = Object.keys(faces);

  // 돈을 건다
  let totalBet = randInt(1,funds);
  if(totalBet === 7) {
    // 행운의 숫자 7이 나올 경우 판돈을 전부 건다
    totalBet = funds;
  } else {
    // 판 돈을 나눈다
    let remaining = totalBet;
    do {
      let bet = randInt(1,remaining);
      let face = randFace(facesKey);
      faces[face] += bet;
      remaining -= bet;
    } while(remaining > 0)
  }

  funds -= totalBet;
  console.log('\tbets : ' +
    facesKey.map(face => `${face} : ${faces[face]} pence`).join(', ') +
    `\t (total: ${totalBet} pence)`);
  
  // 주사위를 굴린다
  const hand = [];
  for(let roll = 0; roll < 3; roll ++) {
    hand.push(randFace(facesKey));
  }
  console.log(`\thand : ${hand.join(', ')}`);

  // 딴 돈을 가져온다
  let winnings = 0;
  for(let die=0; die<hand.length; die++) {
    let face = hand[die];
    if(faces[face] > 0) {
      winnings = winnings + faces[face];
    }
  }
  funds = funds + winnings;
  console.log(`\twinnings : ${winnings}`);
  console.log("현재자금 :" + funds);
}
console.log(`\ttending funds : ${funds}`);




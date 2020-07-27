let flag = true;
let plyName = prompt("名前を入力してください");
plySt0.textContent = plyName;
//プレイヤーデータ
let plyLv = 1;
let plyHp = 6;
let plyHpMax = 6;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let plyExpNeed = [5, 10, 20, 35, 55, 80, 110, 145, 185, 230];
let plyimg = document.getElementById("plyimg");
for (i = 0; i > 6; i++) {
  let plySti = document.getElementById("plySt" + i);
}
//プレイヤー回復
plyimg.addEventListener("mousedown", () => {
  if (flag) {
    plyimg.src = "img/playerC.png";
  }
});
plyimg.addEventListener("mouseup", () => {
  if (flag) {
    plyimg.src = "img/playerA.png";
    plyHp += plyHeal;
    if (plyHp > plyHpMax) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
  }
});
//敵データ
let eneLv = 0;
let eneHp = [10, 15, 20, 25, 30, 40, 50, 60, 80, 100];
let eneHpMax0 = [10, 15, 20, 25, 30, 40, 50, 60, 80, 100];
let eneAtt0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let eneKill0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let eneExp0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let eneCnt0 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let eneCntMax0 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let eneName0 = [
  "スライム",
  "コウモリ",
  "ネズミ",
  "ヘビ",
  "オオカミ",
  "子鬼",
  "ゴースト",
  "ゾンビ",
  "火の玉",
  "クマ",
];
let eneimg = document.getElementById("eneimg");
for (i = 0; i > 4; i++) {
  let eneSti = document.getElementById("eneSt" + i);
}
//敵を攻撃
eneimg.addEventListener("mousedown", () => {
  if (flag) {
    i = eneLv;
    eneimg.src = "img/enemyB" + i + ".png";
  }
});
eneimg.addEventListener("mouseup", () => {
  if (flag) {
    eneimg.src = "img/enemyA" + i + ".png";
    if (eneHp[eneLv] > 0) {
      eneHp[eneLv] -= plyAtt;
    } else {
      if (eneLv == 9) {
        flag = false;
        eneimg.src = "img/clear.png";
        clearInterval(loop);
      }
      eneHp[eneLv] = eneHpMax0[eneLv];
      eneKill0[eneLv]++;
      eneSt4.textContent = "倒した回数:" + eneKill0[eneLv];
      //経験値の処理
      plyExp += eneExp0[eneLv];
      plySt5.textContent = "経験値:" + plyExp;
      plyExpNext -= eneExp0[eneLv];
      //レベルアップの処理
      if (plyExpNext < 0) {
        plyExpNext = plyExpNeed[plyLv];
        plyLv++;
        plySt1.textContent = "レベル:" + plyLv;
        plyHpMax += 5;
        plyHp = plyHpMax;
        plySt2.textContent = "HP:" + plyHp;
        plyAtt++;
        plySt3.textContent = "攻撃力:" + plyAtt;
        plyHeal++;
        plySt4.textContent = "回復魔法:" + plyHeal;
      }
      plySt6.textContent = "次のレベルまでの経験値:" + plyExpNext + "ポイント";
    }
    eneSt2.textContent = "HP:" + eneHp[eneLv];
  }
});
//次のモンスター

right.addEventListener("mouseup", () => {
  if (flag) {
    i = eneLv;
    eneimg.src = "img/enemyA" + i + ".png";
  }
});
right.addEventListener("mousedown", () => {
  if (flag) {
    i = eneLv++;
    if (eneLv > 9) {
      eneLv = 9;
      eneSt0.textContent = eneName0[eneLv];
      eneSt1.textContent = "経験値：" + eneExp0[eneLv];
      eneSt2.textContent = "HP：" + eneHpMax0[eneLv];
      eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
      eneSt4.textContent = "倒した回数：" + eneKill0[eneLv];
    }
  }
  eneSt0.textContent = eneName0[eneLv];
  eneSt1.textContent = "経験値：" + eneExp0[eneLv];
  eneSt2.textContent = "HP：" + eneHpMax0[eneLv];
  eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
  eneSt4.textContent = "倒した回数：" + eneKill0[eneLv];
});
//逃げる

left.addEventListener("mouseup", () => {
  if (flag) {
    i = eneLv;
    eneimg.src = "img/enemyA" + i + ".png";
  }
});
left.addEventListener("mousedown", () => {
  if (flag) {
    eneLv--;
    if (eneLv < 0) {
      eneLv = 0;
      eneSt0.textContent = eneName0[eneLv];
      eneSt1.textContent = "経験値：" + eneExp0[eneLv];
      eneSt2.textContent = "HP：" + eneHpMax0[eneLv];
      eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
      eneSt4.textContent = "倒した回数：" + enekill0[eneLv];
    }
  }
  eneSt0.textContent = eneName0[eneLv];
  eneSt1.textContent = "経験値：" + eneExp0[eneLv];
  eneSt2.textContent = "HP：" + eneHpMax0[eneLv];
  eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
  eneSt4.textContent = "倒した回数：" + enekill0[eneLv];
});
//敵が時間ごとに攻撃
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
  if (eneCnt0[eneLv] > 0) {
    eneCnt0[eneLv]--;
    eneSec.textContent = "モンスターの攻撃まで" + eneCnt0[eneLv] + "秒";
  } else {
    plyimg.src = "img/playerB.png";
    plyHp -= eneAtt0[eneLv];
    eneCnt0[eneLv] = 5;
    if (plyHp > 0) {
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt0[eneLv] + "秒";
    } else {
      plyHp = 0;
      clearInterval(loop);
      flag = false;
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "ゲームオーバー";
    }
    setTimeout(() => {
      if (flag) {
        eneCnt0 = eneCntMax0;
        plyimg.src = "img/playerA.png";
        eneSec.textContent = "モンスターの攻撃まで" + eneCnt0[eneLv] + "秒";
      }
    }, 500);
  }
}, 1000);

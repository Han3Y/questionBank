/**
 * 实现⼀个拼⼿⽓分红包的⽅法，传⼊总⾦额及⼈数，返回每个⼈分得的⾦额数组（单位 为分） 1. 每个⼈⾄少要有1分钱 1. 总⾦额不能超过或不到
 */
let redEnvelope = function (moneyAmount, personCount){
  let personMoney = new Array(personCount).fill(0);
  let moneyLeft = moneyAmount;
  for(let i = 0; i < personCount; i ++){
    if(i == (personCount -1)){
      personMoney[i] = moneyLeft;
      break;
    }
    let money = getMoneyItem(moneyLeft, personCount - i);
    moneyLeft = toFixed(moneyLeft - money, 2);
    personMoney[i] = money;
  }
  return personMoney;
}

let getMoneyItem = function (moneyLeft, personLeft){
  if(moneyLeft == personLeft * 0.01){
    return 0.01;
  }
  let money = toFixed(Math.random() * moneyLeft  + 0.01, 2);
  if ((moneyLeft - money) < (0.01 * (personLeft - 1))){
    money = getMoneyItem(moneyLeft, personLeft);
  }
  return money;
}

let toFixed = function (num, s){
  let times = Math.pow(10, s)
  let des = num * times + 0.5
  des = parseInt(des, 10) / times
  return des;
}

const personMoney = redEnvelope(100, 10)
console.log(personMoney);
let total = personMoney.reduce((total, num) => {
  return total + num;
})
console.log(total);

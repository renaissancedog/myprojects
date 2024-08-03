let allCards=["2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS","AS","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AH",
"2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AD","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AC"]
let money=200
let rounds=0;
let sum=0;
let cards=[...allCards]
let playerCards=[]
let dealerCards=[]
let dealerScore=0
let dealerAce=0
let aces=0
let betamt=10
class Game {
  deal() {
    let c=getRandomInt(0,cards.length)
    q("cards").innerHTML += cards[c]+" "
    sum+=val(cards[c])
    if (val(cards[c])==11) {
      aces++
    }
    playerCards.push(cards[c])
    cards.splice(c,1) 
  
    //LOGIC
    while (aces>0&&sum>21){
      aces--;
      sum-=10;
    }
    if (sum>21){
      q("roundinfo").innerHTML="Round "+rounds
      q("info").innerHTML=("You drew a "+playerCards[playerCards.length-1]+". You lost!")
      q("info2").innerHTML=""
      q("info3").innerHTML=""
      money-=betamt
      this.reset()
    }
    this.update()
  }
  dealerDeal() {
    let c=getRandomInt(0,cards.length)
    q("dealerCard").innerHTML += cards[c]+" "
    dealerScore+=val(cards[c])
    dealerCards.push(cards[c])
    cards.splice(c,1) 

    c=getRandomInt(0,cards.length)
    q("dealerCard").innerHTML += "? "
    dealerCards.push(cards[c])
    dealerScore+=val(cards[c])
    cards.splice(c,1) 
  }
  reset() {
    if (money<=0) {
      alert("You lost all your money! Here's a $200 bailout.")
      money+=200
    }
    sum=0
    q("cards").innerHTML="Cards: "
    aces=0
    dealerAce=0
    playerCards=[]
    dealerCards=[]
    rounds++;
    if (rounds%5==0) {
      cards=[...allCards]
    }
    q("dealerCard").innerHTML = "Dealer's Cards: "
    dealerScore=0
    this.deal()
    this.deal()
    this.dealerDeal()
    this.update()
    if (sum==21&&dealerScore!=21) {
      alert("Round "+rounds+": You got Blackjack! Your cards were "+playerCards+". Dealer's cards were "+dealerCards)
      money+=1.5*betamt
      this.reset()
    }
    if (dealerScore==21&&sum!=21) {
      alert("Round "+rounds+": Dealer got Blackjack! Your cards were "+playerCards+". Their cards were "+dealerCards)
      money-=betamt
      this.reset()
    }
    if (dealerScore==21&&sum==21) {
      alert("Round "+rounds+": You and the dealer both got Blackjack! Your cards were "+playerCards+". Their cards were "+dealerCards)
      this.reset()
    }
  }
  stand() {
    while (dealerScore<17) {
      let c=getRandomInt(0,cards.length)
      dealerScore+=val(cards[c])
      dealerCards.push(cards[c])
      if (val(cards[c])==11){
        dealerAce++
      }
      cards.splice(c,1) 
      while (dealerAce>0&&(dealerScore>21||dealerScore<sum||dealerScore==17)){
        dealerAce--;
        dealerScore-=10;
      }
    }
    q("roundinfo").innerHTML="Round "+rounds
    q("info").innerHTML=("Dealer's Cards: "+dealerCards)
    q("info2").innerHTML=("Dealer's Score: "+dealerScore)
    if (dealerScore>21) {
      q("info3").innerHTML="You Won!"
      money+=betamt
    } else {
      if (dealerScore>sum){
        q("info3").innerHTML="You Lost!"
        money-=betamt
      }
      if (dealerScore<sum){
        q("info3").innerHTML="You Won!"
        money+=betamt
      }
      if (dealerScore==sum){
        q("info3").innerHTML="Draw"
      }
    }
    this.update()
    this.reset()
  }
  update() {
    q("money").innerHTML="Money: $"+money
    q("sum").innerHTML = "Sum: "+sum
    q("rounds").innerHTML = "Round "+rounds
  }
  betamt() {
    betamt=prompt("Enter Bet Amount")
    while (betamt<0) {
      betamt=prompt("Please enter a nonnegative bet amount.")
    }
  }
}
function start() {
  game=new Game()
  game.reset()
  game.rounds=0
}
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
function q(id){
  return document.getElementById(id)
}
function val(c) {
  let ch=c.charAt(0)
  if (ch=='A'){
    return 11;
  }
  if (ch=='J'||ch=='Q'||ch=='K'){
    return 10;
  }
  if (ch=='1'){return 10;}
  return parseInt(ch)
}
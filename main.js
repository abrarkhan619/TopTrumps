const firstCardButton = document.getElementById('firstCardButton');
const yourCardImg = document.getElementById('yourCardImg')

class TopTrumps {
    constructor(id, name, pace) {
        this.id = id
        this.name = name;
        this.pace = pace;
    }

    id() {
        return this.id
    }

    name() {
        return this.name
    }
    pace() {
        return this.pace
    }
}

const fullDeck = [
    ronaldo = new TopTrumps("ronaldo", "Cristiano Ronaldo", 90),  //card1
    messi = new TopTrumps("messi", "Lionel Messi", 87), //card2
    rashford = new TopTrumps("rashford", "Marcus Rashford", 92), //card3
    neymar = new TopTrumps("neymar", "Neymar Jr", 91), //card4
    pogba = new TopTrumps("pogba", "Paul Pogba", 74), //card5
    mbappe = new TopTrumps("mbappe", "Mbappe", 96), //card6
    vanDijk = new TopTrumps("vanDijk", "Van Dijk", 77), //card7
    moSalah = new TopTrumps("moSalah", "Mo Salah", 93), //card8
    dybala = new TopTrumps("dybala", "Dybala", 83), //card9
    dJames = new TopTrumps("dJames", "Daniel James", 94), //card10
]

let arrayShuffle = function(arr) {
    let newPos;
    let temp;

    for (let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1))
        temp = arr[i];
        arr[i] = arr[newPos]
        arr[newPos] = temp;
    }
    return arr
}

let shuffledDeck = arrayShuffle(fullDeck);
// console.log(shuffledDeck);

const deckOne = shuffledDeck.splice(0, 5);
const deckTwo = shuffledDeck
// console.log("I am the first deck");
// console.log(deckOne)
// console.log("I am the second deck");
// console.log(deckTwo)

const compareDecks = () => {
    if (deckOne[0].pace < deckTwo[0].pace) {
        let firstElement = deckOne.shift();
        let tempDeck = deckTwo.shift;
        deckTwo.push(firstElement);
        deckTwo.push(tempDeck);
    } else {
        let firstElement = deckTwo.shift();
        let tempDeck = deckOne.shift();
        deckOne.push(firstElement);
        deckOne.push(tempDeck);
    }
}

console.log(deckOne);
console.log(deckTwo);
compareDecks();
console.log("deck after comparison")
console.log(deckOne.length)
console.log(deckTwo.length)
console.log(deckOne);
console.log(deckTwo);
// compareDecks();
// console.log("deck after comparison")
// console.log(deckOne.length)
// console.log(deckTwo.length)
// console.log(deckOne);
// console.log(deckTwo);

firstCardButton.addEventListener("click", () =>{
    compareDecks()

    yourCardImg.src = `images/${deckOne[0].id}.png`;
    computerCardImg.src = `images/${deckTwo[0].id}.png`;
    console.log(`images/${deckOne[0].id}.png`)
})


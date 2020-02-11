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
    ronaldo = new TopTrumps("ronaldo", "Cristiano Ronaldo", 90),  //card1 90
    messi = new TopTrumps("messi", "Lionel Messi", 87), //card2 87
    rashford = new TopTrumps("rashford", "Marcus Rashford", 90), //card3 92
    neymar = new TopTrumps("neymar", "Neymar Jr", 91), //card4 91
    pogba = new TopTrumps("pogba", "Paul Pogba", 90), //card5 74
    mbappe = new TopTrumps("mbappe", "Mbappe", 90), //card6 96
    dembele = new TopTrumps("dembele", "Dembele", 93), //card7 93
    sancho = new TopTrumps("sancho", "Jadon Sancho", 88), //card8
    dybala = new TopTrumps("dybala", "Dybala", 83), //card9
    dJames = new TopTrumps("dJames", "Daniel James", 90), //card10 94
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
let holdingDeck = []
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
        deckTwo.push(holdingDeck);
        console.log(deckOne)
        console.log(deckTwo)
        console.log(holdingDeck)
    } else if (deckOne[0].pace > deckTwo[0].pace) {
        let firstElement = deckTwo.shift();
        let tempDeck = deckOne.shift();
        deckOne.push(firstElement);
        deckOne.push(tempDeck);
        deckOne.push(holdingDeck)
        console.log(deckOne)
        console.log(deckTwo)
        console.log(holdingDeck)
    } else {
        let deckOneCard = deckOne.shift();
        let deckTwoCard = deckTwo.shift();
        holdingDeck.push(deckOneCard)
        holdingDeck.push(deckTwoCard)
        console.log(deckOne)
        console.log(deckTwo)
        console.log(holdingDeck)
    }
}

// console.log(deckOne);
// console.log(deckTwo);
// compareDecks();
// console.log("deck after comparison")
// console.log(deckOne.length)
// console.log(deckTwo.length)
// console.log(deckOne);
// console.log(deckTwo);
// compareDecks();
// console.log("deck after comparison")
// console.log(deckOne.length)
// console.log(deckTwo.length)
// console.log(deckOne);
// console.log(deckTwo);

firstCardButton.addEventListener("click", () =>{
    compareDecks()
    // console.log(deckOne[0])
    // console.log(deckOne)
    // console.log(deckTwo[0])
    // console.log(deckTwo)

    yourCardImg.src = `images/${deckOne[0].id}.png`;
    computerCardImg.src = `images/${deckTwo[0].id}.png`;
    // console.log(`images/${deckOne[0].id}.png`)
})


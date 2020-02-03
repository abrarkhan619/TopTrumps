class TopTrumps {
    constructor(name, pace) {
        this.name = name;
        this.pace = pace;
    }

    name() {
        return this.name
    }
    pace() {
        return this.pace
    }
}

const fullDeck = [
    ronaldo = new TopTrumps("Cristiano Ronaldo", 90),
    messi = new TopTrumps("Lionel Messi", 87),
    rashford = new TopTrumps("Marcus Rashford", 92),
    martial = new TopTrumps("Anthony Martial", 89),
    dJames = new TopTrumps("Daniel James", 94),
    mata = new TopTrumps("Juan Mata", 62),
    matic = new TopTrumps("Nemanja Matic", 48),
    bFernandes = new TopTrumps("Martial", 77),
    greenwood = new TopTrumps("Mason Greenwood", 76),
    lukaku = new TopTrumps("Romelu Lukaku", 75)
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
console.log(shuffledDeck);

const deckOne = shuffledDeck.splice(0, 5);
const deckTwo = shuffledDeck
console.log("I am the first deck");
console.log(deckOne)
console.log("I am the second deck");
console.log(deckTwo)

const compareDecks = () => {
    if (deckOne[0].pace < deckTwo[0].pace) {
        let firstElement = deckOne.shift();
        deckTwo.push(firstElement)
    } else {
        let firstElement = deckTwo.shift();
        deckOne.push(firstElement)
    }
}

console.log(compareDecks());
console.log("deck after comparison")
console.log(deckOne);
console.log(deckTwo);


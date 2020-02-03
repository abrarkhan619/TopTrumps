//////////////////////////// Simple logic for transferring numbers from one array to another //////////
// let arrayOne = [12, 1, 2, 3, 4, 5]
// let arrayTwo= [6, 7, 8, 9, 10, 11];
// let arrayThree = [];

// console.log(arrayTwo[1])




// const shiftCardsToArr2 = () => {
//     let firstElement = arrayOne.shift();
//     arrayTwo.push(firstElement)

//     console.log(arrayOne)
//     console.log(arrayTwo)
// }

// shiftCardsToArr2();
// shiftCardsToArr2();
// shiftCardsToArr2();

// const shiftCardsToArr1 = () => {
//     let firstElement = arrayTwo.shift();
//     arrayOne.push(firstElement)

//     console.log(`I am array one${arrayOne}`)
//     console.log(`I am array one${arrayTwo}`)
// }

// shiftCardsToArr1();
// shiftCardsToArr1();
// shiftCardsToArr1();

// let arrayOne = [12, 1, 2, 3, 4, 5]
// let arrayTwo= [6, 7, 8, 9, 10, 11];
// // let arrayThree = [12, 1, 2, 3, 4, 5, ];

const compareArrays = () => {
    if (arrayOne[0] > arrayTwo[0]) {
        let firstElement = arrayOne.shift();
        arrayTwo.push(firstElement)
    } else {
        let firstElement = arrayTwo.shift();
        arrayOne.push(firstElement)
    }
}

// compareArrays()
// compareArrays()
// compareArrays()
// compareArrays()
// compareArrays()
// compareArrays()

// console.log(arrayOne)
// console.log(arrayTwo)

///////// Shuffle practice /////

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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

let newArray = arrayShuffle(arry);

console.log(newArray);

////////////////////////// Full deak /////////////////

class

const fullDeck = [
    ronaldo = new TopTrumps("Ronaldo", 99),
    messi = 
]


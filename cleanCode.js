/*
	does a thing
*/
// function some_Time(Time, d) {
//     if (d === "Sunday") {
//         if (Time > 8 && Time < 18) {
//             return "shop is open"
//         } else {
//             return "shop is closed"
//         }
//     } else if (d === "Saturday") {
//         if (Time > 8 && Time < 18) { 
//             return "shop is open"
//         } else { return "shop is closed"
//         }
//     } else if (Time > 6 && Time < 20) {
//         return "shop is open"
//     } else {
//         return "shop is closed"
//     }
// }

// console.log(some_Time(14, "Sunday"));

///////////////////////////// Option 1

// function shopOpening(time, day) {
//     if (day == "Saturday" || day == "Sunday") {
//         if (time > 8 && time < 18) {
//             return "shop is open"
//         } else {
//             return "shop is closed"
//         }
//     } else if (time > 6 && time < 20) {
//         return "shop is open";
//     } else {
//         return "shop is closed"
//     }
// }

// console.log(shopOpening(17, "Saturday"))

/////////////// Option 2 /////

function weekendTimes(time) {
    if (time > 8 && time < 18) {
        return "shop is open"
    } else {
        return "shop is closed"
    }
}

function weekdayTimes(time) {
    if (time > 6 && time < 20) {
        return "shop is open";
    } else {
        return "shop is closed"
    }
}

function weekdayOrWeekendTime (time, day) {
    if (day == "Saturday" || day == "Sunday") {
        return weekdayTimes(time)
    } else {
        return weekdayTimes(time)
    }
}

console.log(weekdayOrWeekendTime(1, "Monday"))
// console.log(weekdayTimes(23))

//////////////////////// Option 3

// function openingTimes(time, weekend) {

//     let weekend = ["Saturday", "Sunday"]

//     if (weekend) {
//         if (time > 8 && time < 18) {
//             return "shop is open"
//         } else {
//             return "shop is closed"
//         }
//     } else if (time > 6 && time < 20) {
//         return "shop is open";
//     } else {
//         return "shop is closed"
//     }
// }

// console.log(21, "Saturday");

/////// solution /////

// function weekendTimes(time) {
//     if (time > 8 && time < 18) {
//         return "shop is open"
//     } else {
//         return "shop is closed"
//     }
// }

const N = 11;

// if (N < 10 && N % 2 == 0) {
//   console.log("число четное и меньше десяти, true");
// } else {
//   if (N < 10) {
//     console.log("число меньше десяти, true");
//   } else {
//     console.log("число больше или равно десяти, false");
//   }

//   if (N % 2 == 0) {
//     console.log("число четное, true");
//   } else {
//     console.log("число нечетно, false");
//   }
// }

if (N < 10 || N % 2 == 0) {
  if (N < 10 && N % 2 != 0) {
    console.log("Меньше десяти (true), не четное (false)"); //9 походит только то, что меньше 10
  } else if (N >= 10 && N % 2 == 0) {
    console.log("Больше десяти (false), четное (true)"); //10 подходит только четность
  } else {
    console.log("Меньше десяти (true), четное (true)"); //8 подходит все
  }
} else {
  console.log("Больше десяти (false), не четное (false)"); //11 не подошло ни под одно условие
}

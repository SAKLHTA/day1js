//bai 1
// let x = true;
// let y = false;
// let z = false;
// let kq1 = x && y && z; // chỉ có giá trị a true suy ra phép tính false
// let kq2 = x && y && !z; // giá trị y false nên suy ra phép tính false
// let kq3 = (x && y) || z; // x&&y fale nên phép tính false
// let kq4 = (x && y) || !z; // giá trị !z true suy ra phép true
// let kq5 = x && (y || z); // y||z false nên phép tính false
// let kq6 = x && !(y || z); // !(y||z) true
// let kq7 = x && (y || !z); // (y||!z) true
// let kq8 = x && (!y || z); //(!y||z)true

// bai2
// let name = true;
// let age = 20;
// let isGood = true;

// let kq9 = age + 10;
// let kq10 = age % 3;
// let kq11 = name + "BBB"; // trueBBB
// let kq12 = !isGood; // false
// let kq13 = name == "aaa" && age >= 20; // false && true là false
// let kq14 = name != "aaa" && isGood; // !false || true là true
// let kq15 = !(age < 10) && !isGood; // !false || !true là false
// //bai3
// let a = 10;
// let b = 20;
// let c = 30;
// let d = "40";

// let kq16 = a - b / c;
// let kq17 = a - b * c;
// let kq18 = d - a * b - c;
// let kq19 = a + b + c + d;
// let kq20 = d + a + b + c;
// let kq21 = d + a - b + c;
// let kq22 = a - b + d - c;
// let kq23 = d - c + a - b;
// let kq24 = a * b + d * c;
// let kq25 = a + b + c;

// console.log(kq16);
// console.log(kq17);
// console.log(kq18);
// console.log(kq19);
// console.log(kq20);
// console.log(kq21);
// console.log(kq22);
// console.log(kq23);
// console.log(kq24);
// console.log(kq25);

// bai4
// let x = true;
// let y = false;
// let z = 10;

// let kq1 = x && y;
// let kq2 = x && !y;
// let kq3 = x && z == 10;
// let kq4 = x && z == 10;
// let kq5 = !(x && z == 10);
// let kq6 = !(x && z == 50);
// let kq7 = x && y && z == 10;
// let kq8 = x && !y && z == 10;
// let kq9 = x || y || z == 10;
// let kq10 = (x && y) || z != 10;
// let kq11 = !(x && z == 10) || y;

// bai5

// let a = 1;
// let b = "2";
// let c = 3;
// let d = "4";

// let kq12 = b + d;
// let kq13 = a + b + c + d;
// let kq14 = a - b + c - d;
// let kq15 = a - b - c + d;
// let kq16 = b + d - (a + c);
// let kq17 = a + b - (c + d);
// let kq18 = a * c + b * d;
// let kq19 = -b + d;
// let kq20 = -(b + d);

// console.log(kq12);
// console.log(kq13);
// console.log(kq14);
// console.log(kq15);
// console.log(kq16);
// console.log(kq17);
// console.log(kq18);
// console.log(kq19);
// console.log(kq20);

//bai6
// let age = 25;
// let isMarried = false;
// let isRich = true;

// let kq21 = age > 25 && isMarried && isRich; //false&&false&&=false
// let kq22 = (age <= 25 || isMarried) && isRich;//true  
// let kq23 = (age > 10 || isRich) && isMarried; // true && false = false
// let kq24 = !(age >= 15 && isMarried) && isRich; // true
// let kq25 = !(age <= 20) || !(isMarried && isRich); // true
// let kq26 = (age > 8 && !isMarried) || isRich; //true
// let kq27 = !(age < 8 && !isMarried) || isRich; // true
// let kq28 = (age == 8 && isMarried) || !isRich; //false



//bai7
// let a = 11;
// let b = "22";
// let c = 33;
// let kq29 = a + b;
// let kq30 = a - c;
// let kq31 = a + b + c;
// let kq32 = a + c + b;
// let kq33 = (a + b) % 3;

// let kq34 = a * b > 50; // 11*12 >50 true
// let kq35 = a ** b > 100; // 11**22>100 true
// let kq36 = a - b++ == 5;
// let kq37 = a - ++b == 5;

// console.log(kq29);
// console.log(kq30);
// console.log(kq31);
// console.log(kq32);
// console.log(kq33);

// console.log(kq34);
// console.log(kq35);
// console.log(kq36);
// console.log(kq37);

//bai8
// let isTall = true
// let isMuscle = false,
// let isHandsome = true

// isTall && isMuscle → ?//false
// !isHandsome → ?//!true bằng false
// !isTall || !isMuscle → ? // !true || !false = true
// isTall || !(isMuscle && isHandsome) → true || !false = true
// isMuscle && !(isTall || isHandsome) → false && !true = false

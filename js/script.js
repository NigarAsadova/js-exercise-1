// 1. 5-dən 26-ya qədər ədədlərin ədədi ortasını tapıb çap edin
// first way
var count = 0;
function Average(a, b){
    let sum = 0;
    for(i = a; i <= b; i++){
    sum += i;
    count++;
    }
    return sum / count;
}
console.log(Average(5, 26)); // output - 15.5
// // second way
function recAve(a, b){
    if(a == b) return a;
    else return a + recAve(a + 1, b);
}
console.log(recAve(5, 26) / count);  // output - 15.5
// // 2. 10 ilə 100 arasındakı ədədlərdən yalnız cüt olanları mətn formatında ekrana çıxarın
var str = '';
for(i = 10;i < 100; i++){
    if(i % 2 == 0) str += i + ', ';
}
console.log(str); // output = 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 

// // 3. 0-dan 40-a qədər ədədlər içərisindən 10 a bölünən ədədləri ekrana çıxarın
for(let i = 0;i < 40;i++){
    if(i % 10 == 0) console.log(i);
} // output = 0 10 20 30

// // 4. Hər hansı bir ədəd daxil edin və onun 3-ə bölünən olub olmadığını yoxlayan bir alqorithm yazın
 let n = prompt('Enter a number');
 if(n % 3 == 0) console.log('YES');
 else console.log('NO');

// // 5. 30 ilə 40 arasındakı ədədlərin cəmi ilə hasilinin ədədi ortasını tapın
let sum = 0, pro = 1;
for(let i = 30;i < 40;i++){
    sum += i;
    pro *= i;
}
console.log((sum + pro) / 2); // output = 1153496446502572.5

 // 6. 0-dan 100-ə qədər ədədlərdən 10 və ya 70 istisna olmaqla digərlərini ekranda string formasında çap edin
var numbers = '';
for(let i = 0;i < 100;i++){
    if(i == 10 || i == 70) continue;
    numbers += i + ', ';
}
console.log(numbers); // output = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 

// // 7. 0-dan 100-ə qədər ədədlərdən 20dən kiçik və 50-dən böyük olanların ayrılıqda cəmini hesablayəın
var result = 0;
for(let i = 0;i < 100;i++){
    if(i < 20 || i > 50) result += i;
}
console.log(result); // output = 3865

// // 8. 1-den 9-a qeder olan ededleri ekrana cixarin
for(let i = 1;i < 9;i++){
    console.log(i);
} // output = 1 2 3 4 5 6 7 8 

// 9. 1-den 50-e qeder olan ededlerin cemini tapin
function summa(a , b){
    if(a == b) return a;
    else return a + summa(a + 1, b);
}
 console.log(summa(1, 50)); // output = 1275
// // 10. 2 ve 36 arasinda olan ededlerden 4 ve 17-den baska hamisini ekrana cixarin
for(let i = 2;i < 36;i++){
    if(i == 4 || i == 17) continue;
    console.log(i);
}
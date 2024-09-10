function calculateAverage(numbers) {
    let sum = 0;
    // เพราะว่าใช้เงื่อนไข <= numbers.length และ i = 0 นั่นหมายถึงจะวนลูป 6 รอบ แต่จำนวนไอเทม ใน array มีค่าเท่ากับ 5 วิธีแก้ก็คือ ใช้เงื่อนไข < แทน <=
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
}
let result = calculateAverage([10, 20, 30, 40, 50]);
console.log(result); // Expected output: 30
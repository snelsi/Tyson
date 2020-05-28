export const examples = [
  // Example 1
  `// Roman Zhuravlov, TR-71, 2020

// Загальний приклад, що демонструє всі можливості розробленої мови Tyson:
// • Математичні вирази
// • Логічні вирази
// • Цикли for
// • Цикли while
// • Цикли do while

{
  let key = 123;
}

'single quote string';
"double quote string";

var integer = 123;
let double = 1.23;
const myVariable = 7;

for (i = 0; i < myVariable; i += 1) {
  key = 123;
}

if (1 == 2) {
  key = 1;
}
else if (2 == 2) {
  key = 2;
}
else {
  key = 3;
}
`,

  // Example 2
  `// Tyson підтримує числа, символьні рядки, логічні вирази
// та спеціальне значення null

'single quote string';
"double quote string";

1;
1.02;
 .03;

true;
false;

null;

// Для оголошення змінної використовується конструкція
// Type IdentName [= Exp];

let UndefinedVariable;

var integer = 123;
let double = 1.23;
const myVariable = true;
`,

  // Example 3
  `// Для виведення результатів коду на екран, використовується команда 'log'
// Log виводить значення переданого виразу в вкладку Парсер та в консоль розробника (F12)
log(7 + 2 * (3 - 1));

// Операції оброблються логікаою Javascript,
// тому при додаванні чисел та строк підтримується динамічна типизація
log(21 + " test");

// Tyson підтримує строге та нестроге порівняння
log(3 === '3');
log(3 == '3');

log(5 !== '5');
log(5 != '5');
`,

  // Example 4
  `for (i = 0; i < myVariable; i += 1) {
  key = 123;
}
`,

  // Example 5
  `if (1 == 2) {
  key = 1;
}`,

  // Example 6
  `if (1 == 2) {
  key = 1;
}
else if (2 == 2) {
  key = 2;
}
else {
  key = 3;
}`,

  // Example 7
  `let i = 0;
while(i < 4) {
  i++;
}
`,

  // Example 8
  `let i = 0;
do {
  i++;
} while(i < 4);
`,

  // Example 9
  `for (i = 0; i < myVariable i += 1) {
  key = 123;
}
`,

  // Example 10
  `key = 123;
myVariable = 7 + 2;
`,
];

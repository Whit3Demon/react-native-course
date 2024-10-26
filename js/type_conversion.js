// Преобразование типов (Type Conversion) включает явное преобразование значения из одного типа в другой. Это можно сделать с помощью различных функций и методов.

// Приведение типов (Type Coercion)(Неявное преобразование) — это автоматическое преобразование значений одного типа в другой тип при выполнении операций, требующих другого типа. JavaScript выполняет это преобразование автоматически в нужный момент.

// Существует 3 наиболее широко используемых преобразования
// - [[Строковое преобразование (String Conversion)]]
// - [[Численное преобразование (Number Conversion)]]
// - [[Логическое преобразование (Boolean Conversion)]]

//** (String Conversion)
// Строковое преобразование в JavaScript включает в себя процесс преобразования значений различных типов данных в строковый тип (`String`). Это преобразование может происходить явным образом с помощью встроенных функций и методов или неявно, в контексте различных операций и ситуаций.
// ** Явное строковое преобразование**

// 1. Функция `String()`** - Преобразует значение в строковый тип.
{
  console.log(String(42)); // '42'
  console.log(String(true)); // 'true'
  console.log(String(null)); // 'null'
  console.log(String(undefined)); // 'undefined'
  console.log(String({})); // '[object Object]'
  console.log(String([])); // ''
}

// 2. **Методы преобразования строки**
// - **Метод `toString()`**: Вызывается у объектов и преобразует их в строку.
{
  console.log((42).toString()); // '42'
  console.log(true.toString()); // 'true'
  console.log([1, 2, 3].toString()); // '1,2,3'
}

// ** Неявное строковое преобразование**

// 1. **Операции слияния строк**
// - При использовании оператора `+` с строками и другими типами данных, JavaScript автоматически преобразует другие значения в строки.
{
  console.log("The number is " + 42); // 'The number is 42'
  console.log("Result: " + true); // 'Result: true'
  console.log("Array: " + [1, 2, 3]); // 'Array: 1,2,3'`
}

// 2. **Шаблонные строки (Template Literals)**
// - При использовании шаблонных строк (внутри `` `${}` ``) значения автоматически преобразуются в строки.
{
  let num = 42;
  let str = `The number is ${num}`; // 'The number is 42'``
}

// 3. **При интерполяции и конкатенации**
//  - При интерполяции в шаблонных строках и конкатенации с помощью `+`, значения автоматически приводятся к строкам.

{
  let value = 123;
  let result = "Value is: " + value; // 'Value is: 123'
  console.log(result);
}

//** (Number Conversion)
// Численное преобразование в JavaScript включает в себя процесс преобразования значений различных типов данных в числовой тип (`Number`). Это может происходить явным образом, с помощью встроенных функций и методов, или неявно, в контексте арифметических операций и других ситуаций.

// **Явное численное преобразование**

// 1. **Функция `Number()`**
//     - Преобразует значение в числовой тип.
//     - Если преобразование невозможно, возвращает `NaN` (Not-a-Number).
{
  console.log(Number("42")); // 42
  console.log(Number("3.14")); // 3.14
  console.log(Number("")); // 0
  console.log(Number(true)); // 1
  console.log(Number(false)); // 0
  console.log(Number(null)); // 0
  console.log(Number(undefined)); // NaN
  console.log(Number("abc")); // NaN
}

// 2. **Методы преобразования числа**
//  - **`parseInt()`**: Преобразует строку в целое число, учитывая указанный основание системы счисления.
{
  console.log(parseInt("42")); // 42
  console.log(parseInt("42px")); // 42
  console.log(parseInt("3.14")); // 3 (игнорирует дробную часть)
  console.log(parseInt("101", 2)); // 5 (двоичное основание)`
}

// - **`parseFloat()`**: Преобразует строку в число с плавающей точкой.
{
  console.log(parseFloat("3.14")); // 3.14
  console.log(parseFloat("3.14abc")); // 3.14
  console.log(parseFloat("42")); // 42`
}

// **Неявное численное преобразование**
// 1. **Арифметические операции**
// 	Использование любых арифметических операций кроме сложения (+) на строках приводит к численному преобразованию.
{
  console.log("5" - 2); // 3
  console.log("5" * 2); // 10
  console.log("5" / 2); // 2.5`
  console.log("5" + 2); // '52'
  console.log("abc" / 2); // NaN
}

//** (Boolean Conversion)
// Логическое преобразование в JavaScript преобразует значение в логическое значение (`true` или `false`). Это преобразование может быть выполнено явным образом с помощью функций или неявно в условиях.

// ** Явное логическое преобразование

// 1. **Функция `Boolean()`**

{
  console.log(Boolean(0)); // false
  console.log(Boolean("non-empty")); // true
  console.log(Boolean(null)); // false
  console.log(Boolean({})); // true
  console.log(Boolean([])); // true
}

// 2. **Двойное отрицание (`!!`)

{
  console.log(!!0); // false
  console.log(!!"text"); // true
  console.log(!!null); // false
  console.log(!!{}); // true
  console.log(!![]); // true
}

// ** Неявное логическое преобразование

//Логическое преобразование также происходит автоматически в условиях, где требуется булев тип. Это часто встречается в условных операторах, таких как `if`, `while`, и в логических операциях.
// ### Значения, приводимые к `false` (falsy values):

// - `0`
// - `undefined`
// - `NaN`
// - `""`

//### В остальных случаях всегда true

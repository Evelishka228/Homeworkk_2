document.addEventListener("DOMContentLoaded", function () {
  // задание1

  let age = prompt("Введите возраст");
  if (age < 65) alert("Иди в школу, малой");
  else alert("Ай-ай-ай, песок сыпется");

  // задание2

  let num1 = prompt("Любое число раз");
  let num2 = prompt("Любое число два");
  if (num1 > num2) {
    alert("Первое больше");
  } else if (num2 > num1) {
    alert("Второе больше");
  } else {
    alert("Зачем ты ввел одинаковые числа...");
  }

  // задание3

  let login = prompt("Введите логин");
  let password = prompt("Введите пароль");

  if (login === "admin" && password === "12345") {
    alert("Добро пожаловать!");
  } else {
    alert("Неверный логин или пароль");
  }
});

const container = document.querySelector(".container");
const text = container.querySelector(".text");
const block = container.querySelector(".block");
let counter = 0;
if (container) {
  if (text) {
    text.textContent = "есть такой текст";
  } else {
    console.error("такого блока нет");
    counter++;
  }
  if (block) {
    block.textContent = "есть такой блок";
  } else {
    console.error("такого блока нет внутри .container");
    counter++;
  }
  if (counter == 0) {
    console.log("нет ошибок");
  } else {
    console.error("ошибки");
  }
}

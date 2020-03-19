// https://codepen.io/titanq7/pen/JjdZmRb?editors=0110

window.addEventListener("DOMContentLoaded", function() {
  "use strick";

  let tab = document.querySelectorAll(".info-header-tab"), // Коллекция с нашими табами.
    info = document.querySelector(".info-header"), // Родитель табов (Их враппер).
    tabContent = document.querySelectorAll(".info-tabcontent"); // Родитель контекта у табов.

  function hideTabContent(a) { // Эта функция скрывает все блоки кроме первого.
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1); // 1 - означает что отчет скрытия элементов начинается с 1, а не с 0.

  function showTabContent(b) {  // Эта функция показывает элемент, вспомогательная функция.
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener("click", function(event) { 
    let target = event.target; 
    if (target && target.classList.contains('info-header-tab')) { // Работает только если клик был сделан в элемент с классом - info-header-tab
      for (let i = 0; i < tab.length; i++) { // Цикл который перебирет все табы, пока не совпадет с тем на который был сделан клик.
        if (target == tab[i]) { 
          hideTabContent(0);
          showTabContent(i); // Передает номер для функции, что бы открыть нужный tabContent.
          break;
        }
      }
    }
  });
});

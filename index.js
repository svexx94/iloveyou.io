document.addEventListener("DOMContentLoaded", function() {
  const loveButton = document.getElementById("loveButton");
  const loveText = document.getElementById("loveText");

  // Анимация появления текста по буквам
  const message = "Привет, зая, не вздумай плакать";
  let index = 0;

  function typeText() {
    if (index < message.length) {
      loveText.textContent += message[index];
      loveText.style.opacity = 1;
      index++;
      setTimeout(typeText, 150);
    }
  }
  typeText();

  // Кнопка
  if (loveButton) {
    loveButton.addEventListener("click", function() {
      alert("Ты самое дорогое, что у меня есть 💕");
    });
  }

  // Летающие сердечки
  setInterval(function() {
    const heart = document.createElement("div");
    heart.className = "heart";
    const maxLeft = Math.max(window.innerWidth - 40, 0);
    const leftPos = Math.random() * maxLeft;
    heart.style.left = leftPos + "px";
    const hue = Math.floor(Math.random() * 360);
    heart.style.backgroundColor = "hsl(" + hue + ", 70%, 60%)";
    document.body.appendChild(heart);
    setTimeout(function() {
      if (heart.parentElement) {
        heart.parentElement.removeChild(heart);
      }
    }, 4000);
  }, 500);
});
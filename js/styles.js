const quoteBtn = document.querySelectorAll(".quote-btn");
const quoteSection = document.getElementById("quote-section");
console.log("hello", quoteBtn, quoteSection);

quoteBtn.forEach((el) =>
  el.addEventListener("click", () => {
    console.log("hello * 1");
    const targetPosition = quoteSection.getBoundingClientRect().top - 100;
    console.log("hello * 2", targetPosition);

    window.scrollBy({
      top: targetPosition,
      behavior: "smooth",
    });
  })
);

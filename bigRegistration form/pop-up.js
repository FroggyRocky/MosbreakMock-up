const closePopUp = document.querySelectorAll(".pop-up__close")
const linksToPopUp = document.querySelectorAll(".schedule__time a");
const popUpBody = document.querySelector(".pop-up__background");
const popUpContainer = document.querySelector(".pop-up");
const popUpBlackZone = document.querySelector(".pop-up__background")

linksToPopUp.forEach((e) => {
e.addEventListener("click", () => 
popUpBody.classList.add("open"),
setTimeout(() => {
  popUpContainer.classList.add("slide-back");  
}, 800))
});

closePopUp.forEach(e =>
 e.addEventListener("click", () => 
popUpBody.classList.remove("open")
)
)

// popUpBlackZone.addEventListener("click", function closeByBlackWindow(e) {
//     if (e.target.classList.contains("pop-up__background") && popUpBody.classList.contains("open")) {
//         popUpBody.classList.remove("open")
//     }
// })
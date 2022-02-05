import "./../css/main.less"

const helpbadge = document.getElementById("helpbadgestky");
// плавающий хедер
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("stkheader").style.top = "0";
    if (helpbadge && window.matchMedia("(min-width: 460px)").matches) {
      if (window.matchMedia("(max-height: 700px)").matches) {
        helpbadge.style.top = "14%";
      } else {
        helpbadge.style.top = "9%";
      }
    } else {
      if (helpbadge) {
        if (window.matchMedia("(max-height: 700px)").matches) {
          helpbadge.style.top = "21%";
        } else {
          helpbadge.style.top = "12%";
        }
      }
    }
  } else {
    document.getElementById("stkheader").style.top = "-100%";
    if (helpbadge) {
      helpbadge.classList.add("helpbadge-fixed");
      helpbadge.style.top = "-100%";
    }
  }
  prevScrollpos = currentScrollPos;
};

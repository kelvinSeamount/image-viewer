const backbtn = document.querySelector(".back");
const nextbtn = document.querySelector(".forward");
const scrollGallery = document.querySelector(".gallery");

scrollGallery.addEventListener("wheel", function (e) {
  e.preventDefault();
  scrollGallery.scrollLeft += e.deltaY;
  scrollGallery.style.scrollBehavior = "auto";
});

backbtn.addEventListener("click", function () {
  scrollGallery.scrollLeft -= 100;
  scrollGallery.style.scrollBehavior = "smooth";
});

nextbtn.addEventListener("click", function () {
  scrollGallery.scrollLeft += 100;
  scrollGallery.style.scrollBehavior = "smooth";
});

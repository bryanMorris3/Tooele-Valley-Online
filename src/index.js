import "./styles.css";

//var image = document.getElementById("hover");
var images = document.getElementsByClassName("hover");

for (const image of images) {
  image.addEventListener("mouseover", function() {
    this.style.opacity = 1.0;
  });

  image.addEventListener("mouseout", function() {
    this.style.opacity = 0.8;
  });
}

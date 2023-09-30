var rappers = [
  {
    name: "Vio(sensei) - Aşkın Mert Şalcıoğlu",
    description:
      "Vio veya gerçek adıyla Aşkın Mert Şalcıoğlu, Türk rapçi, şarkıcı ve söz yazarı.",
    image: "/img/vio.jpg",
    link: "https://tr.wikipedia.org/wiki/Vio",
  },
  {
    name: "Motive - Tolga Can Serbes",
    description:
      "Tolga Can Serbes, ya da bilinen sahne adıyla Motive Türk rap şarkıcısı ve söz yazarı.",
    image: "/img/motive.jpg",
    link: "https://tr.wikipedia.org/wiki/Motive_(m%C3%BCzisyen)",
  },
  {
    name: "Allâme - Hamza Gül",
    description:
      "Allâme veya gerçek adıyla Hamza Gül; Türk müzisyen, söz yazarı ve animatör.",
    image: "/img/allame.jpg",
    link: "https://tr.wikipedia.org/wiki/All%C3%A2me",
  },
  {
    name: "Massaka - Murat İlhan",
    description:
      "Murat İlhan ya da bilinen sahne adıyla Massaka, Türk rapçi ve söz yazarı.",
    image: "/img/massaka.jpg",
    link: "https://tr.wikipedia.org/wiki/Massaka",
  },
];

var index = 0;
var slaytCount = rappers.length;
var interval;
var settings = {
  duration: "2000",
  random: false,
};

init(settings);

let nextBtn = document.querySelector(".nextRapper");
let backBtn = document.querySelector(".backRapper");

backBtn.addEventListener("click", function () {
  if (index <= 0) {
    index = slaytCount;
    index--;
  } else {
    index--;
  }
  showSlide(index);
});

nextBtn.addEventListener("click", function () {
  index++;
  if (index >= slaytCount) {
    index = 0;
  }
  showSlide(index);
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      //artan index
      index++;
      if (slaytCount == index) {
        index = 0;
      }
      showSlide(index);
    }
    showSlide(index);
  }, settings.duration);
}
function showSlide(index) {
  document.querySelector(".btn").setAttribute("href", rappers[index].link);
  document.querySelector(".card-text").textContent = rappers[index].description;
  document.querySelector(".card-title").textContent = rappers[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", rappers[index].image);
}
showSlide(index);

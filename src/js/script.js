$(document).ready(function () {
  // Add photos

  photos = [
    "assets/portfolio-photos/FAITH-234.jpg",
    "assets/portfolio-photos/FAITH-253.jpg",
    "assets/portfolio-photos/HERA@2-118.jpg",
    "assets/portfolio-photos/HERA@2-221.jpg",
    "assets/portfolio-photos/HERA@2-268.jpg",
    "assets/portfolio-photos/HERA@2-369.jpg",
    "assets/portfolio-photos/HERA@2-445.jpg",
    "assets/portfolio-photos/JMP-102.jpg",
    "assets/portfolio-photos/MARK_VANESSA-6.jpg",
    "assets/portfolio-photos/MARK_VANESSA-7.jpg",
    "assets/portfolio-photos/ROY_MYLALEEN-250.jpg",
    "assets/portfolio-photos/ROY_MYLALEEN-263.jpg",
    "assets/portfolio-photos/TANAWAN-FARM-88.jpg",
    "assets/portfolio-photos/TANAWAN-FARM-189.jpg",
    "assets/portfolio-photos/TANAWAN-FARM-322.jpg",
    "assets/portfolio-photos/CHARLIE-AND-JEAN-57.jpg",
    "assets/portfolio-photos/CHARLIE-AND-JEAN-80.jpg",
    "assets/portfolio-photos/CHARLIE_AND_JEAN_486.jpg",
    "assets/portfolio-photos/CHEAN_GIOVANI-67.jpg",
    "assets/portfolio-photos/CHEAN_GIOVANI-121.jpg",
  ];
  photos = photos.sort(function(a, b){return 0.5 - Math.random()});
  for (photo of photos) {
    div = `
      <a rel="gallery-1" class="flex shadow-md h-64 max-w-sm rounded-xl border-secondary-text border border-2 overflow-hidden swipebox" href=${photo}>
        <img class="object-cover w-full h-full" src=${photo} />
      </a>
    `;
    $(".photo-portfolio").append(div);
  }
});

$(document).ready(function () {
  $(".photo-portfolio").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".swipebox").swipebox();
});

$("#phone-btn").click(function () {
  $("#mail-info").hide("show");
  $("#phone-info").toggle("show");
});

$("#mail-btn").click(function () {
  $("#phone-info").hide("show");
  $("#mail-info").toggle("show");
});

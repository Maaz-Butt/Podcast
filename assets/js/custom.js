// left-sidebar
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

let slid = document.getElementById("slid-btn");
slid.onclick = () => {
  let dropdwon = document.getElementById("slid-drop");
  dropdwon.classList.toggle("aside-dropdwon");
};

// slider
$(".Review-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = parseInt(counter.dataset.target);
  let count = 0;
  const updateCount = () => {
    const increment = Math.ceil((target - count) / 10);
    count += increment;
    counter.innerText = count;
    if (count < target) {
      setTimeout(updateCount, 25);
    }
  };

  // Individual scroll trigger for each counter
  const wrapper = counter.parentElement; // Get the counter's wrapper element
  const triggerPoint =
    wrapper.getBoundingClientRect().top + window.scrollY - 500; // Calculate trigger position based on scroll and wrapper top

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (
      scrollPosition > triggerPoint &&
      !counter.classList.contains("counted")
    ) {
      // Check scroll position and a "counted" class
      updateCount();
      counter.classList.add("counted"); // Add "counted" class to prevent future runs
    }
  });
});

// accordion
const accordionItems = document.querySelectorAll(".accordion-div");

accordionItems.forEach((item, index) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-icon");

  if (index !== 0) {
    item.classList.remove("active");
    content.style.maxHeight = "0px";
    icon.textContent = "+";
  }

  header.addEventListener("click", () => {
    item.classList.toggle("active");
    content.style.maxHeight = item.classList.contains("active")
      ? content.scrollHeight + "px"
      : "0px";
    icon.textContent = item.classList.contains("active") ? "-" : "+";
  });
});


// go to top button
const myDiv = document.getElementById("top-btn"); // Replace "your-div-id" with the actual ID of your div

window.addEventListener("scroll", function () {
  const scrolled =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);

  if (scrolled > 0.07) {
    myDiv.style.display = "block"; // Show the div
  } else {
    myDiv.style.display = "none"; // Hide the div
  }
});

// This hides the div initially before scrolling
myDiv.style.display = "none";

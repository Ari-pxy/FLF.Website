function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
  var popup = document.getElementById('popup');
  popup.classList.toggle('active')
 }

 "use strict";

     function qs(selector, all = false) {
       return all ? document.querySelectorAll(selector) : document.querySelector(selector);
     }
     
     const sections = qs('.section', true);
     const timeline = qs('.timeline');
     const line = qs('.line');
     line.style.bottom = `calc(100% - 20px)`;
     let prevScrollY = window.scrollY;
     let up, down;
     let full = false;
     let set = 0;
     const targetY = window.innerHeight * .8;
     
     function scrollHandler(e) {
       const {
         scrollY
       } = window;
       up = scrollY < prevScrollY;
       down = !up;
       const timelineRect = timeline.getBoundingClientRect();
       const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
     
       const dist = targetY - timelineRect.top;
       console.log(dist);
     
       if (down && !full) {
         set = Math.max(set, dist);
         line.style.bottom = `calc(100% - ${set}px)`;
       }
     
       if (dist > timeline.offsetHeight + 50 && !full) {
         full = true;
         line.style.bottom = `-50px`;
       }
     
       sections.forEach(item => {
         // console.log(item);
         const rect = item.getBoundingClientRect(); //     console.log(rect);
     
         if (rect.top + item.offsetHeight / 5 < targetY) {
           item.classList.add('show-me');
         }
       }); // console.log(up, down);
     
       prevScrollY = window.scrollY;
     }
     
     scrollHandler();
     line.style.display = 'block';
     window.addEventListener('scroll', scrollHandler);
     
var gallery = undefined;

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + no + "']").parent().addClass('selected');
}
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 1;
  audio.play();
});
function setupGallery() {
  gallery = $('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

function openPage(no) {
  if(no == 2) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
    const previewContainer = document.querySelector('.preview-container');
const mainContent = document.querySelector('.main-content');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const threshold = window.innerWidth - 100;

    if (mouseX > threshold) {
        previewContainer.style.right = '0';
    } else {
        previewContainer.style.right = '-300px';
    }
});
// Add an event listener to the preview container for navigation
previewContainer.addEventListener('click', () => {
    window.location.href = 'Q1.html'; // Navigate to page2.html
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#8ea5eb,#6667AB,#5E5A80 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
    })

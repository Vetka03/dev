const swiper = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  itemSelectText: '',
  shouldSort: false
});

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".section-gallery__swiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },

    spaceBetween: 20,
    pagination: {
      el: ".section-gallery .section-gallery__pagination",
      type: "fraction"
    },

    navigation: {
      nextEl: ".section-gallery__next",
      prevEl: ".section-gallery__prev"
    },

    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 38
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",
  });
});

const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

const btns = document.querySelectorAll('.section-gallery__slide');
const modalOverlay = document.querySelector('.section-gallery__overlay');
const modals = document.querySelectorAll('.section-gallery__modal');
const btnclose = document.querySelectorAll('.section-gallery__modal-btn-close');
const body = document.body;

function disableScroll() {
  let pagePosition = window.scrollY;
  body.classList.add('stop-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

function enableScroll() {
  let pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('stop-scroll');
  window.scroll({top: pagePosition, left: 0});
  body.removeAttribute('stop-scroll');
}

btns.forEach((el) => {
  el.addEventListener('click',(e) => {
    disableScroll();

    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('section-gallery__modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('section-gallery__modal--visible')
    modalOverlay.classList.add('section-gallery__overlay--visible');

  });
});


btnclose.forEach((el) => {
  el.addEventListener('click', (e) => {
    enableScroll();

    modalOverlay.classList.remove('section-gallery__overlay--visible');

    modals.forEach((el) => {
      el.classList.remove('section-gallery__modal--visible');
    });


  });
});

modalOverlay.addEventListener('click',() => {
  enableScroll();

  modalOverlay.classList.remove('section-gallery__overlay--visible');

  modals.forEach((el) => {
    el.classList.remove('section-gallery__modal--visible');
  });
});


(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


document.querySelectorAll('.section-catalog__acc-link') .forEach(function(tabs) {
  tabs.addEventListener('click',function(e) {
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.section-catalog__acc-link') .forEach(function(btn){
btn.classList.remove('tab--active')});
  e.currentTarget.classList.add('tab--active');

  document.querySelectorAll('.section-catalog__tab-content') .forEach(function(tabs){
tabs.classList.remove('section-catalog__tab-content--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__tab-content--active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".section-developments__swiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },

    navigation: {
      nextEl: ".section-developments__next",
      prevEl: ".section-developments__prev"
    },

    pagination: {
      el: '.section-developments__pagination',
      type: 'bullets',
      clickable: true,
      },

    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 34.5
      },

      1010: {
        slidesPerView: 3,
        spaceBetween: 27
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",
  });
});

(() => {
  tippy('.js-tooltip-btn', {
    theme: 'violet',
    maxWidth: 280,
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".section-projects__swiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },

    navigation: {
      nextEl: ".section-projects__next",
      prevEl: ".section-projects__prev"
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 50
      },

      600: {
        slidesPerView: 2,
        spaceBetween: 35
      },

      1000: {
        slidesPerView: 2,
        spaceBetween: 48
      },

      1026: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",
  });
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.section-contacts__form',{
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
    },
    tel: {
      required: 'Вы не ввели телефон',
    },
  },
});

ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75853839799222, 37.601091182208904],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "390px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "320px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75853839799222, 37.601091182208904],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/placemark.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click', () => {

  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el){
  el.addEventListener('click', () => {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  });
});

let btnSearch = document.querySelector('.header__search-button');
let search = document.querySelector('.header__search-box');
let btnClosedSearch = document.querySelector('.header__btn-closedsearch')

btnSearch.addEventListener('click', () => {

  btnSearch.classList.toggle('header__search-button--active');

  search.classList.toggle('header__search-box--active');

  btnClosedSerch.classList.toggle('header__btn-closedsearch');

});

btnClosedSearch.addEventListener('click', () => {

  btnSearch.classList.remove('header__search-button--active');

  search.classList.remove('header__search-box--active');

});

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

(() => {
	const MOBILE_WIDTH = 560;

	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}

	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}

	  const href = link.getAttribute('href').substring(1);
	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;

	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	}

	document.querySelectorAll('.js-scroll-link').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();

	      scrollToContent(this, true);
	  });
	});
})();

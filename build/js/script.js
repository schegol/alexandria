$(document).ready(function() {
  //раскрытие ответов на вопросы в соотв. блоке
  const questionBlock = $('.qna__question-block');

  questionBlock.each(function() {
    let questionToggle = $(this).children('.qna__question-toggle');

    questionToggle.on('click', function() {
      $(this).parent().toggleClass('qna__question-block--open');
      $(this).next('p').slideToggle(500);
    });
  })

  //калькулятор
  const result = document.querySelector('.calculator__form-value');
  const basePrice = Number(result.textContent);

  function render() {
    let experience = document.querySelectorAll("input[name=CALC_Q1]:checked")[0]
        ? document.querySelectorAll("input[name=CALC_Q1]:checked")[0].value
        : 1;
    let language = document.querySelectorAll("input[name=CALC_Q2]:checked")[0]
        ? document.querySelectorAll("input[name=CALC_Q2]:checked")[0].value
        : 1;
    let hours = document.querySelectorAll("input[name=CALC_Q3]:checked")[0]
        ? document.querySelectorAll("input[name=CALC_Q3]:checked")[0].value
        : 1;
    result.innerHTML = basePrice * experience * language * hours
  }

  $('.calculator').click(function(e){
        e.stopPropagation()
        render()
    });

  //Слайдер интерьеров
  $('.interiors-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow: '<button class="slick__arrows nextArrow "></button>',
    prevArrow: '<button class="slick__arrows prevArrow "></button>',
  });

  //Слайдер преимуществ
  $('.advantages-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow: '<button class="slick__arrows nextArrow advantages-arrows"></button>',
    prevArrow: '<button class="slick__arrows prevArrow advantages-arrows"></button>',
  });

  //модалка
  //открытие
  $('.js-popup').click( function (e) {
    e.preventDefault()
    $('body').addClass('modal-active')
  })

  // закриытие модалки
  $('.modal__close-btn').click( function(e) {
    e.preventDefault()
    $('body').removeClass('modal-active')
  })
  $('.modal').click( function(e) {
    e.preventDefault()
    if (e.target === this) {
      $('body').removeClass('modal-active')
    }
  })
  //уонец модалки

});

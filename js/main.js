$(function () {
  /*-------------------------------------
  ハンバーガーメニュー
  ---------------------------------------*/
  $('.hamburger').click(function () {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').click(function () {
    $('#header').removeClass('open');
  });

  $('#navi a').click(function () {
    $('#header').removeClass('open');
  });
  /*------------------------------------
  スライダー
  --------------------------------------*/
  $('.slick').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '100px',
    arrows: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '50px'
      }
    }]
  });
  /*---------------------------------------
  スクロールイベント  
  ----------------------------------------*/
  $(window).scroll(function () {
    let windowHeight = $(window).height();
    let scroll = $(window).scrollTop();
    $('.fade-in').each(function () {
      let targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 200) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  });
  /*-----------------------------------------
  スムーススクロール  
  -------------------------------------------*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, 1000, 'swing');
    return false;
  });
});

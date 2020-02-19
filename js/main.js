"use strict";
/* -------------------------------------
 CUSTOM FUNCTION WRITE HERE
 -------------------------------------- */
$(document).ready(function(e) {
  /* -------------------------------------
   FOR QUOTATION FORM RADIO
   -------------------------------------- */
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
  /* -------------------------------------
   OPEN CLOSE
   -------------------------------------- */
  $('#tg-languages-button').on('click', function(event) {
    event.preventDefault();
    $('.tg-languages > ul').slideToggle();
  });
  $('#tg-minicart-button').on('click', function(event) {
    event.preventDefault();
    $('.tg-minicart-box').slideToggle();
  });
  $('.tg-addnav li a').on('click', function(event) {
    event.preventDefault();
  });
  /* -------------------------------------
   HOME SLIDER
   -------------------------------------- */
  $("#tg-home-slider").owlCarousel({
    autoPlay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='tg-prev icon-direction196'></i>",
      "<i class='tg-next icon-pointer45'></i>"
    ]
  });
  /* -------------------------------------
   FEATURES SLIDER
   -------------------------------------- */
  $("#tg-features").owlCarousel({
    autoPlay: false,
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [991, 2],
    itemsTabletSmall: [639, 1, 0],
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: false,
    pagination: false,
    navigation: false
  });
  /* -------------------------------------
   THEME ACCORDION
   -------------------------------------- */
  $('#accordion .panel-heading, #accordion .tg-panel-heading').on('click', function() {
    $('.panel-heading, .tg-panel-heading').removeClass('active');
    $(this).parents('.panel-heading, .tg-panel-heading').addClass('active');
    $('.panel').removeClass('active');
    $(this).parent().addClass('active');
  });
  /* -------------------------------------
   PRODUCT SLIDER
   -------------------------------------- */
  $("#tg-vehicletype-slider").owlCarousel({
    autoPlay: false,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ]
  });
  /* -------------------------------------
   PRODUCT SLIDER
   -------------------------------------- */
  $("#tg-product-slider").owlCarousel({
    autoPlay: false,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    itemsTabletSmall: [568, 1],
    pagination: true,
    navigation: false,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ]
  });
  /* -------------------------------------
   RELATED PRODUCT SLIDER
   -------------------------------------- */
  $("#tg-relatedproduct-slider").owlCarousel({
    autoPlay: false,
    items: 3,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 3],
    itemsTabletSmall: [568, 1],
    pagination: true,
    navigation: false,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ]
  });
  /* -------------------------------------
   TEAM SLIDER
   -------------------------------------- */
  $("#tg-team-slider").owlCarousel({
    autoPlay: false,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    itemsTabletSmall: [568, 1],
    pagination: true,
    navigation: false,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ]
  });
  /* -------------------------------------
   PRETTY PHOTO GALLERY
   -------------------------------------- */
  $("a[data-rel]").each(function() {
    $(this).attr("rel", $(this).data("rel"));
  });
  $("a[data-rel^='prettyPhoto']").prettyPhoto({
    animation_speed: 'normal',
    theme: 'dark_square',
    slideshow: 3000,
    autoplay_slideshow: false,
    social_tools: false
  });
  /*---------------------------------------
   PRODUCT SLIDER
   -------------------------------------- */
  (function() {
    var sync1 = $("#tg-view-slider");
    var sync2 = $("#tg-thumbnail-slider");
    sync1.owlCarousel({
      singleItem: true,
      slideSpeed: 1000,
      navigation: false,
      pagination: false,
      afterAction: syncPosition,
      responsiveRefreshRate: 200,
    });
    sync2.owlCarousel({
      items: 4,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 4],
      itemsTablet: [768, 6],
      itemsMobile: [479, 4],
      pagination: false,
      navigation: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      responsiveRefreshRate: 100,
      afterInit: function(el) {
        el.find(".owl-item").eq(0).addClass("active");
      }
    });

    function syncPosition(el) {
      var current = this.currentItem;
      $("#tg-thumbnail-slider")
        .find(".owl-item")
        .removeClass("active")
        .eq(current)
        .addClass("active")
      if ($("#tg-thumbnail-slider").data("owlCarousel") !== undefined) {
        center(current)
      }
    }
    $("#tg-thumbnail-slider").on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).data("owlItem");
      sync1.trigger("owl.goTo", number);
    });

    function center(number) {
      var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
      var num = number;
      var found = false;
      for (var i in sync2visible) {
        if (num === sync2visible[i]) {
          var found = true;
        }
      }
      if (found === false) {
        if (num > sync2visible[sync2visible.length - 1]) {
          sync2.trigger("owl.goTo", num - sync2visible.length + 2)
        } else {
          if (num - 1 === -1) {
            num = 0;
          }
          sync2.trigger("owl.goTo", num);
        }
      } else if (num === sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", sync2visible[1])
      } else if (num === sync2visible[0]) {
        sync2.trigger("owl.goTo", num - 1)
      }
    }
  }(jQuery));
  /*---------------------------------------
   PRODUCT SLIDER
   ---------------------------------------*/
  $('em.minus').on('click', function() {
    $('#quantity1').val(parseInt($('#quantity1').val(), 10) - 1);
  });
  $('em.plus').on('click', function() {
    $('#quantity1').val(parseInt($('#quantity1').val(), 10) + 1);
  });
  /* -------------------------------------
   COMMING SOON COUNTER
   -------------------------------------- */
  $('#comming-countdown').countdown({
    date: '10/5/2017 13:41:59',
    offset: -100,
    day: 'Day',
    days: 'Days'
  }, function() {
    //alert('Done!');
  });
  /* -------------------------------------
   MASNORY GALLERY
   -------------------------------------- */
  $(window).load(function() {
    $('.portfolio-content, .tg-blog-posts').isotope({
      itemSelector: '.portfolio-item, .blog-item',
      masonry: { columnWidth: 2 }
    });
    /* -------------------------------------
     PRELOADER
     -------------------------------------- */

    jQuery("#status").delay(2000).fadeOut();
    jQuery("#preloader").delay(2000).fadeOut("slow");

    /* ---------------------------------------
     OUR PORTFOLIO GALLERY
     -------------------------------------- */
    $('.portfolio-content').isotope({
      itemSelector: '.portfolio-item'
    });
  });
  /* ---------------------------------------
   OUR PORTFOLIO GALLERY
   -------------------------------------- */
  var $container = $('.portfolio-content');
  var $optionSets = $('.option-set');
  var $optionLinks = $optionSets.find('a');

  function doIsotopeFilter() {
    if ($().isotope) {
      var isotopeFilter = '';
      $optionLinks.each(function() {
        var selector = $(this).attr('data-filter');
        var link = window.location.href;
        var firstIndex = link.indexOf('filter=');
        if (firstIndex > 0) {
          var id = link.substring(firstIndex + 7, link.length);
          if ('.' + id == selector) {
            isotopeFilter = '.' + id;
          }
        }
      });
      $container.isotope({
        itemSelector: '.portfolio-item',
        filter: isotopeFilter
      });
      $optionLinks.each(function() {
        var $this = $(this);
        var selector = $this.attr('data-filter');
        if (selector == isotopeFilter) {
          if (!$this.hasClass('active')) {
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.active').removeClass('active');
            $this.addClass('active');
          }
        }
      });
      $optionLinks.on('click', function() {
        var $this = $(this);
        var selector = $this.attr('data-filter');
        $container.isotope({ itemSelector: '.portfolio-item', filter: selector });
        if (!$this.hasClass('active')) {
          var $optionSet = $this.parents('.option-set');
          $optionSet.find('.active').removeClass('active');
          $this.addClass('active');
        }
        return false;
      });
    }
  }
  var isotopeTimer = window.setTimeout(function() {
    window.clearTimeout(isotopeTimer);
    doIsotopeFilter();
  }, 1000);
  /* -------------------------------------
   SCROLL TO TOP
   -------------------------------------- */
  $('.tg-back-to-top').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 3000);
    return false;
  });

});

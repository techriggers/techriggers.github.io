//smooth scroller//
  $(document).ready(function(){
		$(".scroll").on('click', function(event) {
    		if (this.hash !== "") {
      		event.preventDefault();
					var hash = this.hash;
      			$('html, body').animate({
        			scrollTop: $(hash).offset().top
      			}, 800, function(){
        			window.location.hash = hash;
      			});
    		}  // End if
  		});
	});



//Isotope//
  var $grid = $('.grid').isotope({
    itemSelector: '.folio-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {};
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


//Waypoint//
  $(document).ready(function() {
    $('.wp').waypoint(function() {
      $('.wp').addClass('animated fadeInUp');
    }, {
      offset: '85%'
    });

    $('.wp1').waypoint(function() {
      $('.wp1').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });

    $('.wp2').waypoint(function() {
      $('.wp2').addClass('animated fadeInDown');
    }, {
      offset: '85%'
    });

    $('.wp3').waypoint(function() {
      $('.wp3').addClass('animated fadeInDown');
    }, {
      offset: '85%'
    });
  });
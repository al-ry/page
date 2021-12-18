Revealator.effects_padding = '-800';

$(window).on('load', initialization());

function initialization(){  
  scroll();   
  interactMobileMenu();  
  interactFilmForm();   
};

function scroll(){
  $('.icon').smoothScroll();   
};

function interactMobileMenu(){
  $('.icon-menu').on('click', showMobileMenu);
  $('.menu_cancel').on('click', closeMobileMenu);
  $(window).resize(checkWindowSize);  
};

function interactFilmForm(){
  $('.add_film').on('click', showFilmForm);
  $('.film_cancel').on('click', closeFilmForm);
  $('#back').on('click', closeFilmForm);    
  $('#filmSend').on('click', validateFilm);     
};

function showMobileMenu(){
  visibilityNone($(this), true);
  visibilityBlock($('.mobile_menu'), true);
  visibilityBlock($('.menu_cancel'), true);
};

function closeMobileMenu(){
  visibilityBlock($(this), false);
  visibilityBlock($('.mobile_menu'), false);
  visibilityNone($('.icon-menu'), false);
};

function checkWindowSize(){
  if ($(document).width() > 883){
    visibilityBlock($('.icon-menu'), false);
    visibilityBlock($('.mobile_menu'), false);
    visibilityBlock($('.menu_cancel'), false);
  }
  else{ 
    if ($('.menu_cancel').css('display') == 'none'){
      visibilityNone($('.icon-menu'), false);
    }
  };
};


function showFilmForm(){
  visibilityBlock($('#film_form'), true);
  $('#back').css('display', 'block'); 
  if ($(document).width() < 884){
    visibilityNone($('.icon-menu'), false);
    visibilityBlock($('.mobile_menu'), false);
    visibilityBlock($('.menu_cancel'), false);
  };  
};

function closeFilmForm(){
  visibilityBlock($('#film_form'), false);
  $('#back').css('display', 'none');
};

function validateFilm(event) {    
  checkInput($('#url'));
  checkInput($('#filmName'));
  checkInput($('#description'));
  if (checkInput($('#url')) && checkInput($('#filmName')) && checkInput($('#description'))){    
    event.preventDefault();
    $('#filmSend').on('click', closeFilmForm());
    addNewFilm();
  };
  
  checkFocusAndBlur($('#url'));
  checkFocusAndBlur($('#filmName'));
  checkFocusAndBlur($('#description'));
};

function checkInput(input){
  if (input.val() == ''){  
    borderRed($(input), true);
    borderGray($(input), false);
    return false;
  } else {
    borderGray($(input), true);
    borderRed($(input), false);
    return true;
  };  
};

function checkFocusAndBlur(input){
  $(input).on('focus', changeOnFocusBorder);  
  $(input).on('blur', changeOnBlurBorder);    
}

function changeOnFocusBorder(){
  borderGreen($(this), true);
  borderRed($(this), false);
  borderGray($(this), false); 
}

function changeOnBlurBorder(){
 /* if ($(this).val() == ''){
    $(this).addClass('border_red').removeClass('border_green').removeClass('border_gray');  
  } else{*/
    borderGray($(this), true);
    borderRed($(this), false);
    borderGreen($(this), false); 
  //}
}

function clearFilmForm(){
  clearInput($('#url'));
  clearInput($('#filmName'));
  clearInput($('#description'));
}

function clearInput(input){
  $(input).val('');
  borderGray($(input), false);
  borderRed($(input), false);
  borderGreen($(input), false);   
}


function addNewFilm(){
  
  var film = $('<div/>');
  film.appendTo('div#newFilms');
  film.addClass('new_film');
  film.addClass('film_block');
  
  var img = $('<img>');
  img.appendTo($(film));
  img.attr('src', $('#url').val());
  img.addClass('film_photo');
  
  var title = $('<h3>' + $('#filmName').val() + '</h3>');
  title.appendTo($(film));
  title.addClass('film_title');
  
  var text = $('<p>' + $('#description').val() + '</p>');
  text.appendTo($(film));
  text.addClass('film_text');  
  
  i = $('.film_block').length;  
  if ((i % 4) == 1){
    film.addClass('first');
  };
  
  if ((i % 4) == 2){
    film.addClass('second');
  };
  
  if ((i % 4) == 3){
    film.addClass('third');
  };
  
  if ((i % 4) == 0){
    film.addClass('fourth');
  };
    
  clearFilmForm();
  
}

function visibilityBlock(elem, choice){
  var visibility = 'visibility_block';
  changeClass(elem, choice, visibility);
}


function visibilityNone(elem, choice){  
  var visibility = 'visibility_none';
  changeClass(elem, choice, visibility);
}

function borderRed(elem, choice){
  var border = 'border_red';
  changeClass(elem, choice, border);
}

function borderGray(elem, choice){
  var border = 'border_gray';
  changeClass(elem, choice, border);
}

function borderGreen(elem, choice){
  var border = 'border_green';
  changeClass(elem, choice, border);
}

function changeClass(elem, choice, blockClass)
{
  if (choice){
    $(elem).addClass(blockClass); 
  } else {
    $(elem).removeClass(blockClass); 
  }
}

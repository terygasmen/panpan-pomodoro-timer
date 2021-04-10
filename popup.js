/* FULLSCREEN MODE */
var elem = document.getElementById("fullscreen");

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

// DARK MODE
  function darkmode() {
    if( $( "body" ).hasClass( "darkmode__enabled" )) {
      $( "body" ).removeClass( "darkmode__enabled" );
      $( ".sidebar_cont" ).removeClass( "darkmode__enabled__two" );
      $( ".closebtn" ).removeClass( "darkmode__enabled__two" );
      $( ".title_cont" ).removeClass( "darkmode__enabled__two" );
      $( ".decks_cont" ).removeClass( "darkmode__enabled__two" );
      $( ".main_deck" ).removeClass( "darkmode__enabled__two" );
      $( ".subdeck" ).removeClass( "darkmode__enabled__two" );
      $( ".list" ).removeClass( "darkmode__enabled__two" );
      $( ".title_input" ).removeClass( "darkmode__enabled__two" );
      $( ".typing_area" ).removeClass( "darkmode__enabled" );
    } else {
      $( "body" ).addClass( "darkmode__enabled" );
      $( ".sidebar_cont" ).addClass( "darkmode__enabled__two" );
      $( ".closebtn" ).addClass( "darkmode__enabled__two" );
      $( ".title_cont" ).addClass( "darkmode__enabled__two" );
      $( ".decks_cont" ).addClass( "darkmode__enabled__two" );
      $( ".main_deck" ).addClass( "darkmode__enabled__two" );
      $( ".subdeck" ).addClass( "darkmode__enabled__two" );
      $( ".list" ).addClass( "darkmode__enabled__two" );
      $( ".title_input" ).addClass( "darkmode__enabled__two" );
      $( ".typing_area" ).addClass( "darkmode__enabled" );
    }
  }
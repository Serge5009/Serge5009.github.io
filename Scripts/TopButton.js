	topButt.onclick = function() {
      window.scrollTo(pageXOffset, 0);
      // Mooving to the top
    };

    window.addEventListener('scroll', function() {
      topButt.hidden = (pageYOffset < 100);
      //Checking position
    });
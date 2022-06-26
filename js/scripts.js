        $(document).ready(function() { 
            $('#loginLink').click(function() {
                $('#loginModal').modal('show');
            });

            $('#reserveButton').click(function() {
                $('#reserveModal').modal('show');
            });

            $('#mycarousel').carousel({ interval: 2000});
            $('#carouselButton').click(function() {
                if ($('#carouselButton').children('span').hasClass('fa-pause')) { 
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause')
                    $('#carouselButton').children('span').addClass('fa-play')
                }
                else {
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play')
                    $('#carouselButton').children('span').addClass('fa-pause')

                }
                
            });
        });
        //the ids of the carousel and the buttons are accessed as the selections, and the .carousel('cycle') and .carousel('pause') are the actions (in this case making sure the buttons play and pause when clicked, performing it on the entire carousel)-->
        //The interval action specifies how fast the carousel will move between each slide-->
        //Part 2-->
        //The children class goes to the span element of the content with the id -->
                //hasClass checks the current class-->
                //add and remove class changes the font icon and function of the current button, from play to pause or vice versa-->
                //whenever the user clicks the button, the button and operation on the carousel is changed, and this repeats-->
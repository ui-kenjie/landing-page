    $('.try_svg > path').each(function() {

        // var ranNums = shuffle([0.5, 0.3, 0.8, 1, 2, 1.2, 0.1]);
        var myArray = [0.1,0.2,0.3,0.4,0.5,0.6,0.8,0.9,1,,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.4,2.5,2.6,2.8,2.9,3,3.1,3.4,3.5,3.8,3.9,4,4.5]; 
        var pick = Math.floor(Math.random() *myArray.length) ;

        var myArray2 = [0.5,0.3,0.2,1,1.5,0.8,5,4,3]; 
        var pick2 = Math.floor(Math.random() *myArray2.length) ;

        $(this).addClass('showPath');
        $(this).css('transition', myArray2[pick2]+'s ' + myArray[pick]+'s all ease-in-out');
        // $(this).css('transform', 'rotate(0)');

    })
$(document).ready(function () {

    let arrKey = ['65', '90', '69', '82', '81', '83', '68', '70', '87', '88', '67', '86'];
    let arrDiv = ['#A', '#Z', '#E', '#R', '#Q', '#S', '#D', '#F', '#W', '#X', '#C', '#V'];
    let counter = 0;

    for(let i = 0; i <= arrKey.length; i++) {
        $(document).keydown(function(event){
            let keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == arrKey[i]) {
                    $('audio#meme')[i].volume = 0.05;
                    $('audio#meme')[i].play();
                    $(arrDiv[i]).addClass("newDiv");
                    if(counter<=0){
                        $('#gif').append(`<img class="image" src="gif${[i]}.gif" alt="gif" height="200px">`);  
                        counter++;
                    }
                }
        });

        $(document).keyup(function(event){
            let keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == arrKey[i]) {
                    $('audio#meme')[i].pause();
                    $('audio#meme')[i].currentTime = 0;
                    $(arrDiv[i]).removeClass("newDiv");
                    $('img').remove();
                    counter = 0;
                }
        });
    };

    for(let j = 0; j <= arrDiv.length; j++) {
        $(arrDiv[j]).mousedown(function () {
            $('audio#meme')[j].volume = 0.05;
            $('audio#meme')[j].play();
            $(this).toggleClass("newDiv");
            $('#gif').append(`<img class="image" src="gif${[j]}.gif" alt="gif"  height="200px">`);
        });

        $(arrDiv[j]).mouseup(function () {
            $('audio#meme')[j].pause();
            $('audio#meme')[j].currentTime = 0;
            $(this).removeClass("newDiv");
            $('img').remove();
        });

    }

});
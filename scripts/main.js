
/*Youtube Section Builder*/
(function(){
    const video_playlist = document.querySelector('video_playlist');
    const iframe_item = document.querySelector('iframe_item');
    const card1 = document.querySelector('.playlist_card_1');
    const card2 = document.querySelector('.playlist_card_2');
    const card3 = document.querySelector('.playlist_card_3');
    const card4 = document.querySelector('.playlist_card_4');
    var ytApiKey = "AIzaSyACZaThI151d-XYfmXCb6Pvl7KcJkb4Gk0";
    let video_title;
    let preview_pic;
    let youtube_number;
    let video_number;

    for(let i =0; i < 4; i++){
        if(i==0){
            preview_pic = document.getElementById("preview_pic" + (i+1) + "_id").src;
            youtube_number = preview_pic.slice(27, 38);
            $.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + youtube_number + "&key=" + ytApiKey, function(data) {
                document.getElementById("preview_desc"+(i+1)+"_id").innerHTML = data.items[0].snippet.title;
                document.getElementById("preview_desc_title_id").innerHTML = data.items[0].snippet.title;
            });
        }else{
            preview_pic = document.getElementById("preview_pic" + (i+1) + "_id").src;
            youtube_number = preview_pic.slice(27, 38);
            $.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + youtube_number + "&key=" + ytApiKey, function(data) {
                document.getElementById("preview_desc"+(i+1)+"_id").innerHTML = data.items[0].snippet.title;
            });
        };
        
    };

    card1.addEventListener('click', function(){
        card2.classList.remove('playlist_card_active');
        card3.classList.remove('playlist_card_active');
        card4.classList.remove('playlist_card_active'); 
        card1.classList.add('playlist_card_active');
        preview_pic = document.getElementById("preview_pic1_id").src;
        youtube_number = preview_pic.slice(27, 38);
        document.getElementById("iframe_item").src='https://www.youtube.com/embed/'+youtube_number;
        video_number = document.getElementById("preview_title1_id").innerHTML;
        document.getElementById("preview_title_id").innerHTML=video_number;

        video_title = document.getElementById("preview_desc1_id").innerHTML;
        document.getElementById("preview_desc_title_id").innerHTML = video_title;
    });
    card2.addEventListener('click', function(){
        card1.classList.remove('playlist_card_active');
        card3.classList.remove('playlist_card_active');
        card4.classList.remove('playlist_card_active'); 
        card2.classList.add('playlist_card_active');
        preview_pic = document.getElementById("preview_pic2_id").src;
        youtube_number = preview_pic.slice(27, 38);
        document.getElementById("iframe_item").src='https://www.youtube.com/embed/'+youtube_number;
        video_number = document.getElementById("preview_title2_id").innerHTML;
        document.getElementById("preview_title_id").innerHTML=video_number;
        video_title = document.getElementById("preview_desc2_id").innerHTML;
        document.getElementById("preview_desc_title_id").innerHTML = video_title;
    });
    card3.addEventListener('click', function(){
        card2.classList.remove('playlist_card_active');
        card1.classList.remove('playlist_card_active');
        card4.classList.remove('playlist_card_active'); 
        card3.classList.add('playlist_card_active');
        preview_pic = document.getElementById("preview_pic3_id").src;
        youtube_number = preview_pic.slice(27, 38);
        document.getElementById("iframe_item").src='https://www.youtube.com/embed/'+youtube_number;
        video_number = document.getElementById("preview_title3_id").innerHTML;
        document.getElementById("preview_title_id").innerHTML=video_number;
        video_title = document.getElementById("preview_desc3_id").innerHTML;
        document.getElementById("preview_desc_title_id").innerHTML = video_title;
    });
    card4.addEventListener('click', function(){
        card2.classList.remove('playlist_card_active');
        card3.classList.remove('playlist_card_active');
        card1.classList.remove('playlist_card_active'); 
        card4.classList.add('playlist_card_active');
        preview_pic = document.getElementById("preview_pic4_id").src;
        youtube_number = preview_pic.slice(27, 38);
        document.getElementById("iframe_item").src='https://www.youtube.com/embed/'+youtube_number;
        video_number = document.getElementById("preview_title4_id").innerHTML;
        document.getElementById("preview_title_id").innerHTML=video_number;
        video_title = document.getElementById("preview_desc4_id").innerHTML;
        document.getElementById("preview_desc_title_id").innerHTML = video_title;
    });
    
}());

/*Slick Carousel*/
$(document).ready(function(){
    $('.slick-carousel').slick({
        arrows: false,
        dots: true,
        adaptiveHeight:true,
        slidesToShow:1,
        initialSlide:0,
        centerMode: true,
        variableWidth: false,
        responsive: [{
              breakpoint: 506,
              settings: {
                centerMode: false
              }
            }
          ]
    });
});

/*Footer Menu Hider*/
$(document).ready(function(){
    let hidenText = 0;
    let footerCard1 = document.querySelector('.footer_card_title1');
    let footerCard2 = document.querySelector('.footer_card_title2');
    footerCard1.addEventListener('click', function(){
        if($(window).width()<= 490){
            $(".footer_card1_visib_state").toggleClass('footer_descr_show').slideToggle(300);

            $(this).toggleClass('active');
        }
    });
    footerCard2.addEventListener('click', function(){
        if($(window).width()<= 490){
            $(".footer_card2_visib_state").toggleClass('footer_descr_show').slideToggle(300);
            $(this).toggleClass('active');
            
        }
    });

    window.addEventListener('resize',function(){
        let footer_title1_ID =document.getElementById("footer_card_title1_ID");
        let footer_title2_ID =document.getElementById("footer_card_title2_ID");
        let footerHideDesc1 = document.getElementById("hideble_desc1");
        let footerHideDesc2 = document.getElementById("hideble_desc2");
        
        footer_title1_ID.classList.remove('active');
        footer_title2_ID.classList.remove("active");
        // console.log(footer_title1_ID.classList);
        if($(window).width() > 490){
            footerHideDesc1.style.display = 'block';
            footerHideDesc2.style.display = 'block';
        }
        else{
            footerHideDesc1.style.display = 'none';
            footerHideDesc2.style.display = 'none';
        }
    });
    
});

/*Burger */
$(document).ready(function(){
    const top_nav_menu = document.querySelector('.top_nav_menu');
    const header_nav = document.querySelector('.header_nav');
    const body = document.querySelector('body');
    const burger = document.querySelector('.burger');
    $('.burger').click(function(event){
        $('.top_nav_menu').toggleClass('top_nav_menu_active');
        $('.header_nav').toggleClass('header_nav_stick_tothe_top');
        $(this).toggleClass('active_burger');
        $('body').toggleClass('lock');
        $('.top_nav_ul').click(function(event){
            top_nav_menu.classList.remove('top_nav_menu_active');
            header_nav.classList.remove('header_nav_stick_tothe_top');
            burger.classList.remove('active_burger');
            body.classList.remove('lock');

        });
    });
});

/*JumpToTop Button*/
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0)
        $('#jumbBtn').fadeIn();
        else
        $('#jumbBtn').fadeOut();
    });
    $('#jumbBtn').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});

$(document).ready(function () {
    var owl = $(".slider");
    owl.owlCarousel({
        center: false,
        nav: true,
        rtl: true,
        //items: 7,
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        },
        singleItem: false,        
        loop: false,
        dots: false,
        autoWidth: true,
        slideTransition: 'linear',
        mouseDrag: true
    });
    var get_current_index = $('.owl-carousel.owl-rtl .owl-item a.current').parent().index() - 1;
    owl.trigger('to.owl.carousel', [get_current_index, 0])


    $(document).click(function () {
        $(".moreanchor").removeClass('open'); 
        $(".more_list").hide();
        $(".more_edit").hide();        
    });
    $('.edit_toggle').click(function (e) {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.more_edit').hide()
        }
        else {
            $('.edit_toggle').removeClass('open');
            $(this).addClass("open");
            $('.more_edit').hide()
            $(this).siblings('.more_edit').toggle();
        }
        e.stopPropagation();
    });

    $('.more1 .moreanchor').click(function (e) {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.more_list').hide()
        }
        else {
            $('.more1 .moreanchor').removeClass('open');
            $(this).addClass("open");
            $('.more_list').hide()
            $(this).siblings('.more_list').toggle();
        }
        e.stopPropagation();
    });
    $('.more a').click(function (e) {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.more_list').hide()
        }
        else {
            $('.more a').removeClass('open');
            $(this).addClass("open");
            $('.more_list').hide()
            $(this).siblings('.more_list').toggle();
        }
        e.stopPropagation();
    });

    $('.edit_list .edit').click(function (e) {
        $(this).siblings('.more_list').toggle()
        e.stopPropagation();
        $(".side_anc .more_list").hide();
    });

    $(function () {
        $(".sortable").sortable();
        $(".sortable").disableSelection();
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 40) {
            $('header').addClass('fixed_header');
        }
        else {
            $('header').removeClass('fixed_header');
        }
    });
    $(".movesA").hide();
    $(".movesa").show();
    $(".tab li a").click(function () {
        var type = $(this).data("type");
        $(".movesA").hide();
        $(".moves" + type).show();
        $(".tab li a").removeClass("active");
        $(this).addClass("active");
        $(".moves" + type).find(".accord_body:first").addClass('tabbody');
        $(".tabbody").show();
        $(".slider").trigger('refresh.owl.carousel');
        owl.trigger('to.owl.carousel', [get_current_index, 0]);
    });

    $('.slider a').click(function () {
        $('.body_open .slider a').removeClass("current");
        $(this).addClass("current");
        $('.student_normal .slider a').removeClass("current");
        $(this).addClass("current");
    });
    $(".notification_main > a").click(function (e) {
        $(".sub-dropdown").show();
        e.stopPropagation();
    });

    $(".sub-dropdown").click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $(".sub-dropdown").hide();
    });

    $(".body_open .stepA").hide();
    $(".body_open .step1").show();
    $(".body_open .slider a").click(function () {
        var type = $(this).data("type");
        $(".stepA").hide();
        $(".step" + type).show();
        $(".body_open .slider a").removeClass("current");
        $(this).addClass("current");
    });
    $(".status a").click(function (event) {
        event.stopPropagation();
        $(this).next(".status_list").show();
    });
    $(".status_list li").click(function () {
        var listval = $(this).text();
        $(this).parent(".status_list").prev(".statustext").children(".statuswrite").text(listval);
        $(".status_list").hide();
    });

    $("a.affi_text").click(function (event) {
        event.stopPropagation();
        $(this).next(".affi_list").show();
        $(this).next(".affiliation_students").show();
        /*  $('#division_groups').slideUp();
        $('#create_new_groups').slideUp();*/
    });

    $(".affi_list li").click(function () {
        var listval_new = $(this).text();
        $(this).parents(".affi_list").prev(".affi_text").find(".affiWrite").text(listval_new);
        $(".affi_list").hide();
    });
    $(".affiliation_students ul li").click(function () {
        var listval_new = $(this).children('span').text();
        $(this).parents(".affiliation_students").prev(".affi_text").find(".affiWrite").text(listval_new);
        $(".affi_list").hide();

    });

    $('.affiliation_students ul li').click(function(){
        $('#division_groups').hide();
        $('#create_new_groups').hide();
        var _ket = $(this).children('span').attr('data-text')
        $('#'+_ket).show();

    });

    $(window).click(function() {
        $(".status_list").hide();           
    });


    $('.accord_head ').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.accord_body').slideUp();
            $(".slider").trigger('refresh.owl.carousel');
            $(".slider").trigger('to.owl.carousel', [3, 0])
            $(this).removeClass('accord_open');
            $(this).next('.accord_body').removeClass("body_open");
        }
        else if ($('.accord_body').hasClass("tabbody")) {
            $('.accord_body').hide();
            $('.accord_body').removeClass("tabbody");
        }
        else {
            $('.open_arrow').removeClass('active');
            $(".accord_head").removeClass('accord_open');
            $(".accord_body").removeClass('body_open');
            $(this).addClass('active');
            $(this).addClass('accord_open');
            $('.accord_body').slideUp();
            $(this).next('.accord_body').addClass("body_open");
            $(this).next('.accord_body').slideToggle();
            $(".slider").trigger('refresh.owl.carousel');
            owl.trigger('to.owl.carousel', [get_current_index, 0]);
        }
        $(".body_open .stepA").hide();
        $(".body_open .step1").show();
        $(".body_open .slider a").click(function () {
            var type = $(this).data("type");
            $(".stepA").hide();
            $(".step" + type).fadeIn();
            $(".body_open .slider a").removeClass("current");
            $(this).addClass("current");
        });
    });

    // catalogpage
    $('.acc_list>span').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).next('.acc_drop').hide();
            $(this).parent().removeClass('active');
        }
        else {
            $(this).parent().toggleClass('active')
            $(this).next('.acc_drop').toggle();
        }
    });
    
    $('.new_acc_list span').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).next('.new_acc_drop').hide();
            $(this).parent().removeClass('active');
        }
        else {
            $(this).parent().toggleClass('active')
            $(this).next('.new_acc_drop').toggle();
        }
    });
    
    
    
    $(document).click(function () {
        $(".first_drop").hide();
    });
    $('.catalog_more').click(function (e) {
        $('.first_drop').hide();
        e.stopPropagation();
        $(this).next('.first_drop').toggle();
    })
    $('.heart').click(function () {
        if ($(this).hasClass('heartred')) {
            $(this).removeClass('heartred');
        }
        else {
            $(this).addClass('heartred');
        }
    });
    $('.search input').keyup(function () {
        if ($(this).val().length > 0) {
            $(this).parent('.search').addClass('warning');
            $(this).next('img').attr('src', 'image/closegrey.svg')
            $(this).next('img').addClass('closetext')
        }
        else {
            $(this).parent('.search').removeClass('warning');
            $(this).next('img').attr('src', 'image/search.svg')
            $(this).next('img').removeClass('closetext')
        }
    });
    $(document).on('click', '.closetext', function(){
        $(this).prev().val("")
        $(this).attr('src', 'image/search.svg').removeClass('closetext');
        $(this).parent('.search').removeClass('warning');
    });
    $('.checkdiv input').click(function () {
        if ($('.checkdiv input').is(':checked')) {
            $(this).parents('.adding_res').find('.toggleSec').hide();
            $(this).parents('.adding_res').find('.input_field').show();
        }
        else{
            $(this).parents('.adding_res').find('.toggleSec').show();
            $(this).parents('.adding_res').find('.input_field').hide();
        }
    });

    $('.acc_list .acc_drop li input').click(function () {
        if ($(this).is(':checked')) {
            $('.cancel_filters').css('display','block')
        } 

        if ($('.acc_list .acc_drop li input').is(':checked') == 0) {
            $('.cancel_filters').css('display','none')
        }
    });
    $('.cancel_filters').click(function () {
        $('.cancel_filters').css('display','none')
        $('.acc_list .acc_drop li input:checked').trigger('click');        
    }); 

    $('.sending_mail').click(function(){
        $(this).hide();
        $(this).next('.green_btn').show();
    });
    $('.puzzle p img').click(function(){
        $('.puzzle').hide();
    });

    var owl2 = $(".myclass_slider");
    owl2.owlCarousel({
        center: false,
        nav: true,
        items: 7,
        rtl: true,
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        },
        singleItem: true,        
        loop: false,
        dots: false,
        autoWidth: true,
        slideTransition: 'linear',

    });
    var owl3 = $(".catalog_slider_in");
    owl3.owlCarousel({
        center: false,
        nav: true,
        items: 6,
        rtl: true,
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        },
        singleItem: true,  
        loop: false,
        dots: false,
        autoWidth: true,
        slideTransition: 'linear',

    });
    $('.copy_link').click(function(){
        $(this).next('.green_btn').show();
    });

    $('.linkclick').click(function(){
        $('.addlink').show();
        $('.addlink2').show();
        $('.main_modal').hide();
        $('.main_modal2').hide();
    });
    $('.fileclick').click(function(){
        $('.addfile').show();
        $('.addfile2').show();
        $('.main_modal').hide();
        $('.main_modal2').hide();
    });
    $('.forwardarrow').click(function(){
        $('.main_modal').show();
        $('.main_modal2').show();
        $(this).parent().hide();
    });

    $(".setA").hide();
    $(".setx").show();
    $(".tab1 a").click(function () {
        var type = $(this).data("type");
        $(".setA").hide();
        $(".set" + type).fadeIn();
        $(".tab1 a").removeClass("active");
        $(this).addClass("active");
    });

    $('.setacc_head').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next('.setacc_body').slideUp(); 
        }
        else{
            $('.setacc_head').removeClass('active');
            $(this).addClass('active');
            $('.setacc_body').slideUp(); 
            $(this).next('.setacc_body').slideToggle();
        }
    });
    $('.studentgroup li img').click(function(){
        $(this).parent('li').hide(50);
    });
    $('.student_list li').click(function(){
        $(this).toggleClass('active')
    });


    $('.classdrop p').click(function(){
        $(this).siblings('.classdrop ul').toggle();
    });
    $('.classdrop li').click(function(){
        var droplist = $(this).text();
        $(this).parent('ul').siblings('.classdrop p').children('span').text(droplist);
        $(this).parent('ul').hide();
    });
    $(".dashA").hide();
    $(".dasha").show();
    $(".dashtab a").click(function () {
        var type = $(this).data("type");
        $(".dashA").hide();
        $(".dash" + type).fadeIn();
        $(".dashtab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".dash2tabA").hide();
    $(".dash2taba").show();
    $(".dash2tab a").click(function () {
        var type = $(this).data("type");
        $(".dash2tabA").hide();
        $(".dash2tab" + type).fadeIn();
        $(".dash2tab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".filedashA").hide();
    $(".filedashx").show();
    $(".fildashtab a").click(function () {
        var type = $(this).data("type");
        $(".filedashA").hide();
        $(".filedash" + type).fadeIn();
        $(".fildashtab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".file2dashA").hide();
    $(".file2dashx").show();
    $(".fil2dashtab a").click(function () {
        var type = $(this).data("type");
        $(".file2dashA").hide();
        $(".file2dash" + type).fadeIn();
        $(".fil2dashtab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".file3dashA").hide();
    $(".file3dashx").show();
    $(".fil3dashtab a").click(function () {
        var type = $(this).data("type");
        $(".file3dashA").hide();
        $(".file3dash" + type).fadeIn();
        $(".fil3dashtab a").removeClass("active");
        $(this).addClass("active");
    });
});


// e.stopPropagation();
$('.more_list li a[data-target="#share_flow"]').click(function(e){
    $('.moreanchor').removeClass('open');
    $('#share_flow').modal('show');
    e.stopPropagation();
});


$('.accord.edit_mode .more_list .student_group_opne').click(function(e){
    $('.moreanchor').removeClass('open');
    $('#areaofstudy').modal('show');
    e.stopPropagation();
}); 

$('.accord.edit_mode .more_list .division_group').click(function(e){
    $('.moreanchor').removeClass('open');
    $('#automatic_group').modal('show');
    e.stopPropagation();
}); 



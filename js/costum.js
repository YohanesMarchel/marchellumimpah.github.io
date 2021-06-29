$(document).ready(function(){
    $('.btn-burger').click(function(){
        $('.navbar ul').toggleClass('view');
        
    })


    //===============================ANIMATED==============================//
    $(function(){
        $(window).scroll(function(){
            const header = $('nav');

            if($(window).scrollTop() > 200){
                $(header).addClass('nav-animated');
            }else{
                $(header).removeClass('nav-animated');
            }
        })
    })

    
    
    //==========================DROPDOWN==============================//
    
    // =======================HITUNG MUNDUR REGIS=====================//
    const stopRegis = new Date('Jun 17, 2021 00:00:00').getTime();
    
    const runningTimeRegis = setInterval(function(){
        
        const thisTime = new Date().getTime();
        const timeRunning = stopRegis - thisTime;
        
        // ============GET DAY==========//
        const day = Math.floor(timeRunning / (1000 * 60 * 60 *24));
        // ============GET HOURS==========//
        const hours = Math.floor(timeRunning % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
        // ============GET MINUTE==========//
        const minute = Math.floor(timeRunning % (1000 * 60 * 60) / (1000 * 60));
        // ============GET SECONDS==========//
        const seconds = Math.floor(timeRunning % (1000 * 60) / 1000);
        // ============END GET TIME=================//
        
        //**********TEXT WAKTU REGIS****************//
        $('#time-regis').html('Waktu anda tersisa ' + day + ' hari '+hours+ ' Jam ' +minute+ ' Menit ' +seconds+ ' Detik Lagi !');
        //********** END TEXT WAKTU REGIS****************//
        
        //================END REGIS======================//
        if(timeRunning <= 0){
            clearInterval(runningTimeRegis);
            $('#time-regis').html('Waktu Pendaftaran Member Telah HABIS !');
        }
        
    },1000)
    
});


// ===================ANIMASI IMAGE===============================//
$('.fitures .items .item').on('mouseover',function(e){
        // e.target.style.transform ='scale(1.1)'
        $(e.target).css({
            'transition':'0.3s',
            'transform':'scale(1.1)'
        });
})
$('.fitures .items .item').on('mouseleave',function(e){
    if(e.target.className=='item'){
        // e.target.style.transform ='scale(1.1)'
        $(e.target).css('transform','scale(1)');
    }
})



$(function(){

	var todayDate = new Date();            
        var lastActionDate = new Date(todayDate.valueOf()+24*60*60*1000);        
        var firstActionDate =  new Date(todayDate.valueOf()-24*60*60*1000);
        
        $('#startDate').text(firstActionDate);
         $('#endDate').text(lastActionDate);
         
         
	$('#countdown').countdown({
		timestamp	: lastActionDate  
	});
        
        $('.btn-more').fancybox({
            padding :0, 
            margin: 0,
            scrolling : 'no',
            width: 364
        });
        
        $('.works-carousel li a').fancybox({
            padding:0, 
            margin:0
        });
        
        $('#mycarousel').jcarousel({            
            scroll: 1            
        });

});
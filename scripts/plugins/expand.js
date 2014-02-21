/*This plugin is for expand o postit or canvas's area*/

(function($){  

    //open expand
    $.fn.expand = function(){
        //create elements
        $("<div id='backgroundexpand' class='backgroundexpand'></div>").appendTo("body");
        $("<div bigpostit-id='' class='bigpostit'></div>").appendTo("#backgroundexpand");

        var id = $(this).attr("postit-id");
        var selector = "li[postit-id="+id+"]";
        var selectorbig = "div[bigpostit-id="+id+"]";
        var time = 300;
        var content = $(selector).text();

        //EXPAND BACKGROUND
        $("#backgroundexpand").css({"z-index":"0"}).animate({"background-color":"rgba(0,0,0,0.9)"});    

        $(selector).animate({"opacity":"0"});
        $("div[bigpostit-id]").attr("bigpostit-id",id);
        $(selectorbig).animate({"opacity":"1"},time).html(content); 

        //close
        $("#backgroundexpand").click(function(){
            $(selectorbig).animate({"opacity":"0"},time, function(){
                $(this).remove();     
                $("#backgroundexpand").animate({"background-color":"rgba(0,0,0,0)"}).css({"z-index":"-1"},time,function(){
                    $(this).remove();
                });  
            });
            $(selector).animate({"opacity":"1"},time);
        });
            
    }

    
})(jQuery);

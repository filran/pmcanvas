/*This plugin will solve and apply the left */
(function($){
    $.fn.applyLeft = function( one ){
        first = $(one).css(["width","margin-right","margin-left","padding-right","padding-left"]);

        /*wf = solveWidth(first);

        //$( "#"+$(this).attr("id") ).css({ "left":"-"+wf });

        function solveWidth( object ){
            sum = 0;
            $.each(object,function(tag,value){
                value = parseInt(value.replace("px",""));
                sum+=value;
            });
            return sum;
        }*/

        sum=0;
        $.each(first,function(tag,value){
                value = parseInt(value.replace("px",""));
                $("#stake").append(tag+":"+value+"<br>");
        });
    }
})(jQuery);

/*
I developed this plugin for to apply top automaticlly when cavas's size change
Parameters:
one and two = its objects that will to sum height for after solver diference
*/
(function($){
    $.fn.applyTop = function( one , two ){
        id = $(this).attr("id");
        
        first = $(one).css(["height","margin-top","margin-bottom","padding-top","padding-bottom"]);
        second = $(two).css(["height","margin-top","margin-bottom","padding-top","padding-bottom"]);
            
        //if(id=="obj" || id=="requisitos"){            
            hf = solveHeight(first);
            hs = solveHeight(second);

            if( hf < hs ){
                dif = hf-hs;
            }else{
                dif = hs-hf;
            }

            $( "#"+$(this).attr("id") ).css({"top":dif});    

            function solveHeight( whatobject ){
                sum=0;
                $.each( whatobject , function( tag , value ){
                    value = parseInt(value.replace("px","")); 
                    sum += value;
                });
                return sum;
            }
        /*}else if(id=="beneficios"){
            if( hf > hs ){
                dif = hf-hs;
            }else{
                dif = hs-hf;
            }
            //$( "#"+$(this).attr("id") ).css({"top":dif});
        }*/
    }       
})(jQuery);

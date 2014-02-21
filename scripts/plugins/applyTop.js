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

        hf = solveHeight(first);
        hs = solveHeight(second);

        if( hf < hs ){
            dif = hf-hs;
        }else{
            dif = hs-hf;
        }

        if(id=="beneficios"){
            dif*=1.36;
            dif = Math.round(dif);
            if( dif > -195 ){
                dif-=1;
                //alert(dif);
            }
        }else if( id=="custos" ) {
            dif*=1.107;            
        }else if( id=="autor" || id=="metodologia"){
            dif*=1.025;
        }
        
        $( "#"+$(this).attr("id") ).css({"top":dif});


        /*just a function*/
        function solveHeight( whatobject ){
            sum=0;
            $.each( whatobject , function( tag , value ){
                value = parseInt(value.replace("px","")); 
                sum += value;
            });
            return sum;
        }
    }       
})(jQuery);

//PLUGIN ZOOM
(function($){
                         //"*","1.2","#pmcanvas","width"
    $.fn.zoom = function($fator,$escala,$seletor){
        $(this).click(function(){            
            var size = $($seletor).css(["width","height","top","right","bottom","left","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left","font-size"]);

            $.each(size , function(prop,value){            
                value = value.search("px")>0 ? value.replace("px","") : value ;
                            
                if($fator=="*"){
                    value = $.isNumeric(value) ? Math.round( value * $escala ) : value;
                }else if($fator=="/"){
                    value = $.isNumeric(value) ? Math.round( value / $escala ) : value;
                }else if($fator=="+"){
                    value = $.isNumeric(value) ? Math.round( value + $escala ) : value;
                }else if($fator=="-"){
                    value = $.isNumeric(value) ? Math.round( value - $escala ) : value;
                }   

                if( $.isNumeric(value) ){
                    switch(prop){
                        case "width":$($seletor).animate({ "width":value+"px" },100);
                        break;
                        case "height":$($seletor).animate({ "height":value+"px" },100);
                        break;
                        case "top":$($seletor).animate({ "top":value+"px" },100);
                        break;
                        case "right":$($seletor).animate({ "right":value+"px" },100);
                        break;
                        case "bottom":$($seletor).animate({ "bottom":value+"px" },100);
                        break;
                        case "left":$($seletor).animate({ "left":value+"px" },100);
                        break;
                        case "margin-top":$($seletor).animate({ "margin-top":value+"px" },100);
                        break;
                        case "margin-right":$($seletor).animate({ "margin-right":value+"px" },100);
                        break;
                        case "margin-bottom":$($seletor).animate({ "margin-bottom":value+"px" },100);
                        break;
                        case "margin-left":$($seletor).animate({ "margin-left":value+"px" },100);
                        break;
                        case "padding-top":$($seletor).animate({ "padding-top":value+"px" },100);
                        break;
                        case "padding-right":$($seletor).animate({ "padding-right":value+"px" },100);
                        break;
                        case "padding-bottom":$($seletor).animate({ "padding-bottom":value+"px" },100);
                        break;
                        case "padding-left":$($seletor).animate({ "padding-left":value+"px" },100);
                        break;
                        case "font-size":$($seletor).animate({ "font-size":value+"px" },100);
                        break;                    
                    }
                }
            });                    
        });
    }
})(jQuery);

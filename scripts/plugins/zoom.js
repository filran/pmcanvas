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

                value = (value/16);

                if( $.isNumeric(value) ){
                    switch(prop){
                        case "width":$($seletor).animate({ "width":value+"em" },100);
                        break;
                        case "height":$($seletor).animate({ "height":value+"em" },100);
                        break;
                        case "top":$($seletor).animate({ "top":value+"em" },100);
                        break;
                        case "right":$($seletor).animate({ "right":value+"em" },100);
                        break;
                        case "bottom":$($seletor).animate({ "bottom":value+"em" },100);
                        break;
                        case "left":$($seletor).animate({ "left":value+"em" },100);
                        break;
                        case "margin-top":$($seletor).animate({ "margin-top":value+"em" },100);
                        break;
                        case "margin-right":$($seletor).animate({ "margin-right":value+"em" },100);
                        break;
                        case "margin-bottom":$($seletor).animate({ "margin-bottom":value+"em" },100);
                        break;
                        case "margin-left":$($seletor).animate({ "margin-left":value+"em" },100);
                        break;
                        case "padding-top":$($seletor).animate({ "padding-top":value+"em" },100);
                        break;
                        case "padding-right":$($seletor).animate({ "padding-right":value+"em" },100);
                        break;
                        case "padding-bottom":$($seletor).animate({ "padding-bottom":value+"em" },100);
                        break;
                        case "padding-left":$($seletor).animate({ "padding-left":value+"em" },100);
                        break;
                        case "font-size":$($seletor).animate({ "font-size":value+"em" },100);
                        break;                    
                    }
                }
            });                    
        });
    }
})(jQuery);

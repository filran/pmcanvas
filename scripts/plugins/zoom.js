//PLUGIN ZOOM
(function($){
                         //"*","1.2","#pmcanvas","width"
    $.fn.zoom = function($fator,$escala,$seletor,$tag){
        $(this).click(function(){
            
            if( $tag=="xy" ){
                var sizeW = $($seletor).css("width");
                var sizeH = $($seletor).css("height");
                var sizeT = $($seletor).css("top");
                var sizeL = $($seletor).css("left");
                
                var sizeW = sizeW.replace("px","");
                var sizeH = sizeH.replace("px","");
                var sizeT = sizeT.replace("px","");
                var sizeL = sizeL.replace("px","");

                if($fator=="*"){
                    sizeW = Math.round( parseInt(sizeW) * $escala );
                    sizeH = Math.round( parseInt(sizeH) * $escala );
                    sizeT = Math.round( parseInt(sizeT) * $escala );
                    sizeL = Math.round( parseInt(sizeL) * $escala );
                }else if($fator=="/"){
                    sizeW = Math.round( parseInt(sizeW) / $escala );
                    sizeH = Math.round( parseInt(sizeH) / $escala );
                    sizeT = Math.round( parseInt(sizeT) / $escala );
                    sizeL = Math.round( parseInt(sizeL) / $escala );
                }else if($fator=="+"){
                    sizeW = Math.round( parseInt(sizeW) + $escala );
                    sizeH = Math.round( parseInt(sizeH) + $escala );
                    sizeT = Math.round( parseInt(sizeT) + $escala );
                    sizeL = Math.round( parseInt(sizeL) + $escala );
                }else if($fator=="-"){
                    sizeW = Math.round( parseInt(sizeW) - $escala );
                    sizeH = Math.round( parseInt(sizeH) - $escala );
                    sizeT = Math.round( parseInt(sizeT) - $escala );
                    sizeL = Math.round( parseInt(sizeL) - $escala );
                }

                $($seletor).animate({"width":sizeW+"px"});
                $($seletor).animate({"height":sizeH+"px"});
                $($seletor).animate({"top":sizeT+"px"});
                $($seletor).animate({"left":sizeL+"px"});
            
            }else{
                var sizeF = $($seletor).css("font-size");
                var sizeF = sizeF.replace("px","");
                sizeF = Math.round( parseInt(sizeF) * $escala );
                $($seletor).animate({"font-size":size+"px"});
            }                              
            
        });
    }
})(jQuery);

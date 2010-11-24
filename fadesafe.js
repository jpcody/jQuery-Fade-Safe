/*

 * jQuery FadeSafe
 * v 0.5 - 11/24/2010
  
 * Author: Joshua Cody - http://joshuacody.net
 * Licensed under MIT license - http://www.opensource.org/licenses/mit-license.php
 
 * Purpose:
 * This plugin exists because IE <= 8 don't exactly handle transparency well. Things
 * work fine on 7 and 8 until trying to fade an image with alpha transparency, then
 * IE tries to apply both an opacity and fade filter, wreaking havoc on the image.
 * There are fixes to this, but none work particularly well with CSS backgrounds,
 * thus we have this, to skip the fade altogether on IE <= 8.
 
 * Usage:
 * $(...).fadeInSafe(speed, easing, callback);
 * $(...).fadeOutSafe(speed, easing, callback);
 * Use just like $.fadeIn and $.fadeOut
 * fadeIn jQuery docs: http://api.jquery.com/fadeIn/
 * fadeOut jQuery docs: http://api.jquery.com/fadeOut/

*/

(function($){
    
    // FADE IN SAFE
    //
    // Functionality:
    // Fade in an element or group of elements
    // 
    // Arguments:
    // Speed - the speed of the fade-in in ms, default is 400, ignored in IE
    // Easing - 'swing' and 'linear' are the only two available in jQuery core, but
    //          this is simply the type of animation to be used, ignored in IE
    // Callback - a function to run once the fade-in or show is complete
    //
    // Usage:
    // $(elementOrGroup).fadeInSafe(options);
    
    jQuery.fn.fadeInSafe = function(speed, easing, callback){
        if($.browser.msie && $.browser.version.substr(0,1) < 9){
            return this.each(function(){            
                $(this).show();
                
                // if only callback, execute it
                if(speed && typeof(speed) === "function"){
                    speed();
                }
                
                // if only speed + callback, execute callback
                if(easing && typeof(easing) === "function"){
                    easing();
                }
                
                // if speed + easing + callback, execute callback
                if(callback && typeof(callback) === "function"){
                    callback();
                }
            });            
        }else{
            return this.each(function(){
                $(this).fadeIn(speed, easing, callback);
            });
        }
    };
    
    // FADE OUT SAFE
    //
    // Functionality:
    // Fade out an element or group of elements
    // 
    // Arguments:
    // Speed - the speed of the fade-out in ms, default is 400, ignored in IE
    // Easing - 'swing' and 'linear' are the only two available in jQuery core, but
    //          this is simply the type of animation to be used, ignored in IE
    // Callback - a function to run once the fade-out or show is complete
    //
    // Usage:
    // $(elementOrGroup).fadeInSafe(options);
    
    jQuery.fn.fadeOutSafe = function(speed, easing, callback){
        if($.browser.msie && $.browser.version.substr(0,1) < 9){
            return this.each(function(){            
                $(this).hide();
                
                // if only callback, execute it
                if(speed && typeof(speed) === "function"){
                    speed();
                }
                
                // if only speed + callback, execute callback
                if(easing && typeof(easing) === "function"){
                    easing();
                }
                
                // if speed + easing + callback, execute callback
                if(callback && typeof(callback) === "function"){
                    callback();
                }
            });            
        }else{
            return this.each(function(){
                $(this).fadeOut(speed, easing, callback);
            });
        }
    };
})(jQuery);
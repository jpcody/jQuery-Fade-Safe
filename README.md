# jQuery FadeSafe

## Purpose:

This plugin exists because IE <= 8 don't exactly handle transparency well. Things work fine on 7 and 8 until trying to fade an image with alpha transparency, then IE tries to apply both an opacity and fade filter, wreaking havoc on the image. There are fixes to this, but none work particularly well with CSS backgrounds, thus we have this, to skip the fade altogether on IE <= 8.

## Usage:

Use this just like jQuery's [fadeIn](http://api.jquery.com/fadeIn/) and [fadeOut](http://api.jquery.com/fadeOut/), but appending Safe. That is:

* $(selectorOrGroup).fadeInSafe(speed, easing, callback);
* $(selectorOrGroup).fadeOutSafe(speed, easing, callback);

All three arguments are optional, and the first two will be skipped over in IE. Instead, a simple .show() or .hide() will run, then the callback will be executed.
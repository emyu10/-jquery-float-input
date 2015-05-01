/**
 * @author Mohamed Usman
 * @description jQuery Plugin to limit input box to floating point values only
 * @email emyu10@gmail.com
 */
 
(function($){
	'use strict';
	$.fn.floatinput = function(){
		var old = $.fn.floatinput;
		this.keypress(function(event){
			if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
				event.preventDefault();
			}
		});
		return this;
		
		$.fn.floatinput.noConflict = function () {
			$.fn.floatinput = old
			return this
		}
	}
})(jQuery);
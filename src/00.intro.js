

(function(undefined){
	"use strict";
	var _;
	
	function extend(sub, sup) {
  	var _ = sub.prototype = Object.create(sup.prototype);
  	_.constructor = sub;
  	return _;
	}
/**
*
* Returns undefined if any of the intermediate
* subobjects or the intended target are not present.
*
**/


'use strict';
module.exports = function () {
	
	var len = arguments.length;

    var cur = arguments[0];
    for (var i = 1; (cur && (i < len)); ++i)
        cur = cur[arguments[i]];

    return cur;
};
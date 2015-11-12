'use strict';
var assert = require('assert');
var resolve = require('./index.js');

(function test(){
	//
	// Category 1 : When property value is a number
	//

	// Test Case 1
	var o = { qwe : { asd : { zxc : 123 } } };
	assert.strictEqual(resolve(o, 'qwe', 'asd', 'zxc'), 123);

	// Test Case 2
	var obj = { qwe : { asd : { zxc : 123 }, 'rty' : 47 } };
	assert.strictEqual(resolve(obj, 'qwe', 'rty'), 47);
	
	//
	// Category 2 : When property value is a string
	//
	
	// Test Case 1
	var obj2 = { qwe : { asd : { zxc : 'hello' } } };
	assert.strictEqual(resolve(obj2, 'qwe', 'asd', 'zxc'), 'hello');

	// Test Case 2
	var obj3 = { qwe : { asd : { zxc : 123 }, 'rty' : 'world' } };
	assert.strictEqual(resolve(obj3, 'qwe', 'rty'), 'world');

	//
	// Category 3 : When specified property is not present
	//
	
	// Test Case 1
	var obj4 = { qwe : { asd : { zxc : 'hello' } } };
	assert.strictEqual(typeof resolve(obj4, 'qwe', 'qwe'), 'undefined');

	// Test Case 2
	var obj5 = { qwe : { asd : { zxc : 123 }, 'rty' : 'world' } };
	assert.strictEqual(typeof resolve(obj5, 'qwe', 'rtym'), 'undefined');


	//
	// Category 4 : When specified property is a method
	//
	
	// Test Case 1
	var obj6 = { qwe : { asd : { zxc : 'hello', method1 : function() { console.log('Hello World');} } } };
	assert.strictEqual(typeof resolve(obj6, 'qwe', 'asd', 'method1'), 'function');

	// Test Case 2
	var obj7 = { qwe : { asd : { zxc : 123 }, method1 : function() {console.log('Hello Again');} } };
	assert.strictEqual(typeof resolve(obj7, 'qwe', 'method1'), 'function');

})();
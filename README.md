# resolve-property
Safely reach into a nested object and retrieve a property, which could be an object, method, string, number or boolean value.
Returns undefined if any of the intermediate subobjects or the intended target are not present.


### Installation

'npm install resolve-property'

### Server-side usage

```javascript
var resolve = require('resolve-property');

var o = { qwe : { asd : { zxc : 123 } } };
resolve(o, 'qwe', 'asd', 'zxc');
// returns 123
```

### Clone the repo

git clone [Repository](https://github.com/luthraG/resolve-property.git)

### Examples

```javascript

//
// Category 1 : When property value is a number
//

var o = { qwe : { asd : { zxc : 123 } } };
resolve(o, 'qwe', 'asd', 'zxc'); // returns 123

var obj = { qwe : { asd : { zxc : 123 }, 'rty' : 47 } };
resolve(obj, 'qwe', 'rty'); // returns 47

//
// Category 2 : When property value is a string
//

var obj2 = { qwe : { asd : { zxc : 'hello' } } };
resolve(obj2, 'qwe', 'asd', 'zxc'); // returns 'hello'

var obj3 = { qwe : { asd : { zxc : 123 }, 'rty' : 'world' } };
resolve(obj3, 'qwe', 'rty'); // returns 'world'

//
// Category 3 : When specified property is not present
//

var obj4 = { qwe : { asd : { zxc : 'hello' } } };
resolve(obj4, 'qwe', 'qwe'); // returns undefined

var obj5 = { qwe : { asd : { zxc : 123 }, 'rty' : 'world' } };
resolve(obj5, 'qwe', 'rtym'); // returns undefined


//
// Category 4 : When specified property is a method
//

var obj6 = { qwe : { asd : { zxc : 'hello', method1 : function() { console.log('Hello World');} } } };
resolve(obj6, 'qwe', 'asd', 'method1'); // returns function method1

var obj7 = { qwe : { asd : { zxc : 123 }, method1 : function() {console.log('Hello Again');} } };
resolve(obj7, 'qwe', 'method1'); // returns function method1

```


### License(MIT)

Copyright (c) 2015 [Gaurav Luthra](luthra.zenith@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{171:function(n,e,t){"use strict";t.r(e);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"let-const"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-const","aria-hidden":"true"}},[n._v("#")]),n._v(" Let&const")]),n._v(" "),t("pre",[t("code",[n._v("1、块级作用域，外部不能访问内部（for，if，switch等语句）\n2、for语句循环变量为一层父作用域，括号内为一层子作用域；（互不影响）\n3、暂时性死区：不管在全局还是块级局部，一旦出现let，const定义的变量，此时就会锁定此作用域，报错：\n（1）在声明之前使用和赋值\n（2）重复声明（var）\n4、在块级作用域中声明函数：\n    (1)类似于var 定义一个变量\n（2）声明提升到当前局部作用域头部\n（3）声明提升到块级作用域头部\n5、 函数的定义尽量用表达式：\n    直接函数声明：相当于先在当前局部作用域顶部var 一个变量，再在块级中给赋值；还是会造成变量提升\n6、常量const\n（1）常量不允许变更（监听的是内存地址，引用类型可以改变内部值）\n（2）常量一旦定义必须赋值\n（3）暂时性死区\n（4）不允许重复声明，不管用任何方式\n（5）常量绑定的是内存地址，如果地址更变，就会报错，\n（6）基本类型的每一个都对应唯一的一个内存地址\n    (7)对于引用类型绑定的也是一个内存地址，但是数据内部的更变不影响地址，所以不会报错\n\n7、es5中全局作用域和顶层作用域没有分开；\nes6中的let和const将全局作用域和顶层作用域分开了\n")])]),n._v(" "),t("h3",{attrs:{id:"变量的解构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量的解构","aria-hidden":"true"}},[n._v("#")]),n._v(" 变量的解构")]),n._v(" "),t("pre",[t("code",[n._v("数组\n1、等号两边的模式相同，也就是说对象的结构一样，（具有length属性的数据类型都可以解构）\n2、如果等号左边出现...，那么从...之前的一个变量往后所有的值都会放入一个数组\n3、解构不成功全部为undefined\n4、数组解构时，等号右边必须为数组，任何类型的数据都会报错，（除字符串，arguments）\n5、数组结构的默认值：只有数组成员严格等于undifined时默认值才会生效，否则不生效，   null===undifined不成立\n6、 默认值如果为函数，进行惰性求值，只有undifined进行使用默认值时，才会调用函数\n对象\n1、对象的解构其实是模式的查找然后给对应的变量赋值，变量随便写，与模式无关，且跟   \n属性的顺序无关\n2、变量的声明和赋值是一体的。必须同时进行\n3、如果变量先定义，后赋值，在模式正确的情况下，用小括号进行包裹，此时赋值成功；\n如果模式有歧义，es6不建议用小括号\n4、对象的嵌套解构,什么为模式，什么为赋值，对象从外层向内逐层解构\n5、对象解构的默认值：只有对象的属性值严格等于undifined时默认值才会生效，否则不生   效，null===undifined不成立；\n6、默认值的惰性求值；\n其他\n（1）数组解构为对象（特殊的对象），解构时，解析的模式为数组的下标；\n（2）字符串解构为数组：首先把字符串转换为类数组的形式进行解构；\n（3）数值和布尔值的解构，右边先转换为对象，然后对对象进行解构；都为undefined\n（4）参数的解构，如果给等号左边的变量赋默认值，如果右边对象没有值，就是用默认值；如果默认值以对象的方式赋予，那么参数只有为空时才使用默认值\n(5) null和undefined解构为对象时，都报错\n")])]),n._v(" "),t("h3",{attrs:{id:"字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串","aria-hidden":"true"}},[n._v("#")]),n._v(" 字符串")]),n._v(" "),t("pre",[t("code",[n._v("1、Number.isFinite()用来检查一个数值是否为有限的（finite）,true:有限且为数值；其他任何类型都为false\n有限：在一个数值范围之内，也就是说有上限值和下线值，例如：π（3-4），1/3（0-1）\n无限：正无穷和负无穷\n2、Number.isNaN()用来检查一个值是否为NaN。\n只要不为NaN都为false\n3、Number.parseInt('12.34') // 12\nNumber.parseFloat('123.45#') // 123.45\n5、Math.trunc(）\n与parseInt（）区别：\n（一）、如果无穷大，parseInt为NaN,trunc为Inifity；\n(二）、如果字符串中前为数字后为非数字， parseInt取整成功，trunc为NaN（因为转换数值失败，为NaN）\n（三）、如果为布尔值、null、NaN、\"\"，parseInt为NaN,\ntrunc对于NaN的转换都为undefined,对于null，“”都为0，布尔相应数值的转换\n（四）、如果为undifined，都为NaN\n    (五)、如果非数字，内部先将其转换为数值\n6、Number.isInteger()用来判断一个值是否为整数\ntrue:数值、整数，可以是3.0\n\n7、Math.sign()判断一个数到底是正数、负数、还是零；（先进行数值的转换）\n    参数为正数，返回+1；\n参数为负数，返回-1；\n参数为0，返回0；\n参数为-0，返回-0;\n其他值，返回NaN。\n")])]),n._v(" "),t("h3",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[n._v("#")]),n._v(" 数组")]),n._v(" "),t("pre",[t("code",[n._v("Array.from（）\n1、Array.from方法用于将两类对象转为真正的数组：\n（1）类似数组的对象（dom集合和参数arguments）\n(2)可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）\n(3) 第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。\n(4) 第一个参数的length值限定了第二个参数的运行的次数；\n(5) 特殊类型值得转换：NaN、false、null、“”、undefined、全部转换为false；true为本身\n2、…扩展运算符也可以将某些数据转换为数组；\n(1) 某些类数组的对象，只有arguments可以转换成功；\n(2) 可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）\n3、如果Array.from内部使用…扩展运算符，那么…将不起作用\nArray.of（）\n1、 Array方法只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。\n2、 Array.of方法用于将一组值，转换为数组，总是返回参数值组成的数组\nfind()和findIndex() \n1、 find用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。\n2、 回掉函数参数：当前的值、当前的位置和原数组。（三个）\n3、 findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。\n4、 indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。\nentries()，keys()\n都是具有Iterator接口，都可以使用for of进行遍历，keys()是对键名的遍历、v，entries()是对键值对的遍历\n\nIncludes（）\n方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。\n\n[NaN].indexOf(NaN)  //-1\n[NaN].includes(NaN) //true\n\n如果第二参数为负数，则倒数位置：\nFill、copyWithin、Includes\n\n\n数组的空位\n数组的空位指，数组的某一个位置没有任何值。\n空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值\nEs5：\nforEach(), filter(), every() 和some()都会跳过空位。\nmap()会跳过空位，但会保留这个值\njoin()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。\nEs6：\nArray.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。\n扩展运算符（...）也会将空位转为undefined。\ncopyWithin()会连空位一起拷贝。\n数组arr有两个空位，for...of并没有忽略它们。如果改成map方法遍历，空位是会跳过的。\nentries()、keys()、values()、find()和findIndex()会将空位处理成undefined。\n")])]),n._v(" "),t("h3",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[n._v("#")]),n._v(" 函数")]),n._v(" "),t("pre",[t("code",[n._v("1、函数参数默认值：\n（1）参数设置默认值，即直接写在形参的后面；（只有实参为undifined时才只用默认值）\n（2）参数变量是默认声明的，所以不能用let或const再次声明。\n（3）函数不能有同名参数。\n（4）参数默认值是惰性求值的。\n参数默认值与解构赋值默认值结合使用：\n条件：形参和实参均为对象的形式，即结构模式需相同；否则会报错(遵循对象的解构)\n1、如果实参中有需要解构的变量，则优先读取实参，其次读取参数默认值；\n2、如果实参中无形参中需要解构的模式，且形参中无默认值，则undefined；\n3、使用默认的情况，只有实参中为undefined；其他类型数据全部可以赋值\n参数默认值的位置：\n非尾部的参数设置默认值，实际上这个参数是没法省略的。\n\n作用域：\n    1、一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域 ，各个参数相当于在此作用中重新声明；\n    2、参数的默认值是一个函数，该函数的作用域也遵守这个规则；\n    \n\n    5、如果参数默认值为一个函数，此函数的作用域在定义时形成，不是在调用时形成；调用时使用的作用域是在定义时形成的；\n\n应用：使用参数默认值的方法调用，指定某参数不可省略\n1、 rest参数：\n1、跟数组的扩展运算符的使用类似（…”变量名”），将多个参数变成一个数组；\n2、rest参数可以代替arguments参数；\n3、rest参数之后不可再跟其他参数；\n4、函数的length属性，不包括 rest 参数。\n5、比如push方法中使用rest参数，可以一次添加一个数组；\n3、扩展运算符\n1、扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。将一个数组变成多个参数；\n2、非常实用的就是代替了es5中的apply方法\n3、push、concat被取代；\n4、解构数组是必须放在最后，否则报错；\n5、将字符串解构成真正的数组；\n6、Iterator接口的对象，都可以用扩展运算符转为真正的数组，例：set、map、generator函数；\n4、严格模式：\n1、ES5 开始，函数内部可以设定为严格模式。ES2016，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。\n2、两种方法可以规避这种限制。\n第一种是设定全局性的严格模式，这是合法的。\n第二种是把函数包在一个无参数的立即执行函数里面。\n5、 name属性：\n1、匿名函数赋值给变量：es5返回””，es6返回变量名；\n2、一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。\n3、Function构造函数返回的函数实例，name属性的值为anonymous。\n4、bind返回的函数，name属性值会加上bound前缀。\n6、箭头函数：\n1、如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部\n分。\n2、如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起\n来，并且使用return语句返回。\n3、由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。或者加大括号和return\n4、箭头函数可以与变量解构结合使用，将多个参数变成数组；\n5、简化回调函数。\n6、函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。\n注：箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。\n    绑定this:使用:: 双冒号左边是一个对象，右边是一个函数\n7、不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。\n8、不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。\n9、不可以使用yield命令，因此箭头函数不能用作 Generator 函数。\n7、尾调用：\n1、某个函数的最后一步是调用另一个函数\n2、只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。\n8、尾递归；\n")])]),n._v(" "),t("h3",{attrs:{id:"对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象","aria-hidden":"true"}},[n._v("#")]),n._v(" 对象")]),n._v(" "),t("pre",[t("code",[n._v("1、简洁表达式书写：\n(1) 直接写入变量和函数，作为对象的属性和方法。\n(2) 直接写入参数，作为对象的属性和方法\n(3) 赋值器（setter）和取值器（getter）\n(4) 某个方法的值是一个Generator函数，前面需要加上星号\n2、属性名表达式：\n(1) 标识符作为属性名；表达式作为属性名\n(2) 字面量定义对象时，表达式作为对象的属性名\n(3) 表达式还可以用于定义方法名\n(4)属性名表达式与简洁表示法，不能同时使用，会报错\n(5) 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]\n注：如果属性未赋值，用.方式定义不报错，用字面量的方式定义，报错\n3、name属性：\n(1)对象方法的name属性返回函数名\n(2) 方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。\n    (3) bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous。\n(4) Symbol 值，那么name属性返回的是这个 Symbol 值的描述（相当于格式化的内容）。\n4、Object.is()\n比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。\n+0不等于-0，NaN等于自身。\n5、 Object.assign()\n（1） 对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。\n（2） 第一个参数是目标对象，后面的参数都是源对象\n\n（3） 目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。\n\n（4） 目标对象：\n\nNull和undefined作为目标对象，会报错，因为转换对象失败；\n数值和布尔值作为目标对象，不会报错，会将此转换为对象；但是无意义，不对数值、字符串和布尔值进行任何该更；\n(5)  源对象：\n字符串：先将字符串转换为伪数组，然后将键名为数组下标，进行合并；\n其他非对象的数据类型，都不会进行合并；\n(7) 属性名为Symbol值的属性，也会被Object.assign拷贝（待议）\n(8) Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性\n(9) Object.assign实现的是浅拷贝（属性值）；\n(11)处理数组是将数组变换为对象，再进行合并；\n(12)应用场景：\n对象添加属性、对象添加方法、克隆对象（不能复制继承的属性）、合并多个对象、为属性指定默认值（DEFAULTS对象和options对象的所有属性的值，不要指向另一个对象）\n6、 属性的可枚举性\nObject.getOwnPropertyDescriptor方法可以获取该属性的描述对象\n描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。\n忽略enumerable为false的属性的操作：\n· Object.keys()：返回对象自身的所有可枚举的属性的键名\n· JSON.stringify()：只串行化对象自身的可枚举的属性\nObject.assign()\n注：ES6规定，所有Class的原型的方法都是不可枚举的\n7、 属性的遍历器\n（1）for...in\nfor...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。\n（2）Object.keys(obj)\nObject.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）。\n（3）Object.getOwnPropertyNames(obj)\nObject.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性，不包含原型）。\n（4）Object.getOwnPropertySymbols(obj)\nObject.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性。\n（5）Reflect.ownKeys(obj)\nReflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举。\n以上的5种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。\n· 首先遍历所有属性名为数值的属性，按照数字排序。\n· 其次遍历所有属性名为字符串的属性，按照生成时间排序。\n· 最后遍历所有属性名为 Symbol 值的属性，按照生成时间排序。\n8、 对象的原型：\n(1) __proto__和prototype：\nPrototype是构造函数特有的属性，通过此属性来定义函数的继承和原型；\n__proto__是对象以及实例化对象的原型属性，通过此属性可以给对象以及实例化对象赋予或者读取原型链；\n(2) Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替\n(3) Object.setPrototypeOf()，第一个参数undefined和null无法转为对象报错；除undefined和null以外的非对象作为第一个参数不会产生任何效果；\n(4) Object.getPrototypeOf()第一个参数的使用跟Object.setPrototypeOf()一样\n9、（1）Object.keys方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名\n    (2) Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值\n(3) Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。\n注：将对象转为真正的Map结构，返回对象的属性和属性值的规则跟Object.values相似；\n注：三个方法都遵循一下规则：\n过滤属性名为 Symbol 值的属性，不包含Symbol的属性值；\n字符串会先转成一个类似数组的对象；\n数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组\n\n10、 对象的扩展运算符：\n（1） 解构赋值：\n解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象。\n…解构赋值必须是最后一个参数，否则会报错。\n解构赋值的拷贝是浅拷贝，如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本\n解构赋值不会拷贝继承自原型对象的属性\n（2） 扩展运算符\n（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中，同于使用Object.assign方法；\n用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉；\n自定义属性放在扩展运算符前面，就变成了设置新对象的默认属性值；\n扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。\n扩展运算符的参数是null或undefined，这两个值会被忽略，不会报错。\n11、 Object.getOwnPropertyDescriptor\n返回指定对象所有自身属性（非继承属性）的描述对象。\nObject.assign()无法正确拷贝get属性和set属性的问题。\nObject.getOwnPropertyDescriptors方法配合Object.defineProperties方法，就可以实现正确拷贝。\n")])]),n._v(" "),t("h3",{attrs:{id:"symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol","aria-hidden":"true"}},[n._v("#")]),n._v(" Symbol")]),n._v(" "),t("pre",[t("code",[n._v("1、概述：\n（1）一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。\n（2）Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。\n（3）接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分\n（4）Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。\n（5）Symbol 值不能与其他类型的值进行运算，会报错。\n(6) Symbol 值可以显式转为字符串\n(7) Symbol 值也可以转为布尔值，全部为true\n2、作为属性名的Symbol\n写法：（1）[]、（2）{[]}、（3）defineProperty\n注：不允许用点操作符；\n3、消除魔术字符串；（解决强耦合）\n4、属性名遍历\nObject.getOwnPropertySymbols方法\nReflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。\n6、 Symbol.for、Symbol.keyFor\nSymbol.for接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。会被登记在全局环境中供搜索\n如果想用Symbol这种数据类型定义变量名，在后期可以对此属性进行操作时，用Symbol.for这种方式去定义symbol类型的值，可以达到效果；如果用symbol去定义，则需要在全局将定义时的symbol值保存到一个变量，供后期使用；\nSymbol.keyFor方法返回一个已登记的 Symbol 类型值的key。\n7、 内置Symbol值：\n（1）对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法\n（2）对象的Symbol.isConcatSpreadable属性等于一个布尔值和undefined，表示该对象使用Array.prototype.concat()时，是否可以展开；默认为undefined，此时是展开的；\n（3）对象的Symbol.species属性，指向当前对象的构造函数。创造实例时，默认会调用这个方法，即使用这个属性返回的函数当作构造函数，来创造新的实例对象。（待议）\n(4) 对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值\n(5) 对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。\n(6) 对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。\n(7) 对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。\n(8) 对象的Symbol.iterator属性，指向该对象的默认遍历器方法。(待议)\n")])]),n._v(" "),t("h3",{attrs:{id:"set和map数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set和map数据结构","aria-hidden":"true"}},[n._v("#")]),n._v(" Set和Map数据结构")]),n._v(" "),t("pre",[t("code",[n._v("1、set\n基本用法：\n（1）类似于数组，但是成员的值都是唯一的，没有重复的值。\n(2) Set 结构不会添加重复的值\n(3) 可以接受一个数组（或类似数组的对象（arguments））作为参数，用来初始化，其他类型报错\n(4)扩展运算符…可以将其变成一个数组；\n(5) 向Set加入值的时候，不会发生类型转换; 内部判断两个值是否不同,类似于精确相等运算符（===），主要的区别是NaN等于自身\n(6) 两个对象总是不相等的；内存地址不一样；\n(7) Array.from方法可以将 Set 结构转为数组。\nSet实例的属性和方法：\n(1) 四个操作方法：\n· add(value)：添加某个值，返回Set结构本身。\n· delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。\n· has(value)：返回一个布尔值，表示该值是否为Set的成员。\n· clear()：清除所有成员，没有返回值。\n(2) 遍历方法：\n· keys()：返回键名的遍历器（无键名，此方法和values（）类似）\n· values()：返回键值的遍历器\n· entries()：返回键值对的遍历器\n· forEach()：使用回调函数遍历每个成员，处理函数参数依次为键值、键名、集合本身；第二个参数，表示绑定的this对象。\n· 注：Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用Set保存一个回调函数列表，调用时就能保证按照添加顺序调用\n· 扩展运算符和 Set 结构相结合，数组的map和filter方法也可以用于 Set 了很容易地实现并集（Union）、交集（Intersect）和差集；\n· 同步改变原来的 Set 结构，一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用Array.from方法\n2、 WeakSet\n用法：\n(1)、WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。首先，WeakSet 的成员只能是对象，而不能是其他类型的值。\n例：接受的数组中的每个元素都必须为对象，否则会报错；\n(2) WeakSet 结构有以下三个方法：\n· WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。\n· WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。\n· WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。\n（3）WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。\n3、Map\n含义：类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应\n用法：\n(1) 任何具有 Iterator 接口的数据结构都可以作为参数；\n(2) 对同一个键多次赋值，后面的值将覆盖前面的值。\n(3) 读取一个未知的键，则返回undefined。\n(4) 设置和读取一个键，必须是同一个内存地址，才可以读取成功；ap 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键\n(5) 果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，包括0和-0，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。\n(6) 接受参数必须为数组，set、map、以及具有Iterator接口的任何数据；\n属性：size返回map的总成员；\n方法：\n(1) set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。\n(2) get方法读取key对应的键值，如果找不到key，返回undefined。\n(3) has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。\n(4) delete方法删除某个键，返回true。如果删除失败，返回false。\n(5) clear方法清除所有成员，没有返回值。\n(6) 默认遍历器接口（Symbol.iterator属性），就是entries方法。\n(7) 转为数组结构，比较快速的方法是使用扩展运算符（...）结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。\n遍历方法：（原生的）\n· keys()：返回键名的遍历器。\n· values()：返回键值的遍历器。\n· entries()：返回所有成员的遍历器。\n· forEach()：遍历 Map 的所有成员。与数组的forEach类似，第二个参数用来绑定this；\n与其他数据结构的相互转换：\n（1） Map 转为数组：使用扩展运算符（...）、Array.from()\n（2） 数组 转为 Map\n（3） 如果所有 Map 的键都是字符串，它可以转为对象。自定义方法进行转换，借助for of\n（4） 对象转为 Map 借助for of\n（5） Map 转为 JSON\n（6） JSON 转为 Map\n3、 WeakMap\n（1）WeakMap结构与Map结构类似，也是用于生成键值对的集合\n（2）WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名；\n（3）WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。\n(4)WeakMap如果键名的引用更变，则键值的内存会被回收；\n(5)如果键名的引用改变，键名之前的引用销毁，同时对键值的引用也销毁；\n(6) weakMap只有四个方法可用：get()、set()、has()、delete()。\n")])]),n._v(" "),t("h3",{attrs:{id:"iterator和for-of循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterator和for-of循环","aria-hidden":"true"}},[n._v("#")]),n._v(" Iterator和for...of循环")]),n._v(" "),t("pre",[t("code",[n._v("1、概念：\n（1）为不同的集合性质的数据结构提供一种对外可以访问的，统一的接口；\n(2) 使得数据结构的成员能够按某种次序排列；\n(3) Iterator接口主要供for...of消费\n注：凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。\n遍历器Iterator接口和数据结构没有任何关系，都是独立存在的；\n调用遍历器接口Iterable、返回一个指针对象（遍历器对象）（Iterator），此对象内有一个next方法；\n2、数据结构的默认Iterator接口\n（1）Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环；\n(2) 一种数据结构只要部署了Iterator接口，我们就称这种数据结构是”可遍历的“（iterable）；默认的Iterator接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为Symbol的特殊值，所以要放在方括号内。\n(3)、三类数据结构原生具备Iterator接口：数组、某些类似数组的对象（具有Symbol.iterator属性的）、Set和Map结构。\n(4) 一个对象如果要有可被for...of循环调用的Iterator接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）\n(5) 如果Symbol.iterator方法对应的不是遍历器生成函数（即会返回一个遍历器对象），解释引擎将会报错。\n3、使用Iterator接口的场合\n（1）解构赋值；对数组和Set结构进行解构赋值时，会默认调用Symbol.iterator方法。\n    (2) 扩展运算符；\n    (3) yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口\n    (4) 任何接受数组作为参数的场合，其实都调用了遍历器接口。\n4、字符串的Iterator接口：也原生具有Iterator接口\n5、Iterator接口与Generator函数：Genertator函数相当于Iterator接口，调用此函数，返回一个由yield构成的遍历器对象；\n6、遍历器对象的return（）、throw（）\n7、只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员\n8、数组：原生具备iterator接口\n注：原有的for...in循环，只能获得对象的键名，不能直接获取键值。ES6提供for...of循环，允许遍历获得键值。\nfor...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟for...in循环也不一样。     \n8、 Set 和 Map 结构也原生具有 Iterator 接口：\nSet 结构遍历时，返回的是一个值，而 Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值。\n10、计算成数据结构：\n· entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值；对于 Set，键名与键值相同。Map 结构的 Iterator 接口，默认就是调用entries方法。\n· keys() 返回一个遍历器对象，用来遍历所有的键名。\n· values() 返回一个遍历器对象，用来遍历所有的键值。\n12、 类似数组的对象：\n并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。\n13、 对象：\n对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，for...in循环依然可以用来遍历键名。\n于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，for...in循环依然可以用来遍历键名；\nbreak命令或return命令，只能在循环语句使用，而不能在循环语句的回调方法中使用；\nfor…of都可以和break、continue、return进行配合使用\n")])]),n._v(" "),t("h3",{attrs:{id:"generator-函数的语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generator-函数的语法","aria-hidden":"true"}},[n._v("#")]),n._v(" Generator 函数的语法")]),n._v(" "),t("pre",[t("code",[n._v("1、简介：\nGenerator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。\nGenerator 函数是一个状态机，封装了多个内部状态。\n执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。\n调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。\n\n\n2、Yield表达式：\n（1）yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。\n（2）每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。\n(3) 普通函数中使用yield表达式，结果产生一个句法错误。\n(4) yield表达式如果用在另一个表达式之中，必须放在圆括号里面。\n(5) yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。\n3、与Iterator接口的关系：\n(1) 把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。\n4、next方法的参数：\n(1) yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。\n（2）由于next方法的参数表示上一个yield表达式的返回值，所以第一次使用next方法时，不能带有参数。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的\n5、for。。。of：\n(1) for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。\n6、Generator.prototype.throw()\n(1) Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。\n(2) throw方法可以接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。\n(3) throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法。\n(4) 只要 Generator 函数内部部署了try...catch代码块，那么遍历器的throw方法抛出的错误，不影响下一次遍历，否则，就会终止此遍历；\n(5) Generator 函数体外抛出的错误，可以在函数体内捕获；反过来，Generator 函数体内抛出的错误，也可以被函数体外的catch捕获。\n(6)函数内部抛出的错误，在外部捕获时，手动调用，此错误以后的所有状态都不在执行；终止遍历器，而外部抛出的错误，在内部捕获时，不会终止遍历器；\n7、Generator.prototype.return()\n（1） 可以返回给定的值，并且终结遍历Generator函数。return方法调用时，不提供参数，则返回值的value属性为undefined；\n（2）如果 Generator 函数内部有try...finally代码块，而且手动调用进入try…finally语句之后，那么return方法会推迟到finally代码块执行完再执行。\n8、yield表达式：\n(1) 用来在一个 Generator 函数里面执行另一个 Generator 函数。\n(2) 如果yield表达式后面跟的是一个遍历器对象，需要在yield表达式后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*表达式。\n(4) 任何数据结构只要有 Iterator 接口，就可以被yield*遍历。\n(5) 如果被代理的 Generator 函数有return语句，那么就可以向代理它的 Generator 函数返回数据。\n9、作为对象的Generator函数：（注：简写方式）\n10、Generator函数的this：\n(1) Generator 函数总是返回一个遍历器，而不是this对象，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。\n(2) Generator函数也不能跟new命令一起用，会报错。\n(3)  Generator 函数返回一个正常的对象实例，既可以用next方法，又可以获得正常的this，（在Generator原型链上进行操作）\n11、generator与状态机；\n12、generator与协程：\n协程与普通多线程区别：协程是多个任务同时存在，但是只有一个任务正在运行，执行权由自己进行分配，多线程简单点理解就是，多个任务同时存在，并同时执行，资源分陪由运行环境所决定；\n13、异步操作的同步化表达：\n(1)  Generator 函数部署 Ajax 操作，可以用同步的方式表达。\n(2)控制流管理:\n\nGenerator的异步应用\n1、next返回值的value属性，是 Generator 函数向外输出数据；next方法还可以接受参数，向 Generator 函数体内输入数据。\n2、thunk函数：\n(1)传值运算、传名运算\n(2) Thunk 函数的定义，它是“传名调用”的一种实现策略，用来替换某个表达式。\n")])]),n._v(" "),t("h3",{attrs:{id:"async函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async函数","aria-hidden":"true"}},[n._v("#")]),n._v(" Async函数")]),n._v(" "),t("pre",[t("code",[n._v("1、含义：\n    (1) Generator 函数的语法糖\n2、相比Generator函数：\n(1)内置执行器：\n(2) 更好的语义\n(3) 更广的适用性。\nco模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。\n(4) 返回值是 Promise\n    async函数完全可以看作多个异步操作集合，包装成的一个 Promise 对\n象，而await命令就是内部then命令的语法糖\n3、用法：\n(1) async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。\n(2)使用形式：\n    函数声明、函数表达式、对象的方法、Class的方法、箭头函数\n（3）async函数返回一个 Promise 对象。\n\n(4) async函数内部return语句返回的值，会成为then方法回调函数的参数。\n(5) async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。\n(6) async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误\n3、await命令：\n（1）、正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象；\n    (2) await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。\n    (3) 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。\n    (4) 错误处理机制：\n        一：promise.reject()\n第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。\n另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。\n        二：异步操作:\n            如果有多个await命令，可以统一放在try...catch结构中。\n4、使用注意：\n（1）把await命令放在try...catch代码块中。\n    (2) 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。\n    (3) await命令只能用在async函数之中，如果用在普通函数，就会报错\n5、与其他异步处理方法的比较：\nPromise、Generator\n6、异步遍历器：\n(1) 最大的语法特点，就是调用遍历器的next方法，返回的是一个 Promise 对象。\n(2)对象的异步遍历器接口，部署在Symbol.asyncIterator属性上面。不管是什么样的对象，只要它的Symbol.asyncIterator属性有值，就表示应该对它进行异步遍历。\n(3) for await...of循环，则是用于遍历异步的 Iterator 接口。可以直接对部署了Symbol.asyncIterator属性的解构进行遍历；\n7、异步Generator函数\n(1) 就像 Generator 函数返回一个同步遍历器对象一样，异步 Generator 函数的作用，是返回一个异步遍历器对象。就是Generator 函数就是async函数与 Generator 函数的结合。\n（2）for await...of遍历异步Generator函数；\n(3)封装异步Genetator的自动执行器；\n(4)yield*语句可以跟一个异步遍历器\n")])]),n._v(" "),t("h3",{attrs:{id:"class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class","aria-hidden":"true"}},[n._v("#")]),n._v(" Class")]),n._v(" "),t("pre",[t("code",[n._v("1、简介：\n（1）定义“类”的方法的时候，不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。\n(2) 类的数据类型就是函数，类本身就指向构造函数。\n（3）类的所有方法都定义在类的prototype属性上面。\n(4) Object.assign方法可以很方便地一次向类添加多个方法。\n(5) 类的内部所有定义的方法，都是不可枚举的\n(6) 类的属性名，可以采用表达式。\n2、类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式\n3、constructor方法\n(1)、constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。\n(2) constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象\n(3) 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。\n4、类的实例对象\n(1) 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。\n(2) 类的所有实例共享一个原型对象，可以通过实例的__proto__属性为“类”添加方法，生产环境中，推荐使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。\n（3）实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。\n5、class表达式：\n(1) 类也可以使用表达式的形式定义。 \n6、不存在变量提升：(class定义变量时)\n7、私有方法：\n（1）私有方法移出模块，也就是说将方法放到类意外，因为模块内部的所有方法都是对外可见的。\n(2) 利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。\n8、私有属性：\n(1) 在属性名之前，使用#表示。\n(2) 私有属性与实例的属性是可以同名的\n9、this指向：\n(1) 类的方法内部如果含有this，它默认指向类的实例；一旦单独使用该方法，很可能报错。\n(2)类原型方法调用原型上的另外方法时，单独调用此方法，无法获取this，解决方案：一：构造方法中绑定this；二：箭头函数\n10、name属性：name属性总是返回紧跟在class关键字后面的类名\n11、Class 的取值函数（getter）和存值函数（setter）\n(1) 内部可以使用get和set关键字\n（2）存值函数和取值函数是设置在属性的 Descriptor 对象上的。\n12、class的Generator方法：\n    如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。\n13、class的静态方法：\n    (1)如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。\n    (2) 父类的静态方法，可以被子类继承。\n    (3) 静态方法也是可以从super对象上调用的。\n14、class的静态属性和实例属性\n(1) 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。\n(2) Class 内部只有静态方法，没有静态属性。\n(3)提案，新的写法\n15、new.target属性：\n    (1) 该属性一般用在在构造函数之中，返回new命令作用于的那个构造函数。如果（es5）构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。\n    (2) 子类继承父类时，new.target会返回子类。\n    (3) 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。\n")])]),n._v(" "),t("h3",{attrs:{id:"class类的继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class类的继承","aria-hidden":"true"}},[n._v("#")]),n._v(" Class类的继承")]),n._v(" "),t("pre",[t("code",[n._v("1、简介：\n(1) Class 可以通过extends关键字实现继承；\n(2) 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。\n(3) 先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。\n(4) 子类的构造函数中，只有调用super之后，才可以使用this关键字\n2、Object.getPrototypeOf方法可以用来从子类上获取父类。\n3、super\n（1）作为函数调用时，代表父类的构造函数，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)\n（2）super()只能用在子类的构造函数之中，用在其他地方就会报错\n(3) 由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。\n(4) 通过super调用父类的方法时，super会绑定子类的this。如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。\n(5) 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。在普通方法之中指向父类的原型对象。\n4、类的prototype属性和__proto__属性:\n（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。\n（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。\n（3）extends的继承目标：\n（只要是一个有prototype属性的函数，就能被B继承。）\n第一种特殊情况，子类继承Object类。\n第二种特殊情况，不存在任何继承。\n第三种特殊情况，子类继承null。\n(4)实例的__proto__属性：\n    子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。\n4、 原生构造函数的继承：\n· Boolean()\n· Number()\n· String()\n· Array()\n· Date()\n· Function()\n· RegExp()\n· Error()\n· Object()\n\n\n\n数中，只有调用super之后，才可以使用this关键字\n2、Object.getPrototypeOf方法可以用来从子类上获取父类。\n3、super\n（1）作为函数调用时，代表父类的构造函数，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)\n（2）super()只能用在子类的构造函数之中，用在其他地方就会报错\n(3) 由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。\n(4) 通过super调用父类的方法时，super会绑定子类的this。如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。\n(5) 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。在普通方法之中指向父类的原型对象。\n4、类的prototype属性和__proto__属性:\n（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。\n（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。\n（3）extends的继承目标：\n（只要是一个有prototype属性的函数，就能被B继承。）\n第一种特殊情况，子类继承Object类。\n第二种特殊情况，不存在任何继承。\n第三种特殊情况，子类继承null。\n(4)实例的__proto__属性：\n    子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。\n4、 原生构造函数的继承：\n· Boolean()\n· Number()\n· String()\n· Array()\n· Date()\n· Function()\n· RegExp()\n· Error()\n· Object()")])])])}],!1,null,null,null);e.default=a.exports}}]);
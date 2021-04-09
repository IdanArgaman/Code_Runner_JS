/* eslint-disable */

const CodeTypesEnum = {
    ARRAYS: "Arrays",
    ARROWS: "Arrows",
    THIS: "This",
    OBJECTS: "Objects",
    FUNDAMENTALS: "Fundamentals",
    INTERNAL: "Internals",
    HOISTING: "Hoisting",
    IIFE: "IIFE",
    NEW_FEATURES: "New Features",
    TRICKS: "Tricks"
}

export default [{
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            // Emptying an array
            var arrayList = ["a", "b", "c", "d", "e", "f"];
            arrayList = [];
            arrayList.length = 0;
            arrayList.splice(0, arrayList.length);

            while (arrayList.length) {
                arrayList.pop();
            }
        }
    },
    {
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            // Checking for array using old JS
            var arrayList = ["a", "b", "c", "d", "e", "f"];
            console.log(Object.prototype.toString.call(arrayList) === "[object Array]");
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "",
        "description": "",
        "code": () => {
            var Employee = {
                company: "xyz"
            };
            var emp1 = Object.create(Employee); // Employee will serve as a prototype for the new object stored in emp1

            delete emp1.company;
            /* Outputs "xyz" as output. Here `emp1` object got company as **prototype** property. 
               delete operator doesn't delete prototype property. */

            console.log(emp1.company);
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            /* 
                Number + Number -> Addition
                Boolean + Number -> Addition
                Boolean + Boolean -> Addition
                Number + String -> Concatenation
                String + Boolean -> Concatenation
                String + String -> Concatenation
            */
            var bar = true;
            console.log(bar + 0);
            console.log(bar + "xyz");
            console.log(bar + true);
            console.log(bar + false);
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            /*  Associativity:
                Associativity of the assignment operator is Right to Left so first typeof y will evaluate first which is string "undefined"
                and assigned to z and then y would be assigned the value of z */
            var y = z = typeof y;
            console.log(y);
        }
    },
    {
        "categoryId": CodeTypesEnum.HOISTING,
        "title": "",
        "description": "",
        "code": () => {
            // NFE (Named Function Expression) - we can define only one identifier for a function, here "foo" wins "bar"
            var foo = function bar() {
                // But in the function's body, "bar" and "foo" exist both
                console.log(typeof bar);
                return 12;
            };

            console.log(typeof bar); // there is no such thing bar in the namespace
        }
    },
    {
        "categoryId": CodeTypesEnum.HOISTING,
        "title": "",
        "description": "",
        "code": () => {
            bar(); // OK

            foo(); // Not OK

            var foo = function foo() {
                console.log('foo');
            }; // foo is defined at run-time and is called a "function expression"


            function bar() {
                console.log('bar');
            } // bar is defined at parse time and is called a "function statement"

        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            function User(name) {
                this.name = name || "JsGeeks";
            }

            // First, the engine runs the right most expression which is - new User("xyz")["location"] = "USA"
            // The result of this assignment is the right most value "USA"
            // Thee it runs - var person = "USA"

            var person = new User("xyz")["location"] = "USA";
            console.log(person);
        }
    },
    {
        "categoryId": CodeTypesEnum.IIFE,
        "title": "",
        "description": "",
        "code": () => {
            /*  IIFE Adavantages:
                Variables and functions that you declare inside an IIFE are not visible to the outside world, so you can:
                - Use the IIFE for isolating parts of the code to hide details of implementation.
                - Specify the input interface of your code by passing commonly used global objects 
                  (window, document, jQuery, etc.) IIFE’s parameters, and then reference these global objects
                  within the IIFE via a local scope. VERY GOOD!
                - Use it in closures, when you use closures in loops.
                - IIFE is the basis of in the module pattern in ES5 code, it helps to prevent polluting the global scope and 
                  provide the module interface to the outside.
            */
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "Object Creation",
        "description": "Different ways to create objects in JS",
        "code": () => {
            // Creating object in JS

            // 1
            var employee = new Object();

            // 2
            var employee = {
                name: "Nishant",
                salary: 245678,
                getName: function getName() {
                    return this.name;
                }
            };

            // 3
            function Employee(fName, lName, age, salary) {
                this.firstName = fName;
                this.lastName = lName;
                this.age = age;
                this.salary = salary;
            }

            var employee1 = new Employee("John", "Moto", 24, "5000$"); // 4

            /*  
                This is a modern way to create objects that inherit properties from other objects. 
                Object.create function doesn’t run the constructor. 
                We can use Object.create(null) when you don’t want your object to inherit the properties of Object.
            */

            // 4
            var employee2 = Object.create(employee);
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "In opearotr ",
        "description": "",
        "code": () => {
            // 🔺 Remember: The in operator returns true if the specified property is in the specified object ❗❗❗ or its prototype chain

            // "in" operator - check whether a key exist in a JavaScript object or not.
            // 
            // Safer than:
            //      if(obj[key])
            // The above return false on falsy values

            var person = {
                name: "Nishant",
                age: 24
            };
            console.log("name" in person);
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // NaN is not equal to any number, it’s not less or more than any number, also it's not equal to itself
            // All false
            console.log(NaN === NaN, NaN < 2, NaN > 2, NaN === 2);
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            /*
            Six Data Types that are primitives, checked by typeof operator:

                undefined : typeof instance === "undefined"
                Boolean : typeof instance === "boolean"
                Number : typeof instance === "number"
                String : typeof instance === "string"
                BigInt : typeof instance === "bigint"
                Symbol : typeof instance === "symbol"

                Structural Types:

                Object : typeof instance === "object". Special non-data but Structural type for any constructed object instance
                also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and
                almost everything made with new keyword.

                Function : a non-data structure, though it also answers for typeof operator: typeof instance === "function".
                This is merely a special shorthand for Functions, though every Function constructor is derived from Object 
                constructor.

                Structural Root Primitive:
                
                null : typeof instance === "object".
            */

            // typeof
            console.log(typeof {}); // object

            console.log(typeof []); // object

            console.log(typeof new Array()); // object

            console.log(typeof null); // object

            console.log(typeof new RegExp()); // object

            console.log(typeof new Date()); // object
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "",
        "description": "",
        "code": () => {
            // Prevent object changes
            var employee1 = {
                name: "Nishant"
            }; // lock the object
            // ----> No new properties or methods can be added to the object, but one can change the existing properties and method.

            Object.preventExtensions(employee1);
            employee1.name = "John"; // work fine

            employee1.age = 24; // fails silently unless it's inside the strict mode

            var employee2 = {
                name: "Nishant"
            }; // Seal the object
            // ---> It is same as prevent extension, in addition to this also prevent existing properties and methods from being deleted

            Object.seal(employee2);
            console.log(Object.isExtensible(employee2)); // false

            console.log(Object.isSealed(employee2)); // true

            delete employee2.name; // fails silently unless it's in strict mode

            employee2.age = 30; // Trying to add new property will give an error, fails silently unless in strict mode

            var employee3 = {
                name: "Nishant"
            }; // Freeze the object
            // ---> Same as seal but in addition prevents existing properties methods from being modified

            Object.freeze(employee3); // Seal the object

            Object.seal(employee3);
            console.log(Object.isExtensible(employee3)); // false

            console.log(Object.isSealed(employee3)); // true

            console.log(Object.isFrozen(employee3)); // true

            employee3.name = "xyz"; // fails silently unless in strict mode

            employee3.age = 30; // fails silently unless in strict mode

            delete employee3.name; // fails silently unless it's in strict mode
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // add prefix to console
            function appLog() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                // In old browsers we would need to convert the array like "arguments" to real array
                // var args = Array.prototype.slice.call(arguments);
                args.unshift("your app name");
                console.log.apply(console, args);
            }

            appLog("Some error message");
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // By Value
            var strA = "hi there";
            var strB = strA;
            strB = "bye there!";
            console.log(strA); // The output will be 'hi there' because we're dealing with strings here. Strings are passed by value, that is, copied.
        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "",
        "description": "",
        "code": () => {
            // this
            var foo = {
                myName: "Idan",
                say: function say() {
                    console.log(this.myName);
                }
            };
            foo.say();
            var fn = foo.say;
            fn(); // undefind

            _this.myName = "Sexy";
            fn(); // Sexy
        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "",
        "description": "",
        "code": () => {
            // ⚠️⚠️⚠️ This is a very important example to learn more about arrow functions
            // this - from MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_a_dom_event_handler
            // Create obj with a method bar that returns a function that
            // returns its this. The returned function is created as
            // an arrow function, so its this is permanently bound to the
            // this of its enclosing function. The value of bar can be set
            // in the call, which in turn sets the value of the
            // returned function.
            var obj = {
                bar: function bar() {
                    return () => this;
                }
            };

            // Call bar as a method of obj (calling bar THROUGH obj), setting its this to obj
            // Assign a reference to the returned function to fn

            var fn = obj.bar(); // Calling fn, the "this" inside it was captured to be "obj"

            console.log(fn() === obj); // true
            // But caution if you reference the method of obj without calling it

            var fn2 = obj.bar; // When executing fn2, it will execute bar through the "window" object, so the arrow function's "this"  
            // points to the window object.
            // We know that for arrow functions "this" is determined during parse time
            // so when defining an arrow function inside another wrapper function, that
            // wrapper function's "this" will become the arrow function's this (Capturing).
            // In the following code line, calling fn2() directly defines the arrow function,
            // but at this time fn2's "this" is the window object, so this window object will
            // be the "this" inside the arrow function being called immediately

            console.log(fn2()() == window); // true
        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "",
        "description": "",
        "code": () => {
            // this
            var o = {
                prop: "from o"
            };

            function independent() {
                return this.prop;
            }

            o.f = independent;
            console.log(o.f()); // from o

            o.b = {
                g: independent,
                prop: "from g"
            };
            console.log(o.b.g()); // from g
        }
    },
    {
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            var arrA = [{
                prop1: "value of array A!!"
            }, {
                someProp: "also value of array A!"
            }, 3, 4, 5];

            var arrB = arrA.slice(); // Slice creates new array but NOT deep copy

            arrB[0].prop1 = 42; // Changes the object found at arrA - becasue it is the same refernce

            arrB[3] = 20; // Changes the number only at arrB - because it is a number which is stored by value

            console.log(JSON.stringify(arrA));
        }
    },
    {
        "categoryId": CodeTypesEnum.HOISTING,
        "title": "",
        "description": "",
        "code": () => {
            // Hoisting
            var employeeId = 'abc123';

            function foo() {
                employeeId = '123bcd'; // Changes the variable holding the function defined bellow!

                return;

                function employeeId() {} // Deleting this declaration will cause teh above line to change the outer employeeId

            }

            foo();
            console.log(employeeId); // Still 'abc123'
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "",
        "description": "",
        "code": () => {
            // The object passed to create server as a PROTOTYPE to objA
            // So, the "foo" property is defined at the prototype and deleting it from objA
            // doesn't cause a deletion at the prototype.
            var objA = Object.create({
                foo: 'foo'
            });
            var objB = objA;
            objB.foo = 'bar'; // Now we define the property at the object level.

            delete objA.foo; // Now we delete the property from the object level, but it is still defined at the prototype

            console.log(objA.foo); // foo

            console.log(objB.foo); // foo
        }
    },
    {
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            /* From MDN:
                new Array(element0, element1[, ...[, elementN]])
                A JavaScript array is initialized with the given elements, ****EXCEPT**** in the case where a single argument is passed
                to the Array constructor and that argument is a ****number****. Note that this special case only applies to JavaScript
                arrays created with the Array constructor, not array literals created with the bracket syntax. */
            var array = new Array('100'); // We pass a single element BUT it is not a number so an array of one element will be created!

            console.log(array);
            console.log(array.length);
        }
    },
    {
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            var array = new Array('a', 'b', 'c', 'd', 'e');
            array[10] = 'f'; // The indexer operator adujsts the array's length

            delete array[10]; // Explictly deleting the property "10" doesn't adjust the array's length

            console.log(array.length);
        }
    },
    {
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            var array = [1, 2, 3, 4, 5];
            console.log(array.indexOf(2));
            console.log([{
                name: 'John'
            }, {
                name: 'John'
            }].indexOf({
                name: 'John'
            })); // Object comparison not deep but by reference

            console.log([
                [1],
                [2],
                [3],
                [4]
            ].indexOf([3])); // Array is an object so it is an Object comparison not deep but by reference

            console.log("abcdefgh".indexOf('e'));
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // String function and String constructor produce different results:
            // Here, the function produces a string (the primitive type) as promised. 
            // However, the constructor produces an instance of the type String (an object wrapper)
            // and that's why you rarely want to use the String constructor at all.
            console.log(typeof String('Hello world')); // string

            console.log(typeof new String('Hello world')); // object

            /*  From: 
                https://stackoverflow.com/questions/17256182/what-is-the-difference-between-string-primitives-and-string-objects-in-javascrip
                  JavaScript has two main type categories, primivites and objects.
                  the behaviour you are trying to name is called auto-boxing. So what actually happens is that a primitive 
                is converted to its wrapper type when a method of the wrapper type is invoked. Put simple:
            */

            var s = 'test';
            /*
                's' is a primitive data type. It has NO methods, it is nothing more than a pointer to a raw data memory reference,
                 which explains the much faster random access speed.
                  So what happens when you do s.charAt(i) for instance?
            */

            s.charAt(2);
            /*
                 Since s is not an instance of String, JavaScript will auto-box s, which has typeof string to its 
                 wrapper type, String, with typeof object or more precisely. The auto-boxing behaviour casts s back and
                 forth to its wrapper type as needed, but the standard operations are incredibly fast since you are dealing
                 with a simpler data type.
             */
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // Any object of which the value is not undefined or null, including a Boolean object 
            // whose value is false, evaluates to true!
            var x = new Boolean(false);

            if (x) {
                // this code is executed, because 'x' object which is true
                console.log('x - Enters!');
            }

            var y = false;

            if (y) {
                // this code is not executed, ecause 'y' is a boolean primitive with "false" as value.
                console.log('y - Enters!');
            }
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // Using 
            var containers = [2, 0, false, "", '12', true]; // All of these create primitive values!

            console.log(containers.filter(Boolean)); // 0, false, "" -> fail!

            console.log(containers.filter(Number)); // Number('') === 0, Number('12') is NaN

            console.log(containers.filter(String)); // All pass!
            // This one creates object!

            console.log(containers.filter(Object)); // All pass because we create objects which are truthy no matter the value they wrap
        }
    },
    {
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            /* 
                The slice() method returns a shallow copy of a portion of an array into a new array object selected 
                from start to end (END NOT INCLUDED) where start and end represent the index of items in that array. 
                THE ORIGINAL ARRAY IS NOT MODIFIED - NO MUTATION!
            */
            console.log('---- SLICE ----');
            var list = ['foo', 'bar', 'john', 'ritz'];
            console.log(list.slice(1)); // Start from index 1 (the second item) to the end\t

            console.log(list.slice(1, 3)); // Start from index 1 to index 3 not including!\t

            console.log(list.slice()); // Actually, create new array! Shallow copy!

            console.log(list.slice(2, 2)); // Start from index 2 to index 2 not including - Empty array!

            console.log(list);
            /*  
                The splice() method CHANGES the contents of an array by removing or replacing existing elements 
                and/or adding new elements - MUTATION OCCURS!
                  3 parameters are provided 
                ((MUST) start from this index - If greater than the length of the array, start will be set to the length of the array.
                                               In this case, no element will be deleted but the method will behave as an adding function
                (OPTIONAL) delete this number of elements - If omitted then all the elements from start to the end of the array will be deleted.
                (OPTIONAL) add these element to the start index)
                  The return value is the items removed!
            */

            console.log('---- SPLICE ----');
            var list = ['foo', 'bar', 'john'];
            console.log(list.splice(1)); // Start from 1 index, delete all up to the end - two elemented get deleted!

            console.log(list.splice(1, 2)); // Start from 1 index which is greater than the array so no deletion!\t

            console.log(list);
            console.log('---- PLAY ----');
            var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            x.splice(2, 2, 'A', 'B'); // Start from the 2 index (item equal to number 3), remove 2 elements, add elements 'A' & 'B'

            console.log(x);
            x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            x.splice(10, null, 'A', 'B'); // Start from the 10 index - excceds the array limit, so no deletion, then add elements 'A' & 'B'

            console.log(x);
        }
    },
    {
        "categoryId": CodeTypesEnum.ARRAYS,
        "title": "",
        "description": "",
        "code": () => {
            /* The default sort order is ascending, built upon converting the
                elements into strings, then comparing their sequences of UTF-16 code units values.
                So we can conclude that the default sort order is as list of strings, like we order file names
            */
            var arrayNumb = [2, 8, 15, 16, 23, 42];
            arrayNumb.sort();
            console.log(arrayNumb);
        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "Playing with IIFE and this",
        "description": "",
        "code": () => {
            window.message = 'xxx';

            var obj1 = {
                message: "Hello",
                // The IIFE will be executed automatically when parsing obj1 definition!
                innerMessage: (function () {
                    console.log('Obj: ' + this.message);
                    // An IIFE, the function invoker is the windows object
                    // this object doesn't contain a "message" prop so this.message is "xxx"
                })()
            };

            // We should note that the IIFE function runs on parsing, before we even access the innerMessage
            // property. Thus the function runs before the code line below. 

            var obj2 = {
                message: 'Hello',
                innerMessage: function () {
                    (function () {
                        console.log('Obj2 IIFE: ' + this.message); // The invoker is window, so this.message is "xxx"
                    })();
                }
            };

            // Even though we invoked the innerMessage function thourgh obj2, the invoker the inline function
            // is the ALWAYs the window object.

            obj2.innerMessage()

            var obj3 = {
                message: 'Hello',
                innerMessage: function () {
                    // Inline function
                    var fn = function () {
                        // So we know the invoker is the window!
                        console.log('Obj3: ' + this.message);
                    };

                    fn();
                }
            };

            // We invoked the innerMessage function thourgh obj3, but it doesn't matter to the
            // inline function fn which its this is attached to the window.

            obj3.innerMessage();

            /******************* 
             * NOW WITH ARROWS *
             *******************/

            var obj4 = {
                message: 'Hello',
                innerMessage: function () {
                    // By using arrow we bind this to the to its value WHEN THE FUNCTION GETS DEFINED!
                    // Becaue we are defining the function DURING the call to innerMessage through obj4
                    // this will point to obj4
                    (() => {
                        console.log('Obj4 Arrow IIFE: ' + this.message);
                    })();
                }
            };

            // Even though we invoked the innerMessage function thourgh obj2, the invoker the inline function
            // is the ALWAYs the window object.

            obj4.innerMessage()

        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "",
        "description": "",
        "code": () => {
            function myFunc() {
                console.log(' ' + this.message);
            }

            // Even though we create a "message" prop inside func, the invoker is the window
            // that doesn't contain a "message" prop

            myFunc.message = "Hi John";
            console.log(' ' + myFunc());
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            function myFunc(param1, param2) {
                console.log(myFunc.length); // The length of a function is the number argument in its DEFINITION!
            }

            console.log(myFunc());
            console.log(myFunc("a", "b"));
            console.log(myFunc("a", "b", "c", "d"));

            function myFunc2() {
                console.log(arguments.length); // The function's arguements are the ACTUAL arguments passed to it during invocation!
            }

            console.log(myFunc2());
            console.log(myFunc2("a", "b"));
            console.log(myFunc2("a", "b", "c", "d"));
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            function Person(name, age) {
                this.name = name || "John";
                this.age = age || 24;

                this.displayName = function () {
                    console.log(this.name);
                };
            }
            /* A Function object's READ-ONLY name property indicates the function's name as specified when it was created,
               or it may be either anonymous or '' (an empty string) for functions created anonymously. */

            Person.name = "John"; // ⚠️ Overriding the name doesn't work!

            Person.displayName = function () {
                console.log(this.name);
            };

            var person1 = new Person('John');
            person1.displayName(); // Access instance property -> 'Jhon'
            Person.displayName(); // Access the function name which is read-only -> 'Person"
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // The grouping operator
            var x = 3;

            function getNumber() {
                return (x = 2 * x, x = 4 + x, 10 - x); // Comman separating expressions in group, the last expression is the result
            }

            var numb = getNumber();
            console.log(numb);
        }
    },
    {
        "categoryId": CodeTypesEnum.ARROWS,
        "title": "",
        "description": "",
        "code": () => {
            function getName1() {
                console.log(this.name);
            }

            // The prototype uses an arrow function which is wrong,
            // because now 'this' will always point to "window",
            // which is the this during parse!
            Object.prototype.getName2 = () => {
                console.log(this.name);
            };

            var personObj = {
                name: "Tony",
                print: getName1 // "print" points to "getName1", it doesn't matter where the function is defined
                // what matters is the object that calls it!

            };
            personObj.print(); // 'Tony'

            personObj.getName2(); // Undefined
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "",
        "description": "",
        "code": () => {
            // If we want to line break "return" statement, we need to use parethesis - used a lot by React
            function test() {
                return "test";
            } // Using arrow function, we can freely break the line


            var fn = () =>
                "fn";

            console.log(test());
            console.log(fn());
        }
    }, {
        "categoryId": CodeTypesEnum.NEW_FEATURES,
        "title": "ES7 Class",
        "description": "",
        "code": () => {
            class Human {
                gender = 'male';
                printGender = () => {
                    console.log(this.gender);
                }
            }

            var h = new Human();
            h.printGender();
        }
    },
    {
        "categoryId": CodeTypesEnum.INTERNAL,
        "title": "Functions",
        "description": "",
        "code": () => {

            function Parent() {
                this.name = "John"
            }

            Parent.prototype.test = function () {
                console.log('test')
            }

            // Parent.prototype is Object used as the blueprint for instances of this constructor function!
            // This blueprint is the one refered by the __proto__ property of new objects created by this contsturctor function
            // 👍 At minimum the blueprint contains a 'constructor' property points to the consturctor function itself!!!
            console.log(Parent.prototype);

            // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

            // Parent prototype => {constructor: Parent, test: f}
            // SO:
            // t.__proto__ => {test: ƒ, constructor: Parent}
            var t = Object.create(Parent.prototype);

            function CreatedConstructor() {
                Parent.call(this)
            }

            // We should note that we assign the "CreatedConstructor" prototype property to a new object which is has 
            // its __proto__ property pointing to Parent prototype. 
            //⚠️ By overwriting CreatedConstructor.prototype we overwrote which an object that used to hold an object 
            // with a constructor property points to CreatedConstructor function.

            CreatedConstructor.prototype = t // This is the line causes error at s3 creation! If we comment it, s3 won't cause an error!

            // Adding a new method to 't'
            CreatedConstructor.prototype.create = function create() {
                return new this.constructor()
            }

            // s1.__proto__ points to CreatedConstructor.prototype (t) which has a 'create' method and
            // a __proto__ that points to Parent.prototype which equals {test: ƒ, constructor: Parent}
            var s1 = new CreatedConstructor()

            // calling create calls this.constructor which is the Parent function which has no 'create' method!!!
            var s2 = s1.create();

            // Error: Parent doesn't have a 'create' method!
            // var s3 = s2.create();
        }
    },
    {
        "categoryId": CodeTypesEnum.INTERNAL,
        "title": "Prototypes",
        "description": "",
        "code": () => {
            // Every JavaScript function is actually a Function object. This can be seen with the code , which returns true.
            console.log((function () {}).constructor === Function);

            // Functions created with the Function constructor do not create closures to their creation contexts; 
            // they always are created in the global scope. When running them, they will only be able to access their 
            // own local variables and global ones, not the ones from the scope in which the Function constructor was created. 
            // This is different from using eval with code for a function expression.

            window.x = 10; // Global scope

            function createFunction1() {
                var x = 20;
                return new Function('return x;'); // this |x| refers global |x|
            }

            function createFunction2() {
                var x = 20;

                function f() {
                    return x; // this |x| refers local |x| above
                }
                return f;
            }

            var f1 = createFunction1();
            console.log(f1()); // 10
            var f2 = createFunction2();
            console.log(f2()); // 20
        }
    },
    {
        "categoryId": CodeTypesEnum.INTERNAL,
        "title": "Functions",
        "description": "",
        "code": () => {
            /*
            Note: It's important to understand that there is a distinction between an object's prototype 
            (available via Object.getPrototypeOf(obj), or via the deprecated __proto__ property) and the prototype
            property on constructor functions.

            The constructor function Foobar() has its own prototype, which can be found by calling Object.getPrototypeOf(Foobar).
            However this differs from its prototype property, Foobar.prototype, which is the blueprint for instances of this
            constructor function. 👍 This blueprint at minimum contains an object {constructor: ƒ} where f is the Foobar function!

            If we were to create a new instance — let fooInstance = new Foobar() — fooInstance would take its prototype
            from its constructor function's prototype property. Thus Object.getPrototypeOf(fooInstance) === Foobar.prototype.
            */

            function Foobar() {}
            Object.getPrototypeOf(Foobar) // Native code
            console.log(Foobar.prototype) // {constructor: ƒ}
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "JS Extensive Inheritance Example",
        "description": "",
        "code": () => {
            // Taken from: https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

            // Initialize a constructor function for a new Hero
            function Hero(name, level) {
                this.name = name;
                this.level = level;
            }

            // Initialize Warrior constructor
            function Warrior(name, level, weapon) {
                // Chain constructor with call
                Hero.call(this, name, level); // Augment this, this is like calling super(this)

                // Add a new property
                this.weapon = weapon;
            }

            // Initialize Healer constructor
            function Healer(name, level, spell) {
                Hero.call(this, name, level); // Augment this!

                this.spell = spell;
            }

            // Add greet method to the Hero prototype
            Hero.prototype.greet = function () {
                return `${this.name} says hello.`;
            }

            // PROTOTYPE LINK PHASE!
            // Remember that 'Object.create' creates a new object which its __proto__ is Hero.prototype
            // So, Warrior.prototype.__proto__ -> Hero.prototype

            /* Warning! Remember! 
            ⚠️ Each function has a prototype property!
            ⚠️ The prototype is an object with a constructor property in it!
            ⚠️ The constructor property points to the function itself!
             
            So:

            function Test() {}
            Test.prototype.constructor === Test

            The folowing lines destroys the prototype's constructor property!
            Which can raise an error if we try to run: this.constructor() to create a Warrior or Healer.
            We can restore the constructor by manually set it back!
            */

            Warrior.prototype = Object.create(Hero.prototype);
            Healer.prototype = Object.create(Hero.prototype);

            // Look at 
            Warrior.prototype;
            Warrior.prototype.__proto__;

            // After we assigned the prototype -> we augment it!
            Warrior.prototype.attack = function () {
                return `${this.name} attacks with the ${this.weapon}.`;
            }

            Healer.prototype.heal = function () {
                return `${this.name} casts ${this.spell}.`;
            }

            /********************************************************************
             * The 'new' operator has two tasks:                                *
             * 1. Augment this                                                  *
             * 2. Assign the constructor function's prototype to this.__proto__  *
             ********************************************************************/

            const hero1 = new Warrior('Bjorn', 1, 'axe');
            const hero2 = new Healer('Kanin', 1, 'cure');

            /****** instanceof ******/

            // hero1.__proto__ => Warrior.prototype, { attack }.__proto__ => Hero.prototype, { greet }

            console.log(hero1.__proto__ === Warrior.prototype)

            // The same as checking
            console.log(hero1 instanceof Warrior) // Is hero1 have in its chain a __proto__ that eqauls to Warrior.prototype

            console.log(hero1.__proto__.__proto__ === Hero.prototype)

            // The same as checking
            console.log(hero1 instanceof Hero) // Is hero1 have in its chain a __proto__ that eqauls to Hero.prototype

            console.log(hero1.attack());
            console.log(hero2.greet());

            /****************
             * Another one *
             ***************/

            (function () {

                // prototype is a Skelton for the __proto__ property
                function Animal() {
                    this.gender = "M";
                }

                Animal.prototype.say = function () {
                    console.log('hello');
                };

                function Bird() {
                    this.song = 'B';
                }

                Bird.prototype = new Animal();

                // b.__proto__ => { gender: ‘M’}.__proto => {say, constructor [Animal] }
                var b = new Bird();

            })();

        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "Prototype Chain Examples",
        "description": "",
        "code": () => {

            // Taken from:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#objects_created_with_syntax_constructs

            /****** Prototype Examples ******/

            var o = {
                a: 1
            };

            // The newly created object o has Object.prototype as its [[Prototype]]
            // o has no own property named 'hasOwnProperty'
            // hasOwnProperty is an own property of Object.prototype.
            // So o inherits hasOwnProperty from Object.prototype
            // Object.prototype has null as its prototype.
            // o ---> Object.prototype ---> null

            var b = ['yo', 'whadup', '?'];

            // Arrays inherit from Array.prototype
            // (which has methods indexOf, forEach, etc.)
            // The prototype chain looks like:
            // b ---> Array.prototype ---> Object.prototype ---> null

            function f() {
                return 2;
            }

            // Functions inherit from Function.prototype
            // (which has methods call, bind, etc.)
            // f ---> Function.prototype ---> Object.prototype ---> null

            var a = {
                a: 1
            };
            // a ---> Object.prototype ---> null

            var b = Object.create(a);
            // b ---> a ---> Object.prototype ---> null
            console.log(b.a); // 1 (inherited)

            var c = Object.create(b);
            // c ---> b ---> a ---> Object.prototype ---> null

            var d = Object.create(null); // Causes the object prototype to be null!
            // d ---> null
            console.log(d.hasOwnProperty); // NOTE!
            // undefined, because d doesn't inherit from Object.prototype

            // Object.setPrototypeOf

            function foo() {}

            foo.prototype = {
                foo_prop: "foo val"
            };

            function bar() {}

            var proto = {
                bar_prop: "bar val"
            };

            // The first parameter is the object which is to have its prototype set.
            // The second parameter is the object's new prototype

            Object.setPrototypeOf(
                proto, foo.prototype
            );

            bar.prototype = proto;

            var inst = new bar;
            console.log(inst.foo_prop); // from foo.prototype
            console.log(inst.bar_prop); // from proto

            // Directly setting __proto__

            function A() {}
            A.prototype = {
                foo_prop: "foo val"
            };

            function bar() {}
            var proto = {
                bar_prop: "bar val",
                __proto__: A.prototype
            };
            bar.prototype = proto;

            var inst = new bar;
            console.log(inst.foo_prop);
            console.log(inst.bar_prop);
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "Constructor",
        "description": "",
        "code": () => {
            function ParentWithStatic() {}

            ParentWithStatic.startPosition = {
                x: 0,
                y: 0
            } // Static member property
            ParentWithStatic.getStartPosition = function getStartPosition() {
                return this.startPosition
            }

            function Child(x, y) {
                this.position = {
                    x: x,
                    y: y
                }
            }

            // Without this line the code fails!
            // Child = Object.assign(Child, ParentWithStatic) // copies over the static members from ParentWithStatic to Child

            Child.prototype = Object.create(ParentWithStatic.prototype)
            Child.prototype.constructor = Child // Restore to consturctor property destroyed by the above line!

            Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
                let position = this.position

                // this.constructor === Child!
                // the Child doesn't have a static getStartPosition() function if we didn't explicitly defined it!
                let startPosition = this.constructor.getStartPosition() // error undefined is not a function, since the constructor is Child

                return {
                    offsetX: startPosition.x - position.x,
                    offsetY: startPosition.y - position.y
                }
            };

            new Child().getOffsetByInitialPosition();
        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "The \"this\" for functions and IIFE",
        "description": "",
        "code": () => {

            // Nested functions, on the other hand, follow one simple rule: they always have the 
            // global object as their default this value, no matter where they appear

            window.fruit = 'banana';

            var object1 = {
                fruit: 'orange',
                say: function () {
                    (function () {
                        console.log(this.fruit); // this === window
                    })();
                }
            }

            object1.say();

            var object2 = {
                fruit: 'orange',
                say: function () {
                    var x = function () {
                        console.log(this.fruit); // this === window
                    };
                    x();
                }
            }

            object2.say();

            var object3 = {
                fruit: 'orange',
                say: function () {
                    (() => {
                        console.log(this.fruit); // Arrows captures this on definition so this === object3        
                    })();
                }
            }

            object3.say();

            var object4 = {
                fruit: 'orange',
                say: function () {
                    var x = () => { // Arrows captures this on definition so this === object4
                        console.log(this.fruit);
                    };
                    x();
                }
            }

            object4.say();
        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "This and \"apply\"",
        "description": "",
        "code": () => {
            // When the apply method is called on a function without any arguments or when the 
            // first argument passed is null, the this value of the function becomes the global object

            window.fruit = 'banana';

            var object = {
                fruit: 'orange',
                say: function () {
                    console.log(this.fruit);
                }
            }

            object.say();
            object.say.apply(); // apply with no params -> this === window!
        }
    },
    {
        "categoryId": CodeTypesEnum.TRICKS,
        "title": "This and \"apply\"",
        "description": "",
        "code": () => {
            // Lets create a combine function that combines two functions to one

            var add = function (a, b) {
                return a + b;
            }

            var square = function (a) {
                return a * a;
            }

            var combine = function (fnA, fnB) {
                return function () {
                    var args = Array.prototype.slice.call(arguments);
                    var result = fnA.apply(null, args);
                    return fnB.call(null, result);
                }
            }

            var addThenSquare = combine(add, square);

            console.log(addThenSquare(2, 3)); // (2 + 3)^2 = 25
        }
    },
    {
        "categoryId": CodeTypesEnum.FUNDAMENTALS,
        "title": "Playing with types",
        "description": "",
        "code": () => {

            // When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison
            // (https://www.w3schools.com/js/js_comparisons.asp).

            console.log("2 == '2' - ", 2 == '2'); // '2' gets converted to 2 and then the compariosn takes place

            // All objects are true in a boolean context. 
            // There are only numeric and string conversions.
            // The numeric conversion happens when we subtract objects or apply mathematical functions.
            // As for the string conversion – it usually happens when we output an object like alert(obj) and in similar contexts.

            // For an object-to-string conversion, when we’re doing an operation on an object that expects a string
            // For an object-to-number conversion, like when we’re doing maths

            // In modern javascript there’s a built-in symbol named "Symbol.toPrimitive" that should be used to name the conversion
            // method in older javascript we used "valueOf" and "toString" to comvert the object to primitive.

            // So, when converting object to primitive we depending on the provided hint we will try 
            // to convert to object to number or string ---> THAT DEPENDS ON THE HINT
            // There are 3 hints: Number, String, and "default" that behaves the same way as "number".

            // During comparison - We try to convert he array to number! But its valueOf implementation doesn't satisfiy 
            // the situation so the array is converted to string '0' and then the string is converted to number 0.
            console.log('0 == [0] - ', +0 == [0]); // true

            console.log(1 == []); // false! [] -> '' and '' != 1

            // But
            var myArray = [];
            myArray.valueOf = function () {
                return 1
            };
            console.log(myArray == 1) // true

            // And
            var mySecondArray = [];
            mySecondArray.toString = function () {
                return '1'
            };
            console.log(mySecondArray == 1) // true

            // And - A prove that valueOf is being called BEFORE toString
            var myThirdArray = [];
            myThirdArray.valueOf = function () {
                return 2
            };
            myThirdArray.toString = function () {
                return '1'
            };
            console.log('myThirdArray: ', +myThirdArray == 1) // false

            // And
            console.log(1 + {}) // Tries valueOf without success so uses toString, + is forgiving so it will try toString
            console.log(1 - {}) // Tries valueOf without success so uses toString, - is not forgiving so NaN

            var myCleverObj = {};
            myCleverObj.valueOf = function () {
                return 1000;
            }

            console.log(1 + myCleverObj);
            console.log(1 - myCleverObj);

            // Empty string is converted to 0
            console.log([] == 0) // true, [] => '' => 0
            console.log({} == 0) // false, {} => '[Object Object]' => NaN

            /*
             To do the conversion, JavaScript tries to find and call three object methods:
                ◻️ Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists. 
                ◻️ Otherwise if hint is "string" - try obj.toString() and obj.valueOf(), whatever exists.               
                ◻️ Otherwise if hint is "number" or "default" - try obj.valueOf() and obj.toString(), whatever exists.
            */

            // NaN doesn't equal to itself so we can check for it by
            var reallyIsNaN = function (x) {
                return x !== x; // Comparing the parameter to itself!
            }

            // Look at that:
            console.log(!!new Boolean(false)) // true - because all object are truthy! 
            console.log(new Boolean(false) == true) // false - because the boolean object valueOf returns false
            console.log((new Boolean(false)).valueOf()) // false

            // 👍 Primitive wrapper objects, return their primitive values with the valueOf method, 
            // and return their string-cast values for toString
        }
    },
    {
        "categoryId": CodeTypesEnum.THIS,
        "title": "This and consturctor functions",
        "description": "",
        "code": () => {
            var fruit = 'banana';

            // constructor function
            var Person = function () {
                console.log(this.fruit);
            }

            Person();

            new Person();
        }
    }
]
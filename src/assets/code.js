/* eslint-disable */

const CodeTypesEnum = {
    ARRAYS: "Arrays",
    ARROWS: "Arrows",
    THIS: "this",
    OBJECTS: "Objects",
    FUNDAMENTALS: "Fundamentals",
    HOISTING: "Hoisting",
    IIFE: "IIFE",
    NEW_FEATURES: "New Features"
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
        "title": "",
        "description": "",
        "code": () => {
            // Creating object in JS
            // 1
            var employee = new Object(); // 2

            var employee = {
                name: "Nishant",
                salary: 245678,
                getName: function getName() {
                    return this.name;
                }
            }; // 3

            function Employee(fName, lName, age, salary) {
                this.firstName = fName;
                this.lastName = lName;
                this.age = age;
                this.salary = salary;
            }

            var employee1 = new Employee("John", "Moto", 24, "5000$"); // 4

            /* This is a modern way to create objects that inherit properties from other objects. 
              Object.create function doesn’t run the constructor. 
              We can use Object.create(null) when you don’t want your object to inherit the properties of Object.
            */

            var employee2 = Object.create(employee);
        }
    },
    {
        "categoryId": CodeTypesEnum.OBJECTS,
        "title": "",
        "description": "",
        "code": () => {
            // "in" operator - check whether a key exist in a JavaScript object or not.
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
                    return () =>  this;
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
        "categoryId": 1,
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
        "categoryId": 1,
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
        "categoryId": 1,
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
        "categoryId": 1,
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
        "categoryId": 1,
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
        "categoryId": 1,
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
        "categoryId": 1,
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
        "categoryId": 1,
        "title": "",
        "description": "",
        "code": () => {
            window.message = 'xxx';
            var obj1 = {
                message: "Hello",
                innerMessage: ! function () {
                    console.log('Obj: ' + this.message);
                    // An IIFE, the function invoker is the windows object
                    // this object doesn't contain a "message" prop so this.message is "xxx"
                }()
            };

            // We should note that the IIFE function runs on parsing, before we even access the innerMessage
            // property. Thus the function runs before the code line below. 

            console.log('Obj: ' + obj1.innerMessage);
            var obj2 = {
                message: 'Hello',
                innerMessage: function innerMessage() {
                    // It is important to remember that the IIFE is executed during parsing,
                    // So we don't need to execute innerMessage in order to run it.
                    // In this example the result of the IIFE (resolved during parse time) will be returned later,
                    // when we actually call "innerMessage", but the result gets determined during PARSE!!! 
                    return !! function () {
                        console.log('Obj2 IIFE: ' + this.message); // Same as here, the invoker is window, so this.message is "xxx"

                        return true;
                    }();
                }
            };

            // Even though we invoked the innerMessage function thourgh obj2, the invoker of the IIFE defined there 
            // is the window object.

            console.log('Obj2: ' + obj2.innerMessage());
            var obj3 = {
                message: 'Hello',
                innerMessage: function innerMessage() {
                    var fn = function fn() {
                        console.log('Obj3: ' + this.message1);
                    };

                    return !!fn(); // The invoker is the window, again!
                }
            };

            // Even though we invoked the innerMessage function thourgh obj3, the invoker of the IIFE defined there 
            // is the window object.

            console.log('Obj3: ' + obj3.innerMessage());
        }
    },
    {
        "categoryId": 1,
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
        "categoryId": 1,
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
        "categoryId": 1,
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
            person1.displayName();
            Person.displayName();
        }
    },
    {
        "categoryId": 1,
        "title": "",
        "description": "",
        "code": () => {
            // The grouping operator
            var x = 3;

            function getNumber() {
                return x = 2 * x, x = 4 + x, 10 - x; // Comman separating expressions in group, the last expression is the result
            }

            var numb = getNumber();
            console.log(numb);
        }
    },
    {
        "categoryId": 1,
        "title": "",
        "description": "",
        "code": () => {
            function getName1() {
                console.log(this.name);
            }

            Object.prototype.getName2 = function () {
                console.log(_this.name); // The prototype uses an arrow function which is wrong,
                // because now 'this' will always point to "window",
                // which is the this during parse!
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
        "categoryId": 1,
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
    }
]
/* eslint-disable */

export default [
    () => {
        // Emptying an array
        var arrayList = ["a", "b", "c", "d", "e", "f"];
        arrayList = [];
        arrayList.length = 0;
        arrayList.splice(0, arrayList.length);
        while (arrayList.length) {
            arrayList.pop();
        }
    },

    () => {
        // Checking for array using old JS
        var arrayList = ["a", "b", "c", "d", "e", "f"];
        console.log(Object.prototype.toString.call(arrayList) === "[object Array]");
    },

    //  Creating an object using Object.create
    () => {
        var Employee = {
            company: "xyz"
        };
        var emp1 = Object.create(Employee); // Employee will serve as a prototype for the new object stored in emp1
        delete emp1.company;

        /* Outputs "xyz" as output. Here `emp1` object got company as **prototype** property. 
           delete operator doesn't delete prototype property. */
        console.log(emp1.company);
    },

    () => {
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
    },


    () => {
        /*  Associativity:
            Associativity of the assignment operator is Right to Left so first typeof y will evaluate first which is string "undefined"
            and assigned to z and then y would be assigned the value of z */
        var y = (z = typeof y);
        console.log(y);
    },


    () => {
        // NFE (Named Function Expression) - we can define only one identifier for a function, here "foo" wins "bar"
        var foo = function bar() {
            // But in the function's body, "bar" and "foo" exist both
            console.log(typeof bar);
            return 12;
        };

        console.log(typeof bar); // there is no such thing bar in the namespace
    },

    () => {

        foo();
        bar();

        // foo is defined at run-time and is called a "function expression"
        var foo = function () {};

        // bar is defined at parse time and is called a function statement
        function bar() {}
    },

    /* typeof and instanceof
    The typeof operator checks if a value belongs to one of the seven basic types: 
    
                  ****** number, string, boolean, object, function, undefined or Symbol. *****
                  
    Instanceof works on the level of prototypes. In particular, it tests to see if the right operand appears anywhere in the prototype
    chain of the left. instanceof doesn’t work with primitive types. */

    // The assignment operator returns the rightmost value

    () => {
        function User(name) {
            this.name = name || "JsGeeks";
        }

        // First, the engine runs the right most expression which is - new User("xyz")["location"] = "USA"
        // The result of this assignment is the right most value "USA"
        // Thee it runs - var person = "USA"
        var person = (new User("xyz")["location"] = "USA");
        console.log(person);
    },

    () => {
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
    },


    () => {
        // Creating object in JS

        // 1
        var employee = new Object();

        // 2
        var employee = {
            name: "Nishant",
            salary: 245678,
            getName: function () {
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

        var employee1 = new Employee("John", "Moto", 24, "5000$");

        // 4
        /* This is a modern way to create objects that inherit properties from other objects. 
          Object.create function doesn’t run the constructor. 
          We can use Object.create(null) when you don’t want your object to inherit the properties of Object.
        */
        var employee2 = Object.create(employee);
    },


    () => {
        // "in" operator - check whether a key exist in a JavaScript object or not.

        var person = {
            name: "Nishant",
            age: 24
        };

        console.log("name" in person);
    },

    () => {
        // NaN is not equal to any number, it’s not less or more than any number, also it's not equal to itself
        // All false
        console.log(NaN === NaN, NaN < 2, NaN > 2, NaN === 2);
    },


    () => {
        // typeof
        console.log(typeof {}); // object
        console.log(typeof []); // object
        console.log(typeof new Array()); // object
        console.log(typeof null); // object
        console.log(typeof new RegExp()); // object
        console.log(typeof new Date()); // object
    },

    () => {
        // Prevent object changes

        var employee1 = {
            name: "Nishant"
        };

        // lock the object
        // ----> No new properties or methods can be added to the object, but one can change the existing properties and method.
        Object.preventExtensions(employee1);
        employee1.name = "John"; // work fine
        employee1.age = 24; // fails silently unless it's inside the strict mode

        var employee2 = {
            name: "Nishant"
        };

        // Seal the object
        // ---> It is same as prevent extension, in addition to this also prevent existing properties and methods from being deleted
        Object.seal(employee2);

        console.log(Object.isExtensible(employee2)); // false
        console.log(Object.isSealed(employee2)); // true

        delete employee2.name; // fails silently unless it's in strict mode

        employee2.age = 30; // Trying to add new property will give an error, fails silently unless in strict mode

        var employee3 = {
            name: "Nishant"
        };

        // Freeze the object
        // ---> Same as seal but in addition prevents existing properties methods from being modified
        Object.freeze(employee3);

        // Seal the object
        Object.seal(employee3);

        console.log(Object.isExtensible(employee3)); // false
        console.log(Object.isSealed(employee3)); // true
        console.log(Object.isFrozen(employee3)); // true

        employee3.name = "xyz"; // fails silently unless in strict mode
        employee3.age = 30; // fails silently unless in strict mode
        delete employee3.name; // fails silently unless it's in strict mode
    },


    () => {
        // add prefix to console
        function appLog(...args) {
            // In old browsers we would need to convert the array like "arguments" to real array
            // var args = Array.prototype.slice.call(arguments);
            args.unshift("your app name");
            console.log.apply(console, args);
        }

        appLog("Some error message");
    },


    () => {
        // By Value
        var strA = "hi there";
        var strB = strA;
        strB = "bye there!";
        console.log(strA); // The output will be 'hi there' because we're dealing with strings here. Strings are passed by value, that is, copied.
    },


    () => {
        // this
        var foo = {
            myName: "Idan",
            say: function () {
                console.log(this.myName);
            }
        };

        foo.say();

        const fn = foo.say;
        fn(); // undefind
        this.myName = "Sexy";
        fn(); // Sexy
    },

    () => {
        // this - from MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_a_dom_event_handler

        // Create obj with a method bar that returns a function that
        // returns its this. The returned function is created as
        // an arrow function, so its this is permanently bound to the
        // this of its enclosing function. The value of bar can be set
        // in the call, which in turn sets the value of the
        // returned function.
        var obj = {
            bar: function () {
                var x = () => this;
                return x;
            }
        };

        // Call bar as a method of obj, setting its this to obj
        // Assign a reference to the returned function to fn
        var fn = obj.bar();

        // Call fn without setting this, would normally default
        // to the global object or undefined in strict mode
        console.log(fn() === obj); // true

        // But caution if you reference the method of obj without calling it
        var fn2 = obj.bar;
        // Calling the arrow function's this from inside the bar method()
        // will now return window, because it follows the this from fn2.

        // We know that for arrow functions "this" is determined during parse time
        // so when defining an arrow function inside another wrapper function, that
        // wrapper function's "this" will become the arrow function's this.
        // In the following code line, calling fn2() once defines the arrow function,
        // at this time fn2's "this" is the window object, so this window object will
        // be the "this" inside the arrow function being called immediately

        console.log(fn2()() == window); // true
    },


    () => {
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
    },

    () => {
        var arrA = [{
            prop1: "value of array A!!"
        }, {
            someProp: "also value of array A!"
        }, 3, 4, 5];
        var arrB = arrA.slice(); // Slice creates new array but NOT deep copy
        arrB[0].prop1 = 42; // Changes the object found at arrA - becasue it is the same refernce
        arrB[3] = 20; // Changes the number only at arrB - because it is a number which is stored by value
        console.log(JSON.stringify(arrA));
    },

    () => {
        // Hoisting
        var employeeId = 'abc123';

        function foo() {

            employeeId = '123bcd'; // Changes the variable holding the function defined bellow!
            return;

            function employeeId() {} // Deleting this declaration will cause teh above line to change the outer employeeId
        }

        foo();
        console.log(employeeId); // Still 'abc123'
    },

    () => {

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
    },

    () => {
        /* From MDN:

        new Array(element0, element1[, ...[, elementN]])

        A JavaScript array is initialized with the given elements, ****EXCEPT**** in the case where a single argument is passed
        to the Array constructor and that argument is a ****number****. Note that this special case only applies to JavaScript
        arrays created with the Array constructor, not array literals created with the bracket syntax. */

        var array = new Array('100'); // We pass a single element BUT it is not a number so an array of one element will be created!
        console.log(array);
        console.log(array.length);
    },

    () => {
        var array = new Array('a', 'b', 'c', 'd', 'e');

        array[10] = 'f'; // The indexer operator adujsts the array's length
        delete array[10]; // Explictly deleting the property "10" doesn't adjust the array's length
        console.log(array.length);
    },

    () => {
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
    },
    () => {
        // String function and String constructor produce different results:
        // Here, the function produces a string (the primitive type) as promised. 
        // However, the constructor produces an instance of the type String (an object wrapper)
        // and that's why you rarely want to use the String constructor at all.

        console.log(typeof String('Hello world')); // string
        console.log(typeof new String('Hello world')); // object
    }
]
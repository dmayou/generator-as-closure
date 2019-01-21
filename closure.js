// Write a generator function that yields 'I', 'am', 
// 'Groot' in sequence forever

function* iAmGrootGenerator() {
    while (true) {
        yield 'I';
        yield 'am';
        yield 'Groot';
    }

}

// Emulate function above with closure
function iAmGroot() {
    let i = 0;
    return ({
        next: function () {
            switch (i % 3) {
                case 0:
                    i++;
                    return ({
                        value: 'I',
                        done: false
                    });
                case 1:
                    i++;
                    return ({
                        value: 'am',
                        done: false
                    });
                case 2:
                    i++;
                    return ({
                        value: 'Groot',
                        done: false
                    });
            }
        }
    });
}

// Sample calls
let groot = iAmGroot();
console.log('IamGroot:', groot.next());
console.log('IamGroot:', groot.next());
console.log('IamGroot:', groot.next());
console.log('IamGroot:', groot.next());
console.log('IamGroot:', groot.next());

// For a given example of a generator function that yields
// the output described below, emulate using a function with closure
// 'hello world'
// 100
// [0, 1, 2, 3]
// 'value'

function* example() {
    yield 'hello world';
    yield 100;
    yield [0, 1, 2, 3];
    yield 'value';
}

function exampleClosure() {
    let i = 0;
    return ({
        next:
        function() {
            switch (i) {
                case 0:
                    i++;
                    return {
                        value: 'hello world',
                        done: false
                    }
                case 1:
                    i++;
                    return {
                        value: 100,
                        done: false
                    }
                case 2:
                    i++;
                    return {
                        value: [0, 1, 2, 3],
                        done: false
                    }
                case 3:
                    i++;
                    return {
                        value: {
                            key: 'value'
                        },
                        done: true
                    }
                default:
                    return {
                        value: undefined,
                        done: true
                    }
            }
        }
    });
}

let exampleInstance = example();
let secondInstance = example();
console.log('First:', exampleInstance.next());
console.log('First:', exampleInstance.next());
console.log('First:', exampleInstance.next());
console.log('Second:', secondInstance.next());
console.log('First:', exampleInstance.next());
console.log('Second:', secondInstance.next());
console.log('First:', exampleInstance.next());
console.log('First:', exampleInstance.next());

// Write a generator function that appends the input to
// the previous input (e.g. 'a', 'ab', 'abc')
function* appendStringGenerator() {
    while (true) {
        var value;
        var newStr = '';
        while (true) {
            var value = yield newStr;
            newStr += value;
        }
    }
}

// Emulate function above with closure
function appendString() {
    let newStr = '';
    return (
        { next: 
            function (str) {
                newStr = str ? newStr + str : newStr;
                return ({
                    value: newStr,
                    done: false
                });   
            }
        }
    );
}


let append = appendString();
console.log('appendString:', append.next());
console.log('appendString:', append.next('a'));
console.log('appendString:', append.next('b'));
console.log('appendString:', append.next('cd'));
console.log('appendString:', append.next(''));
console.log('appendString:', append.next('e'));
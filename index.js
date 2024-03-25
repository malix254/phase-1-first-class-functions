// Define the functions
function receivesAFunction(callback) {
    if (typeof callback === 'function') {
        callback();
    } else {
        console.error("Callback is not a function");
    }
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function");
    };
}

const returnsAnAnonymousFunction = function() {
    return function() {
        console.log("This is an anonymous function");
    };
};

// Test cases
describe('index', () => {
    it('returnsANamedFunction should return a function', () => {
        const namedFunc = returnsANamedFunction();
        expect(typeof namedFunc).to.equal('function');
    });

    it('returnsANamedFunction should return a named function', () => {
        const namedFunc = returnsANamedFunction();
        expect(namedFunc.name).to.equal('namedFunction');
    });

    it('returnsAnAnonymousFunction should return a function', () => {
        const anonFunc = returnsAnAnonymousFunction();
        expect(typeof anonFunc).to.equal('function');
    });

    it('returnsAnAnonymousFunction should return an anonymous function', () => {
        const anonFunc = returnsAnAnonymousFunction();
        expect(anonFunc.name).to.equal('');
    });
});

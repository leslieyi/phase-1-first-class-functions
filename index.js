function receivesAFunction(callback) {
    callback();

}

function returnsANamedFunction() {
    return function test() {

    }
}

// function returnsAnAnonymousFunction() {
//     return function () {
//     }
// }

// const returnsAnAnonymousFunction = () => function(){}
// const returnsAnAnonymousFunction = () => (() => {})
const returnsAnAnonymousFunction = () => () => {}
function curriedMultiply(a) {
    return function (b) {
      return a * b;
    };
  }

  console.log(curriedMultiply(3)(4));



// Currying is a functional programming technique where a function 
// that takes multiple arguments is transformed into a sequence of
//  functions, each taking a single argument.
// In simpler terms, instead of writing a function that takes all 
// its arguments at once:
// javascriptCopyfunction add(a, b, c) {
//   return a + b + c;
// }
// add(1, 2, 3); // 6
// With currying, you transform it into a function that takes one argument and returns another 
// function that takes the next argument, and so on:
// javascriptCopyfunction curriedAdd(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     }
//   }
// }

// curriedAdd(1)(2)(3); // 6
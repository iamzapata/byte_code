function returnString(a) {
  const b = a + 'b';

  const obj = {
    a: a,
  }

  const arr = [10, 11, 12, 13, 14, 15]

  function foo() {
    return a + b;
  }

  var myVar = 100;

  return foo();
/*   const obj = {
    'a': 10,
    'b': 20,
    'c': 30
  };
  let arr = [1, 2, 3];

  var myvar = 'hello';

  console.log(obj);
  console.log(arr);
  console.log(myvar);

  return 15 */
}

console.log(returnString(10));
const numA = 1;
const numB = 2;

function sum(a, b) {
  console.log(`the sum is ${a + b}`);
}

sum(numA, numB);
// we clearly see that we DO NOT EXPORT ANYTHING from this module BUT...
// any module that uses REQUIRE will CALL the required module resulting in executing it!

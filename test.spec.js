function FizzBuzz(number){
  var str = " ";
  if(number%15 == 0)
    return 'FizzBuzz';
  else if(number%5 == 0)
    return 'Buzz';
  else if(number%3 == 0)
    return 'Fizz';
  else {
    return str = tostring.number().str;
  }
}

describe("FizzBuzz()", function() {
  it('Shold be "Fizz" when I put 3 ' , function(){
  var str = FizzBuzz(3);
  expect(str).toEqual('Fizz');
  });

  it('Shold be "Buzz" when I put 5 ' , function(){
  var str = FizzBuzz(5);
  expect(str).toEqual('Buzz');
  });

  it('Shold be "FizzBuzz" when I put 15 ' , function(){
  var str = FizzBuzz(15);
  expect(str).toEqual('FizzBuzz');
  });

  it('Shold be "4" when I put 4 ' , function(){
  var str = FizzBuzz(4);
  expect(str).toEqual('4');
  });
});

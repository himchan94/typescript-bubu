// 4 함수

/*
  매개변수와 인수(인자)
  매개변수: parameter
  인수: argument

매개변수
function add(a:number, b: number):number{
  return a + b;
}

let result = add(1,2); 함수에 들어가는 1,2는 인자(인수)

*/

/*
  값을 반환하지 않는 함수는 void 타입 반환
*/

// 함수 시그니처
// let printMe: (arg0: string, arg1: number) => void = function (
//   name: string,
//   age: number
// ): void {};

// type stringNumberFunc = (arg0: string, arg1: number) => void;

interface INameable {
  name: string;
}

/*
function getName(o: INameable) {
  return o.name;
}

let n = getName(undefined);
*/

// with guard

function getName(o: INameable) {
  return o !== undefined ? o.name : "unknown name";
}

// interface with optional property

interface IAgeable {
  age?: number;
}

function getAge(o: IAgeable) {
  return o !== undefined && o.age ? o.age : 0;
}

/*
  선택적 매개변수 optional parameter
  function fn(arg1: string, arg?: number):void {}
*/

// type OptionalArgFunc = (arg0: string, arg1?: number) => void;

// const getNameWithOptionalArgFunc: OptionalArgFunc = (name, age) => {};

/*
  함수 표현식
  함수는 객체다
  자바스크립트는 함수형 언어 스킴(scheme)과 프로토타입(prototype) 기반 객체지향 언어 self를 기반으로 만들어졌다.
  그래서 객체지향 언어와 함수형 언어의 특징이 모두 있다.
*/

// let add = new Function("a", "b", "return a + b");
// let result = add(1, 2);
// console.log(result);

/*
  위의 내용이 특이한 점은 add가 함수라면
  function add(a,b){return a + b} 같은 구문이어야 하지만,
  변수선언문 형태로 함수가 구현되었다.
*/

// 아래 처럼도 구현이 가능하다.
let add2 = function (a, b) {
  return a + b;
};

/*
  위 처럼, 함수 선언문에서 함수 이름을 제외한 function(a,b){return a+b}와 같은 코드를
  함수 표현식(function expression)이라고 한다.
*/

/*
  일등함수
  프로그래밍 언어가 일등 함수(first-class function) 기능을 제공하면 '함수형 프로그래밍 언어라고 한다.

  let f = function (a, b) {
    return a + b;
  };

  f = function (a, b) {
    return a - b;
  };

  심벌 f가 변수인지 함수인지 사실상 구분할 수 없다.
  이것이 변수와 함수를 차별하지 않는다는 의미
  */

/*
    표현식
    프로그래밍 언어에서 표현식(expresston)이라는 용어는 리터럴(literal), 연산자(operator)
    변수, 함수 호출(function call)등이 복합적으로 구성된 코드 형태를 의미
    
    ex) function (a,b){ return a+b};
  */

/*
  계산법
  컴파일러는 표현식을 만나면 계산법(evaluation)을 적용해 어떤 값을 만든다.
  계산법은 조급한 계산법(eager evaluation), 느긋한 계산법(lazy evaluation) 두 가지가 있다.

  컴파일러가 1 + 2라는 표현식을 만나면, 조급한 계산법을 적용해 3을 만든다.
  컴파일러가 function (a,b){ return a+b}라는 함수 표현식을 만나면 심벌 a와 b가 어떤 갑신지 알 수 없어서 느긋한 계산법을 적용해 계산을 보류한다.
*/

/*
  함수 호출 연산자
  어떤 변수가 함수 표현식을 담고 있다면, 변수 이름 뒤에 함수 호출 연산자(function call operator) ()를 붙여서 호출할 수 있다.

  * 함수 호출이란, 함수 표현식의 몸통 부분을 실행한다는 의미다.


  let functionExpression = function(a,b){return a+b};
  let value = functionExpression(1,2);

  컴파일러는 함수 호출문을 만나면, 지금까지 미뤘던 함수 표현식에 조급한 계산법을 적용해 함수 표현식을 값으로 바꾼다.
  functionExpression(1,2) 형태로 함수가 호출되면, 컴파일러는 functionExpression 변수에 저장된 함수 표현식을 끄집어 낸 뒤 조급한 계산법을 적용한다.
*/

/*
  익명 함수
  익명(무명) 함수 (anonymous function)

  let value = (function(a,b){return a+b})(1,2) // 3


  01: let value=
  02: (function(a,b){return a+b})
  03: (1,2)

  컴파일러는 02행의 익명 함수 부분에 게으른 계산법을 적용해 그대로 놔둔다.
  곧바로, 03행의 함수 호출 연산자를 만나므로, 02행의 함수 몸통에 조급한 계산법을 적용해 최종적으로 3이라는 값을 만든다.
  다음, 01행의 value 변수에 이 값을 대입한다.
*/

/*
  화살표 함수와 표현식 문
  화살표 함수는 function과 다르게 중괄호를 사용할 수도, 생략할 수도 있다.

  const arrow1 = (a:number, b:number):number => {return a + b} // 실행문 방식 몸통 - execution statement
  const arrow2 = (a: number, b:number): number => a + b // 표현식 문 방식 몸통 - expression statement
*/

/*
  오래전부터 프로그래밍 언어는 실행문 지향 언어(execution-oriented language)와 표현식 지향 언어(expression-oriented language)로 구분되어 왔다.
  C가 대표적인 실행문 지향 언어이고, 스칼라(scala)가 대표적인 표현식 지향 언어

  프로그래밍 언어에서 실행문은 CPU에서 실행되는 코드를 의미한다.
  *그런데 실행문은 CPU에서 실행만 될 뿐 결과를 알려주지 않는다.*
  실행문이 실행된 결과를 알려면 반드시 return 키워드를 사용해야 한다. 
  반면에 표현식 문은 CPU에서 실행된 결과를 굳이 return 키워드를 사용하지 않아도 알려준다.

  똑같이 CPU에서 실행되는 구문이라도 x > 0처럼 return 키워드 없이 결괏값을 반환하는 실행문이 필요하다.
  이를 표현식 문(expression statement)이라고 부른다.

  실행문 지향 언어들은, if문을 'if 실행문'이라고 표현한다.
  반면에 표현식 지향 언어들은 'if 표현식'이라고 표현한다.

  val x = if(a>b) a else b
  */

/*
  return 키워드
  실행문은 CPU에서 실행된 결과를 알려주지 않는다.
  
  function isGreater(a: number, b: number): boolean {
    a > b; // 결과를 반환하지 않음
  }

  
  function isGreater(a: number, b: number): boolean {
    return a > b; // 결과를 반환
  }

  return 키워드는 반드시 함수 몸통에서만 사용할 수 있다.
  if(return x > 0) x = 1 // x x x x x x 

  */

/*
  표현식(expression)과 표현식 문(expression statement)의 차이

  01: let a = 1, b = 0
  02: if(a>b) console.log('a is greater than b')
  03: const isGreater = (a: number, b: number): boolean => a > b

*/

/*
  일등 함수

  콜백 함수

*/

const f = (callback: () => void) => callback();

type NumberToNumberFunc = (arg0: number) => number;

export const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b; // 클로저
  };

  return _add;
};

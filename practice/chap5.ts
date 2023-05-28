//

// 베열

/*
  let 배열이름 = new Array(배열 길이)

  자바스크립트에서 배열은 객체다.
*/

// isArray
let a = [1, 2, 3];
let o = { name: "Jack", age: 32 };
console.log(Array.isArray(a), Array.isArray(o)); // true false

// 배열의 타입
/*
  타입스크립트에서 배열의 타입은 아이템 타입[]

  type Iperson = {name: string, age?: number};
  let personArray: Iperson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]
*/

/*
  문자열과 배열 간 변환
  어떤 프로그래밍 언어는 문자열(sting)을 문자(character)들의 배열(array)로 간주한다.
  
  타입스크립트에서는 문자 타입이 없고 문자열의 내용 또한 변경할 수 없다.
  그렇기 때문에 문자열을 가공하려면 먼저 문자열을 배열로 전환해야 한다.

  (delemiter 구분자)
  split(구분자: string): string[]

 배열은 *.join 메서드로 문자열 변환이 가능하다.
*/

/* 
  for in 문
  배열의 index 값을 순회한다.
  
  for(let index in names) {
    const name = names[index];
    console.log(`${index}`: ${name})
  }
  객체에서도 순회가 가능하며, 순회 시 객체가 가진 속성(property)을 순회한다.
  let jack = {name: 'Jack;, age: 32}
  for (let property in jack){
    console.log(`${property}: ${jack[property]}`)
  }
*/

// let jack = { name: "Jack", age: 32 };
// for (let property in jack) {
//   console.log(`${property}: ${jack[property]}`);
// }

/*
  for of 문
  for(let 변수 of 객체) {

    ...
  }

  for ...in 문은 배열의 인덱스값을 대상으로 순회하지만 for ...of 문은 배열의 아이템 값으로 순회
*/

// for (let name of ["Jack", "Jane", "Steve"]) console.log(name);

/*
  제네릭 방식 타입
  배열을 다루는 함수를 작성할 때는 number[]와 같이 고정된 함수를 만들기 보다는
  배열의 아이템 타입을 한꺼번에 표현하는 것이 편리하다.
  타입을 T와 같은 일종의 변수(타입 변수)로 취급하는 것을 제네릭(generics)타입 이라고 한다.

  const arrayLength = (array) => array.length;

  위 배열의 길이를 구하는 함수가 number[], string[], IPerson[]등 다양한 아이템 타입을 가지는 배열에
  똑같이 사용되도록 하려면 타입 주석을  T[]로 표현한다.

  const arrayLength = (array: T[]):number => array.length;

  그런데 이렇게 하면 컴파일러갸 T의 의미를 알 수 있어야 한다.
  T가 타입 변수(type variable)라고 알려줘야 한다.

  배열의 길이를 구하는 함수와 배열이 비엇는지 판별하는 함수를 제네릭 함수 스타일로 구현하면?
  export const arrayLength = <T>(array: T[]):number => array.length;
  export const isEmpty = <T>(array: T[]):boolean => arrayLength<T>(array) === 0
  */

// const arrayLength = <T>(array: T[]): number => array.length;
// const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;

// let numArray: number[] = [1, 2, 3];
// let strArray: string[] = ["Hello", "World"];

// type IPerson = { name: string; age?: number };
// let personArray: IPerson[] = [{ name: "Jack" }, { name: "Jane", age: 32 }];

// console.log(
//   arrayLength(numArray),
//   arrayLength(strArray),
//   arrayLength(personArray),
//   isEmpty([]),
//   isEmpty([1])
// );

/*
  제네릭 함수의 타입 추론
  const identity = <T>(n: T):T => n;
  console.log(identity<boolean>)(true), // true
  identity(true) //true
  )

  제네릭 형태로 구현된 함수는 원칙적으로는 타입 변수를 아래처럼 해줘야 한다.
  identity<boolean>)(true)
  함수 이름<타입 변수>(매개변수)

  하지만 이런 코드는 번거로워서 타입스크립트는 타입 변수가 생략된 제네릭 함수를 만나면 타입 추론을 통해서
  생략 타입을 찾아낸다.
  identity(true) //true

  제네릭 함수의 함수 시그니처
  const f = <T>(cb: (arg: T, i?: number) => number): void => {};
*/

// range 함수는 재귀 함수 스타일로 동작하며, R.rage 처럼 from to까지 수로 구성된 배열을 생성해준다.
// const range = (from: number, to: number): number[] =>
//   from < to ? [from, ...range(from + 1, to)] : [];

/*
  선언형 프로그래밍과 배열

  명령형 프로그래밍이란?
  프로그램의 기본 형태는 입력 데이터를 얻고 가공한 다음, 결과를 출력하는 형태로 구성된다.
  - 입력 데이터 얻기
  - 입력 데이터 가공해 출력 데이터 생성
  - 출력 데이터 출력

  명령형 프로그래밍에서는 여러 개의 데이터를 대상으로 할 때 다음처럼 for 문을 사용해서 구현한다.
  for(; ; ){
    입력 데이터 얻기
    입력 데이터 가공해 출력 데이터 생성
    출력 데이터 출력
  }

 $$ 반면 선언형 프로그래밍은 시스템 자원의 효율적인 운용보다는 일괄된 문제 해결 구조에 집중한다.
 선언형 프로그래밍은 명령형 프로그래밍처럼 for 문을 사용하지 않고 모든 데이터를 배열에 담는다.
 그리고 문제가 해결될 때까지 끊임없이 또 다른 형태의 배열로 가공하는 방식을 구현한다.

 - 문제를 푸는 데 필요한 모든 데이터 배열에 저장
 - 입력 데이터 배열을 가공해 출력 데이터 배열 생성
 - 출력 데이터 배열에 담긴 아이템 출력
 */

// 1부터 100까지 더하기 문제 풀이 (명령형)
let sum = 0;
for (let val = 1; val <= 100; ) {
  sum += val++;
}
console.log(sum);

// 선언형으로 구현하기

const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

// 선언형은 데이터 생성과 가공 과정을 분리한다. (1,100)까지의 배열을 생성
let numbers: number[] = range(1, 100 + 1);
console.log(numbers);

// fold: 배열 데이터 접기
// 함수형 프로그래밍에서 폴드(fold)는 특별한 의미가 있는 용어다.
// 폴드는 [1 ... 100]형태의 배열 데이터를 가공해 5050과 같은 하나의 값을 생성할 때 사용한다.
/*
    배열의 아이템 타임이 T라고 할 때 배열은 T[]로 표현할 수 있는데
    폴드 함수는 T[] 타입 배열을 가공해 T타입 결과를 만들어 준다.
    폴드 함수의 동작 방식은 마치 부채처럼 배열을 펼처 놓은 다음, 부채를 접어서(fold) 결과를 만들어 내는 것으로 생각 가능
  */

const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initValue: T
) => {
  let result: T = initValue;
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};

let result = fold(numbers, (result, value) => result + value, 0);
console.log("result", result);

/*
  범용적이고 재사용 가능한 기능이란 관점에서 1~100까지 홀수의 합 구하기

*/

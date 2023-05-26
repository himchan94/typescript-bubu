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
const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

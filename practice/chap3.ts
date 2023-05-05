// type

// number
// boolean
// string
// object
// any
// undefined

// hierarchy

// any
// // // boolean string object
// // // // // // // // (class interface) <- under object
// // // // // undefined

// interface

// interface IPerson {
//   name: string;
//   age: number;
//   etc?: boolean;
// }

// function printMe(me: { name: string; age: number; etc?: boolean }) {
//   console.log(me.name, me.age, me?.etc);
// }

// class

// class Person1 {
//   name: string;
//   age?: number;
// }

// let jack1: Person1 = new Person1();

class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2("Jack", 32);
console.log(jack2);

// 접근 제한자(access modifier)
// public, private, protect

/*
인터페이스 구현
클래스가 인터페이스를 사용할 때, implements 키워드 사용

  ex)
  class 클래스 이름 implements 인터페이스 이름 {

  }
*/

interface IPerson4 {
  name: string;
  age?: number;
}

// way1
// class Person4 implements IPerson4 {
//   name: string;
//   age: number
// }

// way2
// class Person4 implements IPerson4 {
//   constructor(public name: string, public age?: number) {}
// }

/*
  추상클래스
  abstract 키워드 사용하며, 나를 상속하는 다른 클래스에서 이 속성이나 메서드 구현
*/

abstract class AbstractionPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

/*
  클래스 상속
  class 상속 클래스 extends 부모 클래스 {...}
*/

// class Person5 extends AbstractionPerson5 {
//   constructor(public name: string, age?: number) {
//     super(age);
//   }
// }

// let jack5: Person5 = new Person5("Jack", 32);

}

/*
  static 속성

  class 클래스 이름 {
    static 정적 속성 이름: 속성 타입
  }
*/

// class A {
//   static initValue = 1;
// }

// let initVal = A.initValue // 1

let person: object = { name: "himchan" };

// person.name

/*
Property 'name' does not exist on type 'object'.ts
*/

(<{ name: string }>person).name;

/*
타입 단언(type assertion)
(<타입>객체)
(객체 as 타입)
*/

interface INameable {
  name: string;
}

let obj: object = { name: "himchan" };

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

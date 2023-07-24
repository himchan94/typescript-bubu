# 클래스

클래스란 여러 가지 유사한 객체를 쉽게 생성하는 자바스크립트 최신 문법이다.

### example

```ts
var capt = {
  name: '캡틴',
  skill: '방패 던지기'
}

var lee = {
  name: '길벗',
  skill: '좋은 책 만들기'
}

...
```

위처럼 모양이 유사한 객체는 일일이 객체를 정의하기보다 다음과 같이 생성자 함수를 사용하는 것이 유리하다.

- 생성자 함수

```ts
function Person(name, skill) {
  this.name = name;
  this.skill = skill;
}

var capt = new Person("캡틴", "방패 던지기");
var lee = new Person("길벗", "좋은 책 만들기");
```

- 클래스
  위의 생성자 함수를 최신 자바스크립트 문법으로 표현하면 아래와 같다.

```ts
class Person {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }
}
```

### 클래스 기본 문법

```ts
function Person(name, skill) {
  this.name = name;
  this.skill = skill;
}

Person.prototype.sayHi = function () {
  console.log("hi");
};
```

위 코드는 Person() 생성자 함수에 sayHi라는 속성 함수를 추가한다.
속성 함수를 함수 안에 선언하지 않고, Person.prototype이라는 형태로 선언한 이유는 이어질
클래스 코드와 비교하기 위해서이다.

```ts
var joo = new Person("형주", "인프랩 운영");
```

```ts
console.log(joo.name); // 형주
console.log(joo.skill); //인프랩 운영
joo.sayHi(); // hi
```

위의 코드를 클래스로 옮기면 아래와 같다.

```ts
class Person {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }

  sayHi() {
    console.log("hi");
  }
}
```

위 Person 클래스 코드는 name과 skill 값을 받아 객체를 생성할 수 있게 생성자 메서드(constructor)를 선언하고, sayHi()라는 클래스 메서드(class method)를 선언한 코드다.
여기에서 name과 skill 속성을 클래스 필드(class field) 또는 클래스 속성(class property)라고 한다.
그리고 위의 클래스로 생성된 객체를 클래스 인스턴스(class instance)라고 한다.

### 클래스의 상속(inheritance)

```ts
class Person {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }

  sayHi() {
    console.log('hi');
  }

class Developer extends Person {
  constructor(name, skill){
    super(name, skill);
  }

  coding() {
    console.log('fun');
  }
}
```

### 타입스크립트의 클래스

```ts
class Chatgpt {
  constructor(name: string) {
    this.name = name; // ERROR : NAME DOES NOT EXSIT ON Chatgpt
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}
```

위처럼 타입스크립트로 클래스를 만들면 아래와 같은 에러가 발생한다.

```ts
this.name = name; // ERROR : NAME DOES NOT EXSIT ON Chatgpt
```

**_이유는 타입스크립트로 클래스를 작성할 때는 생성자 메서드에서 사용될 클래스 속성들을 미리 정의해줘야 하기 때문이다._**

// NO ERROR CODE

```ts
class Chatgpt {
  name: string;

  constructor(name: string) {
    this.name = name; // ERROR : NAME DOES NOT EXSIT ON Chatgpt
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}
```

### 클래스 접근 제어자

1. public : (default)
2. private : 클래스 코드 외부에서 클래스의 속성과 메서드를 접근할 수 없다.
3. protected : private 처럼 클래스 코드 외부에서 클래스의 속성과 메서드를 사용할 수는 없지만, 상속받은 클래스에서는 사용 가능하다.

### 클래스 접근 제어자는 코드의 실행까지 막아주지는 못한다.(컴파일 때 에러 컴출만 가능)

만약 실행까지 막고 싶다면, ECMA2020에 추가된 private 문법인 #을 적용하면 된다.

```ts
class Person {
  #name: string;
  #skill: string;

  constructor(name: string, skill: string) {
    this.#name = name;
    this.#skill = skill;
  }

  protected sayHi(): void {
    console.log("hi");
  }
}

class Developer extends Person {
  constructor(name: string, skill: string) {
    super(name, skill);
    this.sayHi();
  }

  coding(): void {
    console.log("fun doing" + this.#skill + "by" + this.#name);
  }
}

var capt = new Person("캡틴", "타입스크립트");
capt.sayHi();

var hulk = new Developer("헐크", "자바크스크립트");
hulk.coding();
```

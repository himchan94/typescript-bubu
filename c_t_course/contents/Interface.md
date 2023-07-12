- 타입스크립트에서 인터페이스랑 객체 타입을 정의할 떄 사용하는 문법

- 인터페이스로 타입을 정의할 수 있는 부분들

1. 객체의 속성과 속성 타입
2. 함수의 파라미터와 반환타입
3. 함수의 스펙(파라미터 개수와 반환값 여부 등)
4. 배열과 객체를 접근하는 방식
5. 클래스

# 인터페이스를 활용한 객체의 속성 정의

```ts
interface User {
  name: string;
  age: number;
}

var seho: User = { name: "세호", age: 36 };
```

# 인터페이스를 이용한 함수 타입 정의

```ts
interface Person {
  name: string;
  age: number;
}

function logAge(someone: Person) {
  console.log(someone.age);
}
```

# 인터페이스를 활용한 함수의 반환타입 지정

```ts
function getPerson(someone: Person): Person {
  return someone;
}
```

# 옵셔널 인터페이스

```ts
interface Person {
  name?: string;
  age: number;
}
```

# 인터페이스의 상속

- 클래스의 상속

```ts
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logAge() {
    console.log(this.age);
  }
}

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }

  logDeveloperInfo() {
    this.logAge();
    console.log(this.name);
    console.log(this.skill);
  }
}
```

- 인터페이스의 상속

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  skill: string;
}

var ironman: Developer = {
  name: "아이언맨",
  age: 21,
  skill: "만들기",
};
```

아래처럼 인터페이스를 정의한 것과 같다.

```ts
interface Developer {
  name: string;
  age: number;
  skill: string;
}
```

- 타입스크립트에서 인터페이스란 객체 타입을 정의할 때 사용하는 문법

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

- 인터페이스 상속 시 주의사항 1

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  name: number;
}
```

위 처럼, 상속받은 인터페이스의 속성을 재할당하면 에러가 발생한다.

- 인터페이스 상속 시 주의사항 2

```ts
interface Hero {
  power: boolean;
}

interface Person extends Hero {
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
  power: true,
};
```

위 처럼 연속 상속을 통한 정의도 가능하다.

# 배열 인덱싱 타입 정의

```ts
interface StringArray {
  [index: number]: string;
}

var companies: StringArray = ["삼성", "네이버", "구글"];
```

- Error

```ts
interface StringArray {
  [index: string]: string;
}

var companies: StringArray = ["삼성", "네이버", "구글"]; // 배열의 인덱스는 숫자이므로 에러가 발생한다.
```

# 객체의 인덱싱 타입 정의

```ts
interface SalaryMap {
  [level: string]: number;
}

var salary: SalaryMap = {
  junior: 100,
};
```

# 인덱스 시그니처

```ts
interface SalaryInfo {
  [level: string]: string;
}

var salary: SalaryInfo = {
  junior: "100원",
  mid: "300원",
  senior: "700원",
  ceo: "0원",
  newbie: "50원",
};
```

- 객체의 속성 이름과 개수가 구체적으로 정의되어 있다면 인터페이스에서 속성 이름과 속성 값의 타입을 명시하는 것이 더 효과적이다.
- 객체의 속성, 이름, 개수가 동적이라면 인덱스 시그니처가 효과적이다.

* 혼용도 가능하다

```ts
interface User {
  [property: string]: string;
  id: string;
  name: string;
}

var seho: User = {
  id: "1",
  name: "세호",
  address: "부산",
};
```

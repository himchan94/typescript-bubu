# 타입 별칭

- 타입에 의미를 부여해서 별도의 이름으로 부른 ㄴ 것

```ts
type MyName = string;
```

### 타입 별칭과 인터페이스의 차이점

- 코드 에디터에 표시되는 방식이 다르다. (타입 별칭은 타입의 속성을 보여주지만, 인터페이스는 인터페이스 이름으로 보여준다. 149p 참고)
- 사용할 수 있는 타입에 차이가 있다. (인터페이스는 주로 객체의 타입을 정의하는 데 사용하는 반면, 타입 별칭은 일반 타입에 이름을 짓는데 사용하거나, 유니언 타입, 인터섹션 타입 등에도 사용된다.)

- 타입 별칭의 병합

```ts
type Person {
  name: string;
  age: number;
}

type Developer = {
  skill: number;
}

var joo: Person & Developer = {
  name: '형주',
  age: 21,
  skill: "웹개발"
}
```

- 인터페이스의 병합

* 동일한 이름으로 인터페이스를 여러번 선언하면, 해당 인터페이스의 타입 내용으로 합쳐진다.

```ts
interface Person {
  name: string;
  age: number;
}

interface Person {
  address: string;
}

// 최종
interface Person {
  name: string;
  age: number;
  address: string;
}
```

### 타입 별칭은 언제 쓰는 것이 좋을까?

- open closed principle 관점에서는 인터페이스를 주로 사용하고, 타입 별칭이 필요할 때 쓰라고 한다.

1. 타입 별칭으로만 정의할 수 있는 타입 (ex, 주요 데이터 타입, 인터섹션, 유니언 타입)

```ts
type MyString = string;
type StringOrNumber = string | number;
type Admin = Person & Devloper;
```

또한 타입 별칭은 제네릭, 유틸리티 타입, 맵드 타입과도 연동해서 사용할 수 있다.

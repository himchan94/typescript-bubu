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

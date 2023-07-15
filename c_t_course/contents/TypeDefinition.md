# 연산자를 사용한 타입 정의

1. 유니언 타입
2. 유니언 타입의 자엊ㅁ
3. 유니언 타입을 사용할 때 주의할 점
4. 인터섹션 타입

### 유니언 타입

```ts
function logText(text: string | number) {
  console.log(text);
}
```

- 유니언 타입을 사용할 때 주의할 점

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}
```

```ts
function introduce(someone: Person | Developer) {
  console.log(someone.age); //type Error
}
```

- 인터페이스 유니언 타입에서는 가장 안전한 형태로 추론한다. 파라미터로 들어오는 객체가 Person에 해당 되는지, Developer에 해당되는 지 알 수 없으므로
  가장 안전한 형태, 즉 공통으로 포함하고 있는 name 만 추론한다.

### 만약 함수 내부에서 파라미터 타입의 종류에 따라 특정 로직을 실행하고 싶다면

```ts
function introduce(someone: Person | Developer) {
  if ("age" in someone) {
    console.log(some.age);
    return;
  }

  if ("skill" in someone) {
    console.log(someone.skill);
    return;
  }
}
```

```ts
function logText(text: string | number) {
  if (typeof text === "string") {
    console.log(text.toUpperCase());
  }

  if (typeof text === "number") {
    console.log(text.toLocaleString());
  }
}
```

### 인터섹션 타입

- 두 개의 타입을 하나로 합칠 수 있다.

```ts
interface Avenger {
  name: string;
}

interface Hero {
  skill: string;
}

function introduce(someone: Avenger & Hero) {
  console.log(someone.name);
  console.log(someone.age);
}
```

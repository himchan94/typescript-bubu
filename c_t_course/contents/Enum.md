# 이넘(enum)

### 이넘이란

특정 값의 집합을 의미하는 데이터 타입, 상수 집합이다.

```ts
enum ShoesBrand {
  Nike,
  Adidas,
  NewBalance,
}

var myShoes: ShoesBrand.Nike;
var yourShoes: ShoesBrand.NewBalance;
```

### 숫자형 이넘

이넘에 선언된 속성은 기본적으로 숫자 값을 가진다.

```ts
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // 0
```

```js
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));
```

result

```js
{0: 'Up', 1: 'Down', 2: 'Left', 3: 'Right', Up: 0, Down: 1, Left: 2, Right: 3}
```

위 처럼 이넘의 속성과 값이 거꾸로 연결되어 할당되는 것을 리버스 매핑이라고 한다.
만약 이넘의 초기값을 변경하고 싶다면?

```ts
// 초기값만 설정하면 자동으로 맵핑된다.
enum Direciton {
  Up = 10,
  Down, // 11
  Left, // 12,
  Right, // 13
}

// 아래처럼 명시적으로 선언도 가능하다.
enum Direction {
  Up = 10,
  Down = 11,
  Left = 12,
  Right = 13,
}
```

### 문자형 이넘

문자형 이넘이란 이넘의 속성 값에 문자열을 연결한 이널을 의미한다.
다, 문자열로 지정해주어야하며 선언된 속성 순서대로 값이 증가하는 규칙도 없다.

```ts
enum Direction {
  Up = "Up",
  Down = "Donw",
  Left = "Left",
  Right = "Right",
}
```

### 다양한 이넘의 특징

혼합이넘

```ts
enum Answer = {
  Yes = 'Yes',
  No = 1,
}
```

값의 정의 방식

```ts
enum Authorization {
  User, //0
  Admin, //1
  SuperAdmin = User + Admin, // 1
  God = "abc".length, //3
}
```

const Enum은 컴파일 후 일반 이넘으로 변환했을 때와 다르게 아무 값도 생성되지 않는다 (컴파일 했을 때 코드량이 줄어드는 장점이 있다.)
단, 항상 속성에 고정 값을 넣어줘야 한다.

```ts
const enum logLevel {
  Debug = "Debug",
  Info = "Info",
  Error = "Error",
}
```

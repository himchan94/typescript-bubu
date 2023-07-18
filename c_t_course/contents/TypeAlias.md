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

```ts
//제네릭
type Dropdonw<T> = {
  id: string;
  title: T;
};

//유틸리티 타입
type Admin = { name: string; age: number; role: string };
type OnlyName = Pick<Admin, "name">;

// 맵드 타입
type Picker<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

2. 백엔드와의 인터페이스 정의

```ts
// 1. 타입 별칭으로 API 함수의 응답 형태를 정의
type User = {
  id: string;
  name: string;
}

function fetchData(): User {
  return axios.get('http://localhost:3000/user/1');
}


// 2. 인터페이스로 API 함수의 응답 형태를 정의
interface User {
  id: string;
  name: string;
}

function fetchData: User {
  return axios.get('http://localhost:3000/user/1');
}
```

에디터의 미리보기 기능만 생각한다면 타입 별칭을 사용하는 것이 나쁘지는 않지만, 인터페이스를 이용했을 때의 장점이 더 크다

```ts
interface Admin {
  role: string;
  department: string;
}

// 상속을 통한 인터페이스 확장
interface User extends Admin {
  id: string;
  name: string;
}

// 선언 병합을 통한 타입 확장
interface User {
  skill: string;
}
```

```ts
interface User {
  id: string;
  name: string;
  role: string;
  department: string;
  skill: string;
}
```

위 처럼 유연하게 타입을 확장하는 관점에서는 타입 별칭보다 인터페이스가 더 유리하다.

# 제네릭

### 제네릭이란?
제네릭은 타입을 미리 정의하지 않고, 사용하는 시점에 원하는 타입을 정의해서 쓸 수 있는 문법이다.

### 제네릭 기본 문법
```ts
function getText<T>(text: T):T{
  return text;
}
```

```ts
getText<string>('hi');
```

```ts
function getText(text:string):string{}
```

### 제네릭을 사용하는 이유
1. 중복되는 타입 코드의 문제점
```ts
function getText(text:string):string {
  return text;
}


function getNumber(num: number):number {
  return num;
}

```
그렇다고, any를 사용하면 에러감지나 타입추론등의 기능을 사용할 수 없다.

### 인터페이스와 제네릭

```ts
interface AddressDropdown {
  value: {city: string, zipCode: string};
  selected: boolean;
}
```

```ts
interface Dropdonw<T>{
  value: T;
  selected: boolean;
}

```

### 제네릭의 타입 제약

1. extends를 사용한 타입 제약

```ts
function embraceEverything<T extends string>(thing: T): T{
  return thing;
}
```

일반적으로 타입을 제약할 때는 여러 개의 타입 중 몇 개만 쓸 수 있게 제약한다.
예를 들어 length 속성을 갖는 타입만 취급하겠다고 하면, string, array, object으로 제한된다.

```ts
function lengthOnly<T extends {length: number}>(value:T){
  return value.length;
}
```

```ts
lengthOnly('hi');
lengthOnly([1,2,3]);
lengthOnly({length: 123, title: 'abc'});

```

2. keyof를 사용한 타입제약
keyof는 특정 타입의 키 값을 추출해서 문자열 유니언 타입으로 변환해준다.
```ts
type DeveloperKeys = keyof {name: string; skill: string;}

```

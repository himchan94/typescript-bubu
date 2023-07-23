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

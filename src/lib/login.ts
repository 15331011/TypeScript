declare type Methods =
    | "GET"
    | "OPTIONS"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT";
const enumInit = <T>(arg: Array<T>): Array<T> => {
  enum status {
    start = 1,
    unpaid,
    shipping = 5,
    shipped,
    complete
  }
  let stringLength: number = arg.length;
  console.log(stringLength);
  console.log(status);
  return arg;
};
const symbolInit = <T>(arg: T): T => {
  const symbol = Symbol();
  const symbol1 = Symbol();
  const obj = {
    [symbol]: "12",
    [symbol1]: "122"
  };
  console.log(obj);
  console.log(obj[symbol1]);
  return arg;
};
const setInit = <T>(arg: T[]): T[] => {
  let s = new Set(arg);
  console.log(s);
  return arg;
};
const mapInit = <T>(arg: T[]): T[] => {
  let testArr = [];
  let m = new Map();
  for (let i = 0; i < arg.length; i++) {
    if (!m.get(arg[i])) {
      m.set(arg[i], 1);
      testArr.push(arg[i]);
    }
  }
  console.log(testArr);
  return arg;
};
// const hashUnique = <T>(arg: Array<T>) => {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, '1', '2'];
//   let hash = {};
//   for (let i = 0; i < arg.length; i++) {
//       let type = typeof arr[i]
//     if (!hash[arr[i] +typeof] {
//     }
//   }

//   var retArr = [];
//   for (var key in hash) {
//     if (hash[key]) {
//       retArr.push(parseInt(key));
//     }
//   }
//   return retArr;
// };
function* generator() {
  //   傳值
  const who = yield;
  console.log("hello " + who);
  //   try {
  //     yield 1;
  //   } catch (error) {
  //     console.log(error);
  //   }
}
function INTERFACE() {
  //   const diffTypePara = (para: number | string) => {
  //     console.log(typeof para);
  //   };
  //   interface A {
  //     a: string;
  //     b: object;
  //     c: number;
  //   }
  //   interface B {
  //     a: string;
  //     b: number;
  //     c: object;
  //   }
  //   //   let obj0: A & B;
  //   //   obj0.a = "obj0string";
  //   let a: A & B = { a: "", b: {}, c: 12 };
  //   a.a = "1212";
  //   console.log(a);
  //   diffTypePara("121");
  interface Teacher {
    teach(): void;
  }
  interface Student {
    learn(): void;
  }
  const getPerson = (): Student | Teacher => {
    return {} as Teacher;
  };
  function isTeacher(person: Teacher | Student): person is Teacher {
    return (<Teacher>person).teach !== undefined;
  }
  const person = getPerson();
  //   (<Student>person).learn();
  //   (<Teacher>person).teach();
  if (isTeacher(person)) {
    person.teach();
  } else {
    person.learn();
  }

  //   interface Type1 {
  //     func1(): void;
  //     func2(): void;
  //   }

  //   interface Type2 {
  //     func3(): void;
  //     func2(): void;
  //   }

  //   class Type1Class implements Type1 {
  //     func1(): void {
  //       console.log("func1 run");
  //     }

  //     func2(): void {
  //       console.log("func2 run");
  //     }
  //   }

  //   class Type2Class implements Type2 {
  //     func3(): void {
  //       console.log("func1 run");
  //     }

  //     func2(): void {
  //       console.log("func2 run");
  //     }
  //   }

  //   function getSomeType(type: string): Type1Class | Type2Class {
  //     if (type === "1") {
  //       return new Type1Class();
  //     }

  //     if (type === "2") {
  //       return new Type2Class();
  //     }

  //     throw new Error(`Excepted Type1Class or Type2Class, got ${type}`);
  //   }

  //   function isType1(type: Type1Class | Type2Class): type is Type1Class {
  //     return (<Type1Class>type).func1 !== undefined;
  //   }

  //   let type = getSomeType("1");
  //   if (isType1(type)) {
  //     type.func1();
  //   } else {
  //     type.func3();
  //   }
}
interface kk<T> {
  age: T;
}
function alias() {
  type Age = number;
  function getAge(arg: Age): Age {
    return arg;
  }
  let age: number;
  type kk<T> = { age: T };
  let aa: kk<number> = { age: 2 };
  console.log(aa.age);
}
function pluckPlus() {
  function pluck<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(name => obj[name]);
  }
  interface Person {
    name?: string;
    readonly age: number;
  }
  const person: Person = { age: 23 };
  console.log(person);
  console.log(pluck(person, ["name", "age"]));
  console.log(["1", "2", "3"].map(parseInt));
}
function typeReduction() {
  interface Person {
    name?: string;
  }
  let person: Person;
  const Alice = { name: "czl", age: 23 };
  person = Alice;
  console.log(person);
  let fun1 = (a: number, b: string) => 0;
  let fun2 = (a: number) => 0;
  fun1 = fun2;
  console.log(fun1);
}
function interfaceAndClass() {
  interface SquareConfig {
    color: string;
    width: number;
    age: number;
  }
  function createSquare(config: SquareConfig) {
    let newSquare: SquareConfig;
    newSquare = config;
  }
  let tempObj = {
    color: "blue",
    width: 100,
    age: 121,
    adsada: "asdad"
  };
  let mySquare = createSquare({
    color: "blue",
    width: 100,
    age: 121,
    adsada: "asdad"
  } as SquareConfig);
  console.log(mySquare);
}
function indexableType() {
  interface indexable {
    [index: number]: string;
  }
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Dog extends Animal {
    breed: string;
    constructor(breed: string) {
      super("12");
      this.breed = breed;
    }
  }
  interface NotKey {
    [x: string]: Dog;
    [y: number]: Dog;
  }
  interface randomTest {
    [x: string]: string;
  }
  let mmm: randomTest = { "1": "ada", 2: "12" };
  console.log(mmm[2]);
  interface Shape {
    color: string;
  }
  interface penStroke {
    penWidth: number;
  }
  // 继承
  interface Square extends Shape, penStroke {
    sideLength: number;
  }
  let square = <Square>{};
  square.color = "blue";
  square.sideLength = 1.0;
  square.penWidth = 5.0;
  console.log(square);

  class sqqquare implements penStroke {
    penWidth: number;
    setPenWidth(width: number) {
      this.penWidth = width;
    }
    constructor(width: number) {
      this.penWidth = width;
    }
  }
  let sqqqqq = <sqqquare>{};
  console.log(sqqqqq);
}
function formatDate (date: any, fmt: string){
  let time = "";
  const o: any = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    time = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      time = time.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  console.log(time)
  return time;
};
export {
  enumInit,
  symbolInit,
  setInit,
  mapInit,
  generator,
  INTERFACE,
  alias,
  pluckPlus,
  typeReduction,
  interfaceAndClass,
  indexableType,
  formatDate
};

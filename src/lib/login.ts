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
export {
  enumInit,
  symbolInit,
  setInit,
  mapInit,
  generator,
  INTERFACE,
  alias,
  pluckPlus,
  typeReduction
};

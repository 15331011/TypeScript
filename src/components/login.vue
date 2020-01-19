<template>
  <div>
    <input v-model="name" />
    <input v-model="passWord" />
    <span>这是本尊第一个页面</span>
  </div>
</template>
<script>
import {
  enumInit,
  symbolInit,
  setInit,
  mapInit,
  generator,
  INTERFACE,
  alias,
  pluckPlus,
  typeReduction
} from "@/lib/login.ts";
export default {
  data() {
    return {
      hasLogin: false,
      name: "name！11",
      passWord: "password22"
    };
  },
  methods: {},
  created() {
    enumInit(["1212", "3434", "5656"]);
    symbolInit(121);
    setInit(["A", "B", "B", "C", "C", "C", "C"]);
    mapInit(["A", "B", "B", "C", "C", "C", "C"]);
    let m = generator();
    console.log(m.next("generatorExample"));
    console.log(m.next("generatorExample11", "1212"));
    // INTERFACE();
    alias();
    pluckPlus();
    typeReduction();
  }
};
</script>

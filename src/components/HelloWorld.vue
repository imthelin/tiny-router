<template>
  <div class="hello">
    <div class="hash"><a href="/#/testHash">/#/testHash</a></div>
    <div class="hash"><a href="/#/testHash2">/#/testHash2</a></div>
    <div class="history">
      <a href="/testHistory">testHistory</a>
    </div>
    <div class="history">
      <a href="/testHistory2">testHistory2</a>
    </div>
    <div class="button" @click="startHash">
      {{state.hashTip}}
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
import setupListeners from '../utils/router/hash.js'
export default {
  name: 'HelloWorld',
  props: {},
  setup() {
    let state = reactive(
      {
        hashTip: 'add hash listeners'
      }
    )
    let startHash = () => {
      state.hashTip = 'added'
      setupListeners()
    }
    return {
      state,
      startHash
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hash {
  display: block;
  height: 50px;
  line-height: 50px;
  padding: 10px;
  margin: 10px;
  background-color: beige;
}
.history {
  display: block;
  height: 50px;
  line-height: 50px;
  padding: 10px;
  margin: 10px;
  background-color: rgb(82, 82, 38);
}
</style>

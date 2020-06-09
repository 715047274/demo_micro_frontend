<template>
    <div>
        <h1>{{title}}</h1>
        <input type="text" v-model="title">
        <button class="bg-green-500 text-color-white px-4 py-2" @click="addNumber">Add</button>
        <button class="bg-red-500 text-color-white px-4 py-2" @click="minusNumber">Minus</button>
        <h3>{{counter}}</h3>
    </div>
</template>

<script>
  export default {
    props: ['title'],
    data(){
      return {
        counter: 1
      }
    },
    methods:{
      addNumber(){
        this.counter++
        const event = new CustomEvent('addItem', {detail: this.counter})
        document.dispatchEvent(event)
      },
      minusNumber(){
        this.counter--
        const event = new CustomEvent('minusItem', {detail: this.counter})
        document.dispatchEvent(event)
      }
    }
  }
</script>


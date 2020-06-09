<template>
    <div class="bg-blue-500 text-white">
        This is the Counter Component
        {{title}}
        <h3 class="hello">{{counter}}</h3>
     </div>
</template>

<script>
  export default {
    props:['title'],
    name:'Counter',
    data(){
      return {
        counter: 0
      }
    },
    created(){
      this.counter = 1
    },
    mounted(){
      this.$nextTick(()=>{
        // console.error("counter app")
        document.addEventListener('addItem', this.itemSelected)
        document.addEventListener('minusItem', this.itemSelected)
      })
    },
    methods:{
      itemSelected({detail:counter}) {
        this.counter = counter
      }
    },
    beforeDestroy () {
      document.removeEventListener('addItem', this.itemSelected)
      document.removeEventListener('minusItem', this.itemSelected)

    }

  }
</script>
<style scoped>
    .hello{
        color: red;
    }
</style>

<template>
<div class="container">
  <div class="md:flex">
  <div class="md:flex-shrink-0">
    <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase">
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-blue-600 font-bold">Example for the tailwind css </div>
    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
    <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    <NuxtLink to="/" ><button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">go back</button></NuxtLink>
    <div clas="md:flex">
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase text-sm text-indigo-600 font-bold"> Example of the micro view vue</div>
        <nova name="Example" :data="{title: 'ara framework'}"></nova>
        <nova name="Counter" :data="{title: 'ara framework'}"></nova>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
  import Nova from 'nova-vue-bridge'
  export default {
    name: "DemoExample",
    head:{
      script: [
        { src: 'http://localhost:3030/client.js' },
        { src: 'http://localhost:3031/client.js' },
      ]
    },
    components:{
      Nova
    }
  }
</script>

<style scoped>

</style>

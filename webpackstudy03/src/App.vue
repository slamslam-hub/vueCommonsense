<template>
   <div>
       {{msg}}
   </div>
</template>

<script>
   export default {
       data(){
           return{
               msg:"我是单文件组件的入口"
           }
       },

   }
</script>

<style>
    body{
        background-image: url("./boot.png");
        /*background-color: red;*/
    }
</style>
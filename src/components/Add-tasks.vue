<template>
    <div class="add-todo">
        <h1>New Todo</h1>
        <h1>name :{{getTitle}} </h1>
        <input type="text" placeholder="Add Todo" />
        <button type="button" class="btn btn-add">Add</button>
    </div>
</template>

<script>
// import { computed } from 'vue'
import { store } from '../store.js'
export default {
  
     computed:{
            getTitle(){
                return  store.activeColTitle().name
                // console.log(name);
                // return name;
            }
        }
  

}
</script>

<style lang="scss" scoped>
</style>
<template>
    <div class="add-todo">
      
        <h1>New {{getTitle}} </h1>
        <input type="text" placeholder="Add Todo"  v-model="title"/>
        <button type="button" class="btn btn-add" @click="addTask(title)" >Add</button>
    </div>
</template>

<script>
// import { computed } from 'vue'
import { store } from '../store.js'
export default {
    data(){
       return{
        title:""
       }
    },
  
     computed:{
            getTitle(){
                const name= store.activeColTitle().name
                // console.log(name);
                return name;
            
            }
        },
        methods:{
            addTask(title){
                if(this.title!=""){
                 store.addTask(title)
                this.title=''
                }
               
            }
        }
  

}
</script>

<style lang="scss" scoped>
</style>
<template>
    <div class="col-item">
        
        <template v-if="colItem.edit">
             <input class="text-edit" type="text" :placeholder="colItem.title" v-model="textTitle"  />
             <button type="button" class="btn btn-editTask"  @click="editTitle(colItem.id,col.id,textTitle)">edit</button>
        </template>

        <template v-else>
            <h1>{{colItem.title}}</h1>
           <div class="buttons">
            <button type="button" class="btn btn-edit" @click="editTask(colItem.id,col.id)">Edit</button>
            <button type="button" class="btn btn-delete" @click="deleteTask(colItem.id,col.id)">Delete</button>
        </div>
        </template>

      


    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    data(){
       return{ 
        textTitle:''
       }
    },
   props:['colItem','col'],
   methods: {
    editTask(colItem,colId){
        store.editTask(colId,colItem)
    },
    editTitle(Itemid,colId,textTitle){
        store.editTitle(colId,Itemid,textTitle)
    },
    deleteTask(colItem,colId){
        store.deleteTask(colId,colItem)

    }
   }
}
</script>

<style scoped>
 h1{
    text-align: center;
    font-size:25px;
    /* text-transform: uppercase; */
    
 }
 .text-edit{
  height: 35px;
   width: 300px;
  padding-left: 8px;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 7px;
  font-size: 25px;
  letter-spacing: 2px
 }

 .btn-editTask{
    background:black;
    padding:3px 20px;
    margin: 2px 120px;

 }
</style>


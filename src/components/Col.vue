<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <div class="col " :class="{'active':col.active}" >
            <h1 @click="activeCol(col.id)">{{col.name}} </h1>
               <Col-item  v-for="task in col.tasks" :key="task.id"  :colItem="task"   />
        </div>
</template>

<script>
import ColItem from './Col-item'
import { store } from '../store.js'
    export default {
        components:{
            ColItem
        },
        // computed:{
        //     isActive(){
        //         return this.col.active
        //     }
        // },
        props:['col'],
        methods:{
            activeCol(id){
                store.storeActiveCol(id);
                store.activeColTitle()
            }
        }
    }
</script>

<style scoped>
h1{ 
    color: brown;
    cursor: pointer;
}
.active{
    background-color:rgb(177, 198, 206)
}

</style>


<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <div class="col">
            <h1>{{col.name}} </h1>
               <Col-item  v-for="task in col.tasks" :key="task.id"  :colItem="task" />
        </div>
</template>

<script>
import ColItem from './Col-item'
    export default {
        components:{
            ColItem
        },
        props:['col'],
       

    }
</script>

<style scoped>
h1{ 
    color: brown;
}

</style>


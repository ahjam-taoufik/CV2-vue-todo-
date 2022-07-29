<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <div class="col">
            <h1>{{title}} </h1>
             <Col-item />
        </div>
</template>

<script>
import ColItem from './Col-item'
    export default {
        components:{
            ColItem
        },
        props:['title'],
       

    }
</script>


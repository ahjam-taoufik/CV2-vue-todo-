<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="cols">
        <!-- <Col title="Todo" />
        <Col title="In Progress" />
        <Col title="Done" /> -->
        <Col v-for="col in state" :key="col.id"  :col="col" />
    </div>
</template>
<script>
import Col from './Col.vue'
import { store } from '../store.js'
export default {

    components: {
        Col
    },
    data() {
        return {
            state: store.state,
           
        }
    },
   
}
</script>
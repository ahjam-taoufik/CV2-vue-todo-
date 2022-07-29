<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="cols">
        <Col title="Todo" />
        <Col title="In Progress" />
        <Col title="Done" />
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
            state: store.state
        }
    }
}
</script>
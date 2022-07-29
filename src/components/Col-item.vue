<template>
    <div class="col-item">
        <h1>{{colItem.title}}</h1>
        <div class="buttons">
            <button type="button" class="btn btn-edit">Edit</button>
            <button type="button" class="btn btn-delete">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
   props:['colItem']
}
</script>

<style scoped>
 h1{
    text-align: center;
    font-size:25px;
    /* text-transform: uppercase; */
    
 }
</style>


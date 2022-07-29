<template>
  <div class="container">
    <h1 class="title">Board </h1>
      <div class="add-todo">
      <h1>New Todo</h1>
      <input type="text" placeholder="Add Todo" />
      <button type="button" class="btn btn-add">Add</button>
    </div>
    <hr>
      <Cols/>

  </div>
</template>

<script>
import Cols from './components/Cols.vue'
export default {
  name: 'App',
  components: {
    Cols
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title{
  position:absolute;
  top: 20px;
  left: 640px;
  margin-bottom: 10px;
  background-color: rgb(253, 225, 146);
  padding:10px 80px;
}

hr{
  border: 0.2 px solid;
  width:80%;
  margin-bottom: 15px;
  margin-top: 15px;
}
.container {
  position: relative;
  background-color: rgb(237, 237, 238);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding-top: 280px;
  width: 1480px;
  height: 100vh;
  margin-left: 20px;
  
}

.cols {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  /* background-color: rgb(244, 244, 255); */
  padding: 5px;
  width: 1400px;
  margin-bottom:40px;

 
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: rgb(253, 248, 239); */
  padding: 5px;
  /* margin: 10px; */
  width: 400px;
   box-shadow: 7px 9px 8px 1px rgba(0,0,0,0.46)  ;
 
}
.col-item{
  background-color: rgb(203, 213, 218);
  padding: 5px;
  margin: 5px;
  height:100px;
  width:350px

}
.buttons{
   margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color:rgb(247, 184, 184); */
}
.btn{
  padding: 5px 30px;
  margin-left: 10px;
  color: white;
  font-size:20px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
}
.btn:hover{
  background-color:rgb(250, 209, 209);
  transition: all 0.2s 0.1s ease-in-out;
}

.btn-edit{
  background-color:rgb(52, 171, 240)
}

.btn-delete{
  background-color:rgb(250, 99, 94);
}
.btn-add{
  background-color:rgb(73, 73, 73);
}
.add-todo{
   position:absolute;
  top: 85px;
  left: 565px;
  background-color:rgb(207, 207, 207);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-evenly;
  padding:10px;
  width:400px;
  height:200px;

  box-shadow: 7px 9px 8px 1px rgba(0,0,0,0.46)  ;
}

input{
  height:40px;
  width:350px;
  padding-left: 8px;
  font-size:25px;
  letter-spacing:2px
  
}


</style>

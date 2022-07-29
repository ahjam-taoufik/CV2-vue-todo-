import { Seed } from './seed.js';
export const store = {
  state: Seed,

  storeActiveCol(idCol) {
    this.state.map((s) => {
      if (s.id === idCol) {
        s.active = true;
      } else {
        s.active = false;
      }
    });
  },

  activeColTitle() {
    const obj = this.state.find((s) => s.active === true);
    return obj;
  },
  addTask(titleTask) {
    const t = this.activeColTitle().tasks;
    t.push({
      id: t.length + 1,
      title: titleTask,
      edit: false,
    });
  },
  editTask(colId, taskItem) {
    // console.log(colId,taskItem);
    const index = this.state.findIndex((s) => s.id === colId);
    const tasks = this.state[index].tasks;
    const taskindex = tasks.findIndex((s) => s.id === taskItem);
    const task = tasks[taskindex];
    task.edit=true;
    
    tasks.map(task=>task.id===taskItem?task.edit=true:task.edit=false)

    this.state.map(s=>{
        if(s.id!==colId){
            s.tasks.map(task=>task.edit=false) 
        }
    })
  
  },

  editTitle(colId, taskItem,textTitle){
    const index = this.state.findIndex((s) => s.id === colId);
    const tasks = this.state[index].tasks;
    const taskindex = tasks.findIndex((s) => s.id === taskItem);
    const task = tasks[taskindex];
    task.title=textTitle;
    task.edit=false;
  },

  deleteTask(colId, taskItem){
    console.log(colId, taskItem);
    const index = this.state.findIndex((s) => s.id === colId);
    const tasks = this.state[index].tasks;
    const taskindex = tasks.findIndex((s) => s.id === taskItem);
    tasks.splice(taskindex,1)

  }
};

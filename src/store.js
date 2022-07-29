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

  activeColTitle(){
    const obj= this.state.find(s => s.active === true);
    return obj.name
    
    
  }



 
};

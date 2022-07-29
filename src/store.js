import { Seed } from './seed.js';
export const store = {
  state: Seed,
  titleActive:'',
 
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
    return this.state.find(s => s.active === true);
    // const t= this.state.find(s => s.active === true);
    // this.titleActive=t
    
  }



 
};

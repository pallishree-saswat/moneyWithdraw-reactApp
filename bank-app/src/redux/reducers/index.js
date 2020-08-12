

const Reducer = (state ={value:200000,pic:"https://i.pravatar.cc/150?img=1",name:"pallishree"}, action) =>{
    switch(action.type){
      case "addValue":
          return{ ...state, value:state.value + action.value}
         break; 
       case "decreaseValues":
        return{ ...state, value:state.value  - action.value }
        break;
       case "resetValues":
        return{ ...state, value:0} 
   
       default:
           return state;
        }

}


export default Reducer;
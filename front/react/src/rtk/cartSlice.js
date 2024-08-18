import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cartSlice",
    initialState:[],
    reducers :{
        addProduct : (state,action)=>{
            var c = false;
            const product = action.payload;
            state.map((el)=>{
                if (el.id === product.id){
                    c = true;
                    el.count +=1;
                }
            })
            if(!c){
                product.count = 1;
                state.push(product);
            }
        },
        removeProduct : (state,action)=>{
            const {i,dec}=action.payload;
            if((!(--state[i].count))||(!dec))
                state.splice(i,1);
        }
    }
})


export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;
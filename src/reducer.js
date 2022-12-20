export const initialState={
    basket:[],
    user:null
}
export const getbasketTotal=basket=>
    basket?.reduce((amount,item)=>item.price+amount,0)

function reducer(state,action){
    console.log('action',action)
    // console.log(state)
    switch(action.type){
        case "CASE_USER":
            return {
                ...state,user:action.user
            }
        case "ADD_TO_BASKET":
            return {...state,
                basket:[...state.basket,action.item]}
            case "REMOVE_FROM_BASKET":
                let newBasket=[...state.basket];
                const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
                if(index>=0){
                    newBasket.splice(index,1)

                }else{
                    console.warn(`Can't remove product (id: ${action.id} as it's not a basket `)
                }
                return {...state,
                    basket:newBasket}
            default:
                return state;
    }
}
export default reducer
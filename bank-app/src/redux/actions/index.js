export const increament = (newValue) =>{
    return {
        type:"addValue",
        value:newValue
    }
}

export const decreament = (decreaseValues) => {
    return{
        type:"decreaseValues",
        value:decreaseValues
    }
}

export const reset = () => {
    return {
        type:"resetValues"
    }
}
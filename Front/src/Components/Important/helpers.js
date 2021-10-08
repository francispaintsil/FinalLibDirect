export const loginResponse = async (res) =>{
    if(!(res.length <= 0)){
        console.log(await res);
        return await res;
    }else{
        return 'none';
    }
}

export const loginError = (err) =>{
    console.log(err)
}


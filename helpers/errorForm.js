function error(value){
    if(value[0].message){
        value.map(data => {
            data.message
        })
    }
    else{
        value
    }
}

module.exports = error
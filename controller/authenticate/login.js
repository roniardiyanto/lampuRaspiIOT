    var login =function(user,password){

    console.log(user,password)
    if(user==="kitabisa" && password==="smkbisa"){
        return true;
    }
    else{
        return false;
    }
}

module.exports=login;
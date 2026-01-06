const task = require ('../models/task') 

const getalltasks = (req , res)=>{ 
    res.send("all items from the files  ")

}

const createtasks = (req , res)=>{ 
    res.send("create taks   ")

}

const getsingletasks = (req , res)=>{ 
    res.send("get one single task harsh  ")

}

const updatetask = (req , res)=>{ 
    res.send("update task  ")

}

const deletetasks = (req , res)=>{ 
    res.send("delte tasks ")

}

module.exports = {
    getalltasks,
    createtasks,
    getsingletasks,
    updatetask,
    deletetasks


}
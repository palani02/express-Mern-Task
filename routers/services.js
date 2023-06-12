const express = require('express');
const router = express.Router();


let serviceAvailables = [
    {
        "id":1,
        "Name":"Cloud Service"
    },
    {
        
        "id":2,
        "Name":"Sass Service"
    },
    {
        
        "id":3,
        "Name":"Saas Service"
    },
    {
        "id":4,
        "Name":"HR Management Service"
    },
    {
        "id":5,
        "Name":"App Development"
    },
    {
        "id":6,
        "Name":"Devops services"
    }
]
router.get('/:id',(request,response)=>{
    const index_val = request.params.id;
    // response.send("Service page")
    // response.send(request.params.id)
    console.log(serviceAvailables[index_val]);
    response.send(serviceAvailables[index_val])
})

router.patch('/:id',(request,response)=>{
    response.send("patch method")
})

router.delete('/:id',(request,response)=>{
    response.send("delete method")
})




module.exports = router
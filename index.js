 // import express
 const express = require('express')

 const cors = require('cors')
  
 const logic = require('./Services/logics')

 // create application

 const cmsServer =express()

 cmsServer.use(cors({
    origin:'http://localhost:3000'
 }))

// create middleware
cmsServer.use(express.json())

// define port
cmsServer.listen(8000,()=>{
    console.log("cmsServer listening on the port 8000");
})

// Api call for get all contacts
cmsServer.get('/get-all-contacts',(req,res)=>{
    logic.getAllcontacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// api call  for add a contact
cmsServer.post('/add-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.name,req.body.address,req.body.email,req.body.phonenumber).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// api call for delete a contact
cmsServer.delete('/delete-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// Api call for get a contact
cmsServer.get('/get-an-contact/:id',(req,res)=>{
    logic.getAnContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// api call for update a contact
cmsServer.post('/update-an-contact/:id',(req,res)=>{
    logic.updateContact(req.params.id,req.body.name,req.body.address,req.body.email,req.body.phonenumber).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


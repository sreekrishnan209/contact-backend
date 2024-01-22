  // import db.js
  const db =require('../Services/db')

  // logic for get all contacts
  const getAllcontacts=()=>{
    return db.contact.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contacts:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contacts not found'
                }
            }
        }
    )
  }

  // logic for add a contact
  const addContact=(id,name,address,email,phonenumber)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Contact already exists"
            }
        }
        else{
            const newContact=new db.contact({id,name,address,email,phonenumber})
            newContact.save()
            return{
                statusCode:200,
                message:"Contact added successfully..."
            }
        }
    })
  }

  // logic for delete a contact
  const deleteContact =(id)=>{
    return db.contact.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Contact deleted successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Can't delete this contact"
            }
        }
    })

  }

  // logic for get a contact
  const getAnContact=(id)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contacts:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contacts not found'
                }
            }
        }
    )
  }

  // logic for update a contact
  const updateContact=(id,name,address,email,phonenumber)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if(result){

                //updated contact details to the mongoDB
                result.id=id;
                result.name=name;
                result.address=address;
                result.email=email;
                result.phonenumber=phonenumber;

                // to save the contact details to the mongoDB
                result.save();

                return{
                    statusCode:200,
                    message:"Contact details updated successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contact not found'
                }
            }
        }
    )
  }




  module.exports={
    getAllcontacts,
    addContact,
    deleteContact,
    getAnContact,
    updateContact
  }
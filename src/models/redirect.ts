import mongoose from 'mongoose';
const { Schema } = mongoose;

//This is how it will look in the DB
const blogSchema = new Schema<IRedirect> ({
        key:{
            type: String,
            required:true
        },
        url:{
            type: String,
            required:true
        },
    }, 

    { 
        versionKey: false 
    },
);

//IMPORTANT: The first one checks if the model already exists, the second one creates it. THIS IS NECESSARY.
//This fixes "Cannot overwrite `redirect` model once compiled."
const redirect = mongoose.models.redirect || mongoose.model('redirect', blogSchema);
export default redirect;
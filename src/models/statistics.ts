import mongoose from 'mongoose';
const { Schema } = mongoose;

//This is how it will look in the DB
const blogSchema = new Schema<IStatistics> ({
        key:{
            type: String,
            required:true
        },
        clicked:{
            type: Date,
            required:true
        },
        language:{
            type: String,
            required:true
        },
        browser_agent:{
            type: String,
            required:true,
        },
        browser:{
            type: String,
            required:true,
        },
        platform: {
            type: String,
            required:true,
        },
        user_OS:{
            type: String,
            required: true,
        }
    }, 

    { 
        versionKey: false 
    },
);

//IMPORTANT: The first one checks if the model already exists, the second one creates it. THIS IS NECESSARY.
//This fixes "Cannot overwrite `redirect` model once compiled."
const statistics = mongoose.models.statistics || mongoose.model('statistics', blogSchema);
export default statistics;
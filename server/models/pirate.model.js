const mongoose = require("mongoose")

// DEFINE SCHEMA
const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [
            true,
            "Name is required"
        ],
        minLength: 1
    },
    image_url:{
        type:String,
        required: [
            true,
            "Image URL is required"
        ],
        minLength: 1
    },
    number_of_chests:{
        type:Number,
        required: [
            true,
            "Chest # is required"
        ]
    },
    catch_phrase:{
        type:String,
        required: [
            true,
            "Need a catch phrase"
        ],
        minLength: 1
    },
    crew_position:{
        type:String,
        required: [
            true,
            "Need a crew position"
        ],
        minLength: 1
    },
    peg_leg:{
        type:Boolean,
        required: [
            true,
            "Alive is required"
        ]
    },
    eye_patch:{
        type:Boolean,
        required: [
            true,
            "Alive is required"
        ]
    },
    hook_hand:{
        type:Boolean,
        required: [
            true,
            "Alive is required"
        ]
    }
}, {timestamps:true});

// REGISTER SHCEMA
const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    mobNum: {
        required: true,
        typer: Number
    }
}
);

module.exports = mongoose.model('Item', dataSchema);
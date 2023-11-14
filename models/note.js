const mongoose = import('mongoose');
const Schema = mongoose.Schema();

const noteSchema = new Schema({
    text: { type: String, required: true },
    user: {type: ObjectId, required: true}
}, {
    timestamps: true
});

module.exports = noteSchema;
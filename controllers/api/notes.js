const Note = require('../../models/note');

module.exports = {
    index
};

async function index(req,res) {
    // notes-api -> routes -> controller
    const notes = await Note.find({ user: req.user._id});
    res.json(notes);
}
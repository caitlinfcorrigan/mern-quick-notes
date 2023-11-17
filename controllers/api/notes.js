const Note = require('../../models/note');

module.exports = {
    index,
    create
};

async function create(req,res) {
    try {
        const note = await Note.create(req.body);
        res.json(note)
    } catch (err) {
        res.status(400).json(err);
        console.log(err)
    }
}

async function index(req,res) {
    // notes-api -> routes -> controller
    const notes = await Note.find({ user: req.user._id});
    res.json(notes);
}
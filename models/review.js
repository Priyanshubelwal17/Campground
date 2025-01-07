const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
<<<<<<< HEAD
});
=======
})
>>>>>>> f489baeb5bf276d55accee7d20a45336a177d8a5

module.exports = mongoose.model("Review", reviewSchema);
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
image: {
    type: String,
    required: true,
    trim: true,
  },
  categories: {
    type: String,
    required: true
  },


});

module.exports = mongoose.model('Gallery', GallerySchema);
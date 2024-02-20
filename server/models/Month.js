const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monthSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  days: [ // Define nestedDocuments as an array
    {
      day: String,
      recap: String,
      tplan: String,
      dream: String,
      goals: Object // Or define a sub-schema if you have fixed fields
    }
  ]
}, {
  timestamps: true,
  collection: 'months'
});

module.exports = mongoose.model('Month', monthSchema);

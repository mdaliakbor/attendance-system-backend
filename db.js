const mongoose = require('mongoose')

function connectDB(connectingStr){
  return  mongoose.connect(connectingStr)
}

module.exports = connectDB
const mongoose = require('mongoose');
const database=()=>{


mongoose.connect('mongodb://localhost:27017/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB', error);
});
}
module.exports=database;
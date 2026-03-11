const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017/students';

mongoose.connect(dbUri).then(() => {
    console.log('Connected to MongoDB');

    async function runQueries() {
        try {
            const topStudents = await Student.find().sort({ cgpa: -1 }).limit(3);
            console.log('Top 3 CGPA Students:', topStudents);

            const lowStudents = await Student.find({ cgpa: { $lt: 2.0 } });
            console.log('\nStudents with CGPA < 2.0:', lowStudents);

            const cityStudents = await Student.aggregate([
                { $group: { _id: '$city' }, }
            ]);
            console.log('\nStudents grouped by cities:', cityStudents);
        } catch (err) {
            console.error('Error: ', err);
        }
    }

    runQueries();

}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

var studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    cgpa: Number,
    city: String,
});

const Student = mongoose.model('Student', studentSchema);

import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
}, { timestamps: true }); // Automatically manages createdAt and updatedAt fields

const Event = mongoose.model('Event', eventSchema);

export { Event };

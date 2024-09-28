import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                // Email regex validation
                return /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                // Phone number regex validation (adjust as needed)
                return /^\+?[1-9]\d{1,14}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum password length
    },
}, { timestamps: true }); // Automatically manages createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

export { User };

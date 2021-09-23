import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
      email: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/, 'Please enter a valid email'],
  },
  password: {
        type: String,
        required: true,
        minlength: 4,
        trim:true
    }
 
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) { 
            return cb(err);
        }
        cb(null, isMatch);
    });
};

export default mongoose.model('User', UserSchema);




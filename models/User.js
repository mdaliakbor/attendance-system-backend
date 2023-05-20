const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User Name required"],
    minlength: [3, "Minimum Length 3 Character"],
  },
  email: {
    type: String,
    required: [true, "User Email required"],
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password required"],
    minlength: [6, " Password is too short"],
  },
  roles: {
    type: [String],
    required: true,
    default: "STUDENT",
  },
  accountStatus: {
    type: String,
    enum: ["PENDING", "ACTIVE", "REJECTED"],
    default: "PENDING",
  },
});

const User = model("User", userSchema);
module.exports = User;

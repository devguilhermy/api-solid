import mongoose from "../database";

interface UserDoc extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema<UserDoc>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };

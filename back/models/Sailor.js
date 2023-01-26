import mongoose from "mongoose";

// const schemaOptions = {
//     versionKey: false,
//     timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
// };

const sailorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // schemaOptions,
});

sailorSchema.methods.hi = function speak() {
    const greeting = "Hiho there ! My name is " + this.name;
    console.log(greeting);
};

export default mongoose.model("Sailor", sailorSchema);

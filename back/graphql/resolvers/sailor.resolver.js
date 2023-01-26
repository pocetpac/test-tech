import Sailor from "../../models/Sailor.js";

export default {
    Query: {
        getSailors: async () => {
            try {
                const allSailors = await Sailor.find();
                console.log(allSailors);
                return allSailors;
            } catch (err) {
                console.log(err);
                throw err;
            }
        },
    },
    Mutation: {
        addSailor: async (_, args) => {
            let name = args.addSailorInput;

            const sailor = await Sailor.create(name);
            return sailor;
        },
    },
};

const { GraphQLError } = require("graphql");
const { User } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                console.log(userData)
                return userData;
            }
            throw new GraphQLError("You need to be logged in!", {
                extensions: {
                    code: "UNAUTHENTICATED",
                },
            });
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new GraphQLError("No profile with this email found!", {
                    extensions: {
                        code: "UNAUTHENTICATED",
                    },
                });
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new GraphQLError("Incorrect password!", {
                    extensions: {
                        code: "UNAUTHENTICATED",
                    },
                });
            }
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, args, context) => {
            console.log("aqui ando")
            console.log("libro")
            console.log(args);
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet:
                            { savedBooks: args }
                    },
                    { new: true }
                )
                return updatedUser;
            }
            throw new GraphQLError("You need to be logged in!", {
                extensions: {
                    code: "UNAUTHENTICATED",
                },
            });
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $pull:
                        {
                            savedBooks:
                                { bookId: bookId }
                        }
                    },
                    { new: true }
                )
                return updatedUser;
            }
        }
    }
};




module.exports = resolvers;
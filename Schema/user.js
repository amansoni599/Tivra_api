// const {UserTC}=require("../model/GraphQLModel/user.GraphQL.model");
// const {UserSchema}=require("../model/GraphQLModel/user.GraphQL.model");


// UserTC.addResolver({
// name:"create",
// kind:"mutation",
// type:UserTC.getResolver("createOne").getType(),
// args:UserTC.getResolver("createOne").getArgs(),
// resolve: async({source, args, context, info }) => {
//     const user = await UserSchema.create(args.record);

//     return {
//       record: user,
//       recordId: UserTC.getRecordIdFn()(user),
//     };
// },
// });


// const UserQuery = {
//     userById: UserTC.getResolver("findById"),
//     userByIds: UserTC.getResolver("findByIds"),
//     userOne: UserTC.getResolver("findOne"),
//     userMany: UserTC.getResolver("findMany"),
//     userCount: UserTC.getResolver("count"),
//     userConnection: UserTC.getResolver("connection"),
//     userPagination: UserTC.getResolver("pagination"),
//   };

// // module.exports = { BookQuery: UserQuery, BookMutation: BookMutation };


// module.exports = { BookQuery: UserQuery };

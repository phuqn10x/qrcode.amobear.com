// import { AuthOptions } from "next-auth";
// import type { Adapter } from "next-auth/adapters";
// import DiscordProvider from "next-auth/providers/discord";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import FaceBookProvider from "next-auth/providers/facebook";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import { connectToDatabase } from "./lib/server/mongodb";
// import { ObjectId } from "mongodb";
// import { checkAndUpdateUserTier } from "./app/api/user/service";

// export enum UserTier {
//   Trial = 0,
//   Alpha,
// }

// const auth: AuthOptions = {
//   providers: [
//     DiscordProvider({
//       clientId: process.env.DISCORD_CLIENT_ID!,
//       clientSecret: process.env.DISCORD_CLIENT_SECRET!
//     }),
//     // GitHubProvider({
//     //   clientId: process.env.GITHUB_CLIENT_ID!,
//     //   clientSecret: process.env.GITHUB_CLIENT_SECRET!
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_CLIENT_ID!,
//     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//     // }),
//     // FaceBookProvider({
//     //   clientId: process.env.FACEBOOK_CLIENT_ID!,
//     //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
//     // })
//   ],
//   adapter: MongoDBAdapter(
//     connectToDatabase().then((res) => res.client),
//     {
//       databaseName: "lc_auth",
//     },
//   ) as Adapter,
//   callbacks: {
//     session: async ({ session, user }) => {
//       user.tier = await checkAndUpdateUserTier(user);

//       session.user.id = user.id;
//       session.user.tier = user.tier || UserTier.Trial;
//       session.user.subscribe_time = user.subscribe_time;
//       session.user.subscribe_expire = user.subscribe_expire;
//       return session;
//     },
//   },
//   secret: process.env.JWT_SECRET,
//   pages: {
//     signIn: "/signin",
//   },
// };

// export default auth;

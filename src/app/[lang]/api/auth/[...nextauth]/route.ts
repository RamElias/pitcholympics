import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@/models/user'
import { connectToDB } from '@/utils/database'

export type CustomUser = {
    id?: string | null;
    name?: string | null;
    email?: string | null;
};

export const authOptions: NextAuthOptions = {



    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session?.user?.email });
            //@ts-ignore
            session.user.id = sessionUser._id.toString()

            return session;
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();

                // check if user already exists
                const userExists = await User.findOne({ email: profile?.email });

                // if not, create a new document and save user in MongoDB
                if (!userExists) {
                    await User.create({
                        email: profile?.email,
                        username: profile?.name?.replace(" ", "").toLowerCase(),
                    });
                }

                return true
            } catch (error) {
                console.log(`Error checking if user exists: ${error instanceof Error ? error.message : error}`);
                return false
            }
        },
    }
};

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

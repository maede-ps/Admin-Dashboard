import NextAuth ,{NextAuthOptions} from "../../../../node_modules/next-auth/index";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            authorization:{
                params:{
                    prompt: "consent",
                    access_type:"offline",
                    reponse_type:"code"
                }
            }
        })
    ]
}

export default NextAuth(authOptions)
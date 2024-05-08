import  CredentialsProvider  from "next-auth/providers/credentials";
export const authOptions = {
    providers:[
        CredentialsProvider({
            name:'Email',
            credentials :{
                username:{label:"email",type:'text',placeholder:"Email"},
                password:{label:'password',type:'password',placeholder:"Password"}
            },
            async authorize(credentials:any){
                return { 
                    id:"User",
                    name:'Yash',
                    email:credentials.email
                }
            }
            
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
}
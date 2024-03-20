import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const User= prisma.user;

async function insertUser(email:string,password:string,firstname:string,lastname:string){
    const res = await User.create({
        data:{
            email,
            password,
            firstname,
            lastname
        },
        select:{
            id:true,
            password:true
        }
    })
    console.log(res)
}
insertUser("test2fsafafaFSDADFASd2@email.com","password123fds","John","Doe");
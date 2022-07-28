import { PrismaClient } from '@prisma/client'

import { useSession } from 'next-auth/react'

const prisma = new PrismaClient()
/*
async function main(){
    const { data: session, status } = useSession()

    if(session && status=='authenticated'){
        const user = await prisma.user.create({
            data:{
                nickName: session.user.name,
                email: session.user.email,
                avatarUrl: session.user.image,
            },
        })
    }
}

main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch(async(e)=>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
*/
//export default prisma;
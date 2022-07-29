import prisma from "../../../lib/prisma"

export default async function handle(req,res){
    try{
        const email = req.query.email

        if(req.method === "GET"){
            handleGET(email,res)
        }
    }
    catch(error){
        res.json(error);
        res.status(405).end()
    }


    
}

async function handleGET(email,res){
    const user = await prisma.user.findUnique({
        where:{
            email: String(email)
        },
    })
    res.status(200).json(user)
}
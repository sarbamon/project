import {mongodbClient} from "mongodb";
import {nextResponse} from 'next/server'

const client = new mongoClient(process.env.MONGODB!);

export async function POST(req.Request){
    try{
        const{name} = wait req.json();
        if (typeof name!=="string" || !name.trim()){
            return NextResponse.json(
                {error:"name reqired"}
                {status:400}
            )
        }

        await client.connect();
    }
}
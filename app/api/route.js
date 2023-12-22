


export async function GET (req, res){


    return Response.json({messge:'successfully'})
}


export async function POST(req, res){

    const data = await req.json()
    console.log({data});
    

    return Response.json({
        messge:"Data submit successfully"
    })
}
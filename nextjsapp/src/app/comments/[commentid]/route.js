import { comments } from "../data"


// placing '_' in request param as we are not using it 
//_request represents the incoming HTTP request. Even if you’re not directly using it in your API route handler, it still needs to be present in the function signature. The reason for this is that Next.js API routes are built on top of the concept of serverless functions
export async function GET(_response , context){
    const requestcommentid = context.params.commentid
    const fetchdata = comments.find(comment => comment.id === parseInt(requestcommentid))
    return Response.json(fetchdata)
}


export async function PATCH(request , context){
     const body = await request.json()
     const { text } = body
     const index = comments.findIndex( comment => comment.id === parseInt(context.params.commentid))
     comments[index].text = text 
     
     return new Response(JSON.stringify(comments[index]) , 
        {
            headers :{
                "Content-Type" : "application/json"
            } , 
            status : 200
        }
     )

}


export async function DELETE(_request , context ){
    const findcommentindex = comments.findIndex(comment =>comment.id === parseInt(context.params.commentid)) 
    const deletedComment  = comments[findcommentindex]
    comments.splice(findcommentindex , 1)
    return Response.json(deletedComment)
}

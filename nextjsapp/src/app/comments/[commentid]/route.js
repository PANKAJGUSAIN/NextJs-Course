import { comments } from "../data"


// placing '_' in request param as we are not using it 
//_request represents the incoming HTTP request. Even if you’re not directly using it in your API route handler, it still needs to be present in the function signature. The reason for this is that Next.js API routes are built on top of the concept of serverless functions
export async function GET(_response , context){
    const requestcommentid = context.params.commentid
    const fetchdata = comments.find(comment => comment.id === parseInt(requestcommentid))
    return Response.json(fetchdata)
}
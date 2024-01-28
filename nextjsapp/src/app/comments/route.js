import {comments} from './data'

export async function GET(){
    return Response.json(comments)
}

export async function POST(request){
   const comment = await request.json()  // gets the new comment  from the request 
   const newComment = {                 // provides the new comment with id 
    id : comments.length + 1 , 
    text: comment.text
   }

   comments.push(newComment)                // pushes the new comment to the 
    return new Response(JSON.stringify(newComment) , {
        headers :{ 
            "Content-Type" :"application/json"
        } , 
        status : 201
    })

}

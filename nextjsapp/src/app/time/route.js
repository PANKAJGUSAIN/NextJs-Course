// for mot caching the response
export const dynamic = "force-dynamic"   // default value of dynamic is 'auto' which means to cache as much as possible 

export async function GET(){
    // const header = request.headers  way 2 
    return Response.json({
        time : new Date().toLocaleString()
    })
}
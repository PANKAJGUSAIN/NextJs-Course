export const metadata = {
    title :{
        absolute:'Docs Page'
    }
}
export default function Docs(props){
    if(props.params.slug.length == 2){
        return <h1>Viewing docs for feature {props.params.slug[0]} and concept {props.params.slug[0]}  </h1>
    }
    else if(props.params.slug.length == 1){
        return <h1>Viewing docs for feature {props.params.slug[0]}</h1>
    }
    return <h1>Docs Home Page</h1>
}
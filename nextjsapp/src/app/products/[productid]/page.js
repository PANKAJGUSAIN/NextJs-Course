export default function productdetails(props){
    // console.log not displaying on the developers tool why? but id is showing fine on the ui
    // console.log('fetching product id from route params' , props)
    // once we get the id we can make the api calls and get the details and render it 
    return <h1>product details section {props.params.productid}</h1>
}
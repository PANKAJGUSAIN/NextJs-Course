export default function PagefeedLayout (props){
    console.log(props)
    return (
        <>
        {props.modal}
        {props.children}
        </>

    )
}
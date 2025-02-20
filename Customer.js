const Customer = (props) => {
    // let id = props.data.id;
    // let name = props.data.name;
    // let email = props.data.email;
    let { id, name, email } = props.data
    return(
        <div>
            {/* <h1>Id: { props.data.id }, Name: { props.data.name }, Email: {props.data.email }</h1> */}
            <h1>Id: { id }, Name: { name }, Email: {email }</h1>
        </div>
    )
}
export default Customer;

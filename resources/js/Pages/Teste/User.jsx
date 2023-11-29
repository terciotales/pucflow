export default function User(props) {
    const {
        name,
        email
    } = props;

    return (
        <>
            <h1>{name}</h1>
            <br></br>
            <h2>{email}</h2>
        </>
    );
}

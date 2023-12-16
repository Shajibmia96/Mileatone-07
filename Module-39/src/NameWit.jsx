export default function NameWit(info){
    console.log(info)
        const {name , email} = info;
    return(
        <div className="box">
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )

}
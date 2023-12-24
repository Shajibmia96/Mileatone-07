


const Watch =({watch}) => {
    // console.log(watch)
    const {name , price} = watch

    return (
        <div>
             <h1>This is watch</h1>
             <h4>Watch name : {name}</h4>
             <p>prices : {price}</p>
        </div>
    );
};

export default Watch;
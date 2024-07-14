const Test = (props)=>{
    console.log(props);
    const {data} = props;
    return(
        <div>
            <h1>{data}</h1>
        </div>
    );
}

export default Test;
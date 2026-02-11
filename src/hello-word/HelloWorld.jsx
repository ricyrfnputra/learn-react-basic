function HelloWorld() {
    const props = {     // add props
        text: "Hello World"
    }
    return (
        <div>
           <HeaderHelloWorld {...props}/>
           <ParagraphHelloWorld/>
        </div>
    )
} 

export default HelloWorld;

function HeaderHelloWorld({text = "Ups, lupa kasih teks"}){   // add props
    // const text = "Hello World";
    return (
         <h1 style={{
            color: "red",
            backgroundColor: "aqua"
         }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld(){
    const text = "Selamat belajar ReactJS";
    const style = {
        color: "blue",
        backgroundColor: "yellow"
    };
    return (
        <p style={style}>{text.toUpperCase()}</p>
    )
}


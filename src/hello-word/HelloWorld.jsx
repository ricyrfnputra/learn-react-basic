function HelloWorld() {
    const props = {     // add props
        text: "Hello World"
    }
    return (
        <div>
           <HeaderHelloWorld {...props}/>
           <ParagraphHelloWorld/>
           <TabelHelloWorld/>
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

function TabelHelloWorld(){
    const style = {
        color: "black",
        backgroundColor: "brown"
    };

    return (
        <table style={style} border="1">
            <thead>
                <tr>
                    <h1>Nama</h1>
                    <h1>Umur</h1>
                    <h1>Asal</h1>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Budi</th>
                    <th>20</th>
                    <th>Semarang</th>
                </tr>
            </tbody>
        </table>
    )
    
}


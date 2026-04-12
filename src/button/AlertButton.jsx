export default function AlertButton({text}) {
    function handleClick(){
        alert("Button clicked")
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}
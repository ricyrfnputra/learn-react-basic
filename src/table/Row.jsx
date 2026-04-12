let counter = 0;

export default function Row({text}) {
    return (
        <tr>
            <td>{counter}</td>
            <td>{text}</td>
        </tr>
    )
}
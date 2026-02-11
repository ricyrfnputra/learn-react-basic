import Todo from "./Todo"

export default function TodoList() {
    return (
        <ul>
            <Todo isCompleted={true} text="Learn HTML" isDeleted={true}/>
            <Todo isCompleted={true} text="Learn CSS"/>
            <Todo isCompleted={true} text="Learn JS"/>
            <Todo isCompleted={false} text="Learn REACTJS"/>
        </ul>
    )
}
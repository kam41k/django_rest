import React from "react";


const ToDoItem = ({item}) => {
    return(
        <tr>
            <td>
                {item.text}
            </td>
            <td>
                {item.user}
            </td>
            <td>
                {item.project}
            </td>
        </tr>
    )
}


const ToDoList = ({list}) => {
    return (
        <table>
            <th>
                To Do text
            </th>
            <th>
                User
            </th>
            <th>
                Project name
            </th>
            {list.map((item) => <ToDoItem item={item} />)}
        </table>
    )
}


export default ToDoList

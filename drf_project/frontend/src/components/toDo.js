import React from "react";


const ToDoItem = ({item}) => {
    if (item.isActive) {
        return (
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
                <td>
                    True
                </td>
            </tr>
        )
    } else {
        return (
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
                <td>
                    False
                </td>
            </tr>
        )
    }
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
            <th>
                Is active
            </th>
            {list.map((item) => <ToDoItem item={item} />)}
        </table>
    )
}


export default ToDoList

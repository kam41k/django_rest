import React from "react";


const ProjectItem = ({project}) => {
    return(
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.users}
            </td>
            <td>
                {project.link}
            </td>
        </tr>
    )
}


const ProjectList = ({projects}) => {
    return (
        <table>
            <th>
                Project Name
            </th>
            <th>
                Authorized Users
            </th>
            <th>
                Link
            </th>
            {projects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}


export default ProjectList

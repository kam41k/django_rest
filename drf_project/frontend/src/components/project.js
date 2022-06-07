import React from 'react'
import {Link, useParams} from 'react-router-dom'

const ProjectItem = ({item}) => {
    return (
        <p>
            <p>Project name: {item.name}</p>
            <p>Users: {item.users}</p>
            <p>Project link: {item.link}</p>
        </p>
    )
}

const Project = ({projects}) => {
    const {id} = useParams();
    const filtered_projects = projects.filter((item) => item.id === id);
    return (
        <p>
            {filtered_projects.map((item) => <ProjectItem item={item}/>)}
        </p>
    )
}

export default Project
import React from "react";
import logo from './logo.svg';
import './App.css';
import UserList from "./components/user";
import ProjectList from "./components/project";
import ToDoList from "./components/toDo";
import MenuComponent from "./components/menu";
import FooterComponent from "./components/footer";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'toDo': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/project')
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/todo')
            .then(response => {
                const toDo = response.data
                this.setState(
                    {
                        'toDo': toDo
                    }
                )
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <div>
                <MenuComponent/>
                <UserList users={this.state.users}/>
                <ProjectList projects={this.state.projects}/>
                <ToDoList list={this.state.toDo}/>
                <FooterComponent/>
            </div>
        )
    }
}

export default App;
import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import UserList from "./components/user";
import ProjectList from "./components/projects";
import Project from "./components/project";
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
                const users = response.data.results
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/project')
            .then(response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/todo')
            .then(response => {
                const toDo = response.data.results
                this.setState(
                    {
                        'toDo': toDo
                    }
                )
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Users</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/todo'>To Do</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                    <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                    <Route exact path='/todo' component={() => <ToDoList list={this.state.toDo}/>}/>
                    <Route path="/project/:id"><Project projects={this.state.projects} /></Route>
                </BrowserRouter>
            </div>

        )
    }
}

export default App;

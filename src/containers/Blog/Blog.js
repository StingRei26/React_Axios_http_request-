import React, { Component } from 'react';
// import axios from 'axios'; 
import axios from '../../axios'; 
import './Blog.css';
import Posts from './Posts/Posts'; 
import NewPost from './NewPost/NewPost';
import { Route, NavLink } from 'react-router-dom'; 
import FullPost from './FullPost/FullPost';


class Blog extends Component {

  render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/" 
                            exact 
                            activeClassName="active" activeStyle ={{
                                 color: 'fa923f',
                                 textDecoration: 'underline'
                            }}>Home</NavLink></li>
                            
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit', 
                                search: '?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" render={() => <h1>Home</h1>} />
                <Route path="/reiniel" exact render={() => <p>Reiniel Ravelo</p>} />*/}
                <Route path="/" exact component={Posts} />
                 <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;
import React, { Component } from 'react';
// import axios from 'axios'; 
import axios from '../../axios'; 
import './Blog.css';

class Blog extends Component {

// To get post data and write to the page
state = {
    posts: [], 
    selectedPostId: null
}

// to make http request 
componentDidMount () {
    axios.get('/posts')
            .then(response => {
                // to only pull the first 4 posts 
                const posts = response.data.slice(0, 4); 
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts}); 
                // console.log(response);
            })
            .catch(error => {    // this is to catch errors from the request
               console.log(error); 
            }); 
         }

    
    postSelectedHandler = (id) => {
       this.setState({selectedPostId: id});
    }
    
    render () {
        
        // to take data from the axios call and pass it accordinly withing the Post componeent 
        const posts = this.state.posts.map(post => {
            return <Post  
            key={post.id} 
            title={post.title} 
            author={post.author} 
            clicked={()=> this.postSelectedHandler(post.id)} />
        })

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href ="/">Home</a></li>
                            <li><a href ="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Blog;
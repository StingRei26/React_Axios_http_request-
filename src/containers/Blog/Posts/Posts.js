import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.module.css';



class Posts extends Component {

    // To get post data and write to the page
      state = {
         posts: []
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
    
    render() {
        // to take data from the axios call and pass it accordinly withing the Post componeent 
        const posts = this.state.posts.map(post => {
            return <Post  
            key={post.id} 
            title={post.title} 
            author={post.author} 
            clicked={()=> this.postSelectedHandler(post.id)} />
        });
        return (
              <section className="Posts">
                  {posts}
             </section>
        );
    }
}

export default Posts;
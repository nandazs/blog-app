
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
import CategoryPostPage from '../pages/CategoryPostPage'
import PostEditPage from '../pages/PostEditPage'
import CreatePostPage from '../pages/CreatePostPage'
import NewComments from '../components/NewComments'
import EditCommentPage from '../pages/EditCommentPage'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/posts/new" component={CreatePostPage}/>
      <Route exact path="/posts/:id/edit" component={PostEditPage}/>
      <Route exact path="/posts/:id/comments/new" component={NewComments} />
      <Route exact path="/posts/comments/:id/edit" component={EditCommentPage}/> 
      <Route exact path="/:category/:id" component={PostPage} />
      <Route exact path="/:category" component={CategoryPostPage} />
    </Switch>
)

export default Routes;
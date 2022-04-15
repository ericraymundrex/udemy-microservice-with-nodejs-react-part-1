import { Fragment } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
const App=()=>{
    return (
        <Fragment>
            <PostCreate />
            <PostList />
        </Fragment>
    )   
}

export default App;
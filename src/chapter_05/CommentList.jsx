import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={'dooly'} Comment={'mung mung'}/>
            <Comment name={'serim'} Comment={'dooly ya~'}/>

        </div>
    );
}

export default CommentList;
import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name='first' numOfPage={300}/>
            <Book name='second' numOfPage={249}/>
            <Book name='third' numOfPage={450}/>
        </div>
    );    
}

export default Library;
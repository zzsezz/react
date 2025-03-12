import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`this book is ${props.name}`}</h1>
            <h2>{`this book have ${props.numOfPage}pages`} </h2>
        </div>
    );
}

export default Book;
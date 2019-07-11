import React, { Component } from 'react';
import BookItem from './BookItem.jsx';

export default class BookList extends Component {
    render() {
        let books = this.props.BookList;
        console.log("books",books);
        const trItem = books.map( (item,index) => <BookItem key={index} book={item} index={index} editBookSubmit={this.props.editBookSubmit} />)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }
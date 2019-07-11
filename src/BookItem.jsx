import React, { Component } from 'react';


export default class BookItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editBook = this.editBook.bind(this);
    this.editBookSubmit = this.editBookSubmit.bind(this);
  }
  
  editBook()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editBookSubmit()
  {
    console.log("ref",this.authorInput.value)
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editBookSubmit(this.props.book.id,this.nameInput.value,this.authorInput.value,this.countInput.value,this.descriptionInput.value);
  }

  render() {
        const {name,count,author,description} = this.props.book;
        
      return (
        this.state.isEdit === true ? 

        <tr  key={this.props.index}>
          <td><input type="text" placeholder="Name" defaultValue={name} ref={nameInput => this.nameInput = nameInput} /></td>
          <td><input type="text" placeholder="Author" defaultValue={author} ref={authorInput => this.authorInput = authorInput}/></td>
          <td><input type="number" placeholder="Count" defaultValue={count} ref={countInput => this.countInput = countInput} /></td>
          <td><textarea cols="50" placeholder="Description" defaultValue={description} ref={descriptionInput => this.descriptionInput = descriptionInput} /></td>
          <td><button onClick={this.editBookSubmit} type="submit">Save</button></td>
        </tr>
        :
        <tr key={this.props.index}>
          <td>{name}</td>
          <td>{author}</td>
          <td>{count}</td>
          <td>{description}</td>
          <td><button onClick={this.editBook} type="submit">Edit</button></td>
        </tr>
      );
    }
  }
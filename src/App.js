import React, { Component } from 'react';
import './App.css';
import './index.css';
import BookList from './BookList.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook,updateBook,searchBook } from './actions/bookActions'
import SearchBook from './SearchBook';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      flag:false
    };
    this.addNewBook = this.addNewBook.bind(this);
    this.editBookSubmit = this.editBookSubmit.bind(this);
  }
  componentWillMount() {

  }
  addNewBook() {
    this.props.addBook({ id: Math.max(...this.props.BookList.map(function (o) { return o.id })) + 1, name: '', count: 1, description: '', author: ''});
  }


  editBookSubmit(id, name, author, count, description) {
    this.props.updateBook({ id: id, name: name, count: count, description: description, author: author });
  }

  searchBook(value){
    this.setState({flag:true});
    this.props.searchBook(value);
  }

  showAll(e){
    localStorage.removeItem('filteredBook');
    this.setState({flag:false})
  }
  render() {
    
    return (
      <div >
        <div >
          <div >
            <div >
              <h1>Book Library Sytems</h1>
            </div>
            <div >
            <SearchBook searchBook={this.searchBook.bind(this)} /><hr/>
              {this.state.flag===false?<table id="tablecss">
                <thead >
                  <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Count</th>
                    <th>Description</th>
                    <th>Edit/Save</th>
                  </tr>
                </thead>
                <BookList BookList={this.props.BookList}  editBookSubmit={this.editBookSubmit} />
              </table>:<div><table id="tablecss"><thead >
                  <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Count</th>
                    <th>Description</th>
                    <th>Edit/Save</th>
                  </tr>
                </thead>
                <BookList BookList={JSON.parse(localStorage.getItem("filteredBook"))}  editBookSubmit={this.editBookSubmit} />
              </table>
              <button onClick={this.showAll.bind(this)}>Show All</button>
              </div>
              }
              </div><br/>
              <div>
              <button onClick={this.addNewBook.bind(this)}>Add New</button>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    BookList: state
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addBook: addBook,
    updateBook: updateBook,
    searchBook:searchBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const bookReducer = (state = [],action) => {

switch(action.type){

case 'ADD_BOOK':
let stateCopy = [...state,action.payload];
localStorage.setItem('books',JSON.stringify(stateCopy));
return stateCopy

case 'DELETE_BOOK':
stateCopy = state.filter( x => x.id !== action.payload);
localStorage.setItem('books',JSON.stringify(stateCopy));
return stateCopy
    
case 'UPDATE_BOOK':

stateCopy = state.map((book) => {
    const {id,name,author,count,description} = action.payload;
    if(book.id === id)
    {
    book.name = name;
    book.author = author;
    book.count = count;
    book.description=description
    }
    return book;
})

localStorage.setItem('books',JSON.stringify(stateCopy));
return stateCopy
case 'SEARCH': {
    //const {value} = action.payload;
    var filtered_item=[];
    stateCopy = state.map((book) => {
        if(book.name === action.value)
        {
            filtered_item.push({author: book.author,
            count: book.count,
            description: book.description,
            id: book.id,
            name: book.name});
        }
        return book
   })
   if( localStorage.getItem("filteredBook") === null){
    localStorage.setItem('filteredBook',JSON.stringify(filtered_item));
    
    }
    return stateCopy
  }
default:
    return state;
}

}
export default bookReducer;
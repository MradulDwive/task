export function addBook(book)
{
    return {
    type:'ADD_BOOK',
    payload:book
    }
}

export function updateBook(book)
{
    return {
        type:'UPDATE_BOOK',
        payload:book
        }

}

export function searchBook(value) {
    return {type: 'SEARCH', value};
  }
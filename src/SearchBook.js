import React, { Component } from 'react';


class SearchBook extends Component {

    onChange(e) {
        this.setState({ searchText: e.target.value });
    }

    onfind(e) {
        this.props.searchBook(this.state.searchText);
    }
    render() {
        const {  value } = this.props;

        return (
            <div>
            <input
                placeholder="Search Book by Name"
                onChange={this.onChange.bind(this)}
                value={value} /><br/><br/>
            <button type="submit" onClick={this.onfind.bind(this)}>Find</button>
            </div>
    );
    }
}

/*function mapStateToProps({ books }) {
    return { value: books };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBook);*/

export default SearchBook;
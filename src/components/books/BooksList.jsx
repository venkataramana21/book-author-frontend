import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BooksList() {
  const [allBooks, setAllBooks] = useState([]);
  let navigate = useNavigate();
  const [filteredAllBooks, setAllFilteredBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        setAllBooks([...data]);
        setAllFilteredBooks([...data]);
      });
  }, []);
  let mappedAllBooks = filteredAllBooks.map((eachBook) => (
    <tr key={eachBook.bookId}>
      <td>{eachBook.bookId}</td>
      <td>{eachBook.bookTitle}</td>
      <td>{eachBook.bookPrice}</td>
      <td>{eachBook.bookPublished}</td>
      <td>{eachBook.bookImageUrl}</td>
      <td>{eachBook.bookAuthorId}</td>
      <td>
        <button
          onClick={() => handleView(eachBook.bookId)}
          className="btn btn-warning"
        >
          VIEW
        </button>
      </td>
      <td>
        <button
          onClick={() => handleEdit(eachBook.bookId)}
          className="btn btn-primary"
        >
          EDIT
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(eachBook.bookId)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  function handleSearch(e) {
    let searchFilter = allBooks.filter((eachBook) =>
      eachBook.bookTitle.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setAllFilteredBooks([...searchFilter]);
  }
  function handleView(bookId) {
    // programatic navigation
    // let filteredBook=filteredAllBooks.filter((eachBook)=>eachBook.bookId==bookId);
    
    navigate("/books-view/" +bookId);
    console.log(bookId);
    
  }
  function handleEdit(bookId) {
    console.log(bookId);
    navigate("/book-edit/" + bookId);
  }
  return (
    <>
      <div className="container m-1">
        <h3>LIST OF Books</h3>
        <div className="formC-control-group">
          <label htmlFor="bookSearch" className="form-label">
            Search Book:
          </label>
          <input
            type="text"
            id="bookSearch"
            placeholder="Enter search string"
            onChange={(e) => handleSearch(e)}
          ></input>
        </div>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th>ID</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>PUBLISHED</th>
              <th>IMAGE URL</th>
              <th>AUTHOR ID</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{mappedAllBooks}</tbody>
        </table>
      </div>
    </>
  );
}

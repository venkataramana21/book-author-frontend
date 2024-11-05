import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BooksEdit(){
    const baseUrl = "http://localhost:3000/books";
    let { bookId } = useParams();
    let navigate = useNavigate();
    const [book, setBook] = useState({
        bookId: 0,
        bookTitle: "",
        bookPrice: "",
        bookPublished: "",
        bookImageUrl: "",
        bookAuthorId: ""
    });
  
    const [bookErrorData, setBookErrorData] = useState({
        bookId: true,
        bookTitle: true,
        bookPrice: true,
        bookPublished: true,
        bookImageUrl: true,
        bookAuthorId: true,
    });
  
    useEffect(() => {
      fetch(baseUrl + "/" + {bookId})
        .then((res) => res.json())
        .then((data) => setBook(data));
    }, []);

    return(
        <>
        <div className="container m-5">
        <div className="card">
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="card-header bg-primary text-light">
              <h3>UPDATE A Book</h3>
            </div>
            <div className="card-body">
              <div className="form-control-group m-1">
                <label htmlFor="bookId" className="form-label">
                  Book Id:
                </label>
                <input
                  type="text"
                  id="bookId"
                  placeholder="Enter Book Id"
                  className="form-control"
                  value={book.bookId}
                  required
                  name="bookId"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {bookErrorData.bookId
                    ? ""
                    : "Book ID is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="bookTitle" className="form-label">
                  Book Title:
                </label>
                <input
                  type="text"
                  id="bookTitle"
                  placeholder="Enter Book Title"
                  className="form-control"
                  value={book.bookTitle}
                  required
                  name="bookTitle"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {bookErrorData.bookTitle ? "" : "Book Title is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="bookPrice" className="form-label">
                  Book Price:
                </label>
                <input
                  type="date"
                  id="bookPrice"
                  placeholder="Enter BookPrice"
                  className="form-control"
                  value={book.bookPrice}
                  required
                  name="bookPrice"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {bookErrorData.bookPrice
                    ? ""
                    : "Book Price is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="bookPublished" className="form-label">
                  BookPublished:
                </label>
                <input
                  type="text"
                  id="bookPublished"
                  placeholder="Enter Book Published"
                  className="form-control"
                  value={book.bookPublished}
                  required
                  name="bookPublished"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {bookErrorData.bookPublished
                    ? ""
                    : "bookPublished is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="bookImageUrl" className="form-label">
                bookImageUrl:
                </label>
                <input
                  type="text"
                  id="bookImageUrl"
                  placeholder="Enter bookImageUrl"
                  className="form-control"
                  value={book.bookImageUrl}
                  required
                  name="bookImageUrl"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {bookErrorData.bookImageUrl
                    ? ""
                    : "bookImageUrl is Required!"}
                </div>
              </div>

              <div className="form-control-group m-1">
                <label htmlFor="bookAuthorId" className="form-label">
                bookAuthorId:
                </label>
                <input
                  type="text"
                  id="bookAuthorId"
                  placeholder="Enter bookAuthorId"
                  className="form-control"
                  value={book.bookAuthorId}
                  required
                  name="bookAuthorId"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {bookErrorData.bookAuthorId
                    ? ""
                    : "bookAuthorId is Required!"}
                </div>
              </div>
              
            </div>
            <div className="card-footer bg-primary text-light">
              <button type="submit" className="btn btn-light text-primary">
                UPDATE
              </button>
              <button type="reset" className="btn btn-light text-primary mx-5">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    );
}
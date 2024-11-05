import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default  function BooksView(){
    // let navigate=useNavigate();
    // let {bid}=useParams();
    // let {state}=useLocation();
    const baseUrl = "http://localhost:3000/books";
    let {bookId} = useParams();
    // console.log({bId})
    // let id = bId.bookId;
    let navigate = useNavigate();
    const [book, setBook] = useState({
        bookId: 0,
        bookTitle: "",
        bookPrice: "",
        bookPublished: "",
        bookImageUrl: "",
        bookAuthorId: ""
    });
    console.log(bookId)
    useEffect(() => {
        fetch(baseUrl + "/" +bookId)
          .then((res) => res.json())
          .then((data) => {setBook(data);console.log(data);});
          
      }, []);
  
    return(
        <>
        <h3>this is the book view Page of bookID :{bookId}</h3>
        <div className="container mx-5 px-5">
            <button onClick={()=>navigate(-1)} className="btn btn-primary">Back to BooksList</button>
            <div className="card m-2">
                <div className="card-header bg-info text-light">
                <h3>BookID:{book.bookId}</h3>
                </div>
                <div className="card-body">
                <h6>BookTitle:{book.bookTitle}</h6>
                <h6>BookPeice:{book.bookPrice}</h6>
                <h6>BookPublished:{book.bookPublished}</h6>
                <h6>BookUrl:{book.bookImageUrl}</h6>
                <h6>BookAuthorId:{book.bookAuthorId}</h6>
                </div>
            </div>
           
           
        </div>
        </>

    );
}
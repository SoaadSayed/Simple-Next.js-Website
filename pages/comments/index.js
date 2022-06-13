import { useState } from "react";

function Comments() {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async() => {

        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data);
    }


    return(

        <>

            <button className="btn btn-outline-danger" onClick = {fetchComments}> See Comments </button>

            <div className="container mt-3">

                <div className="row">

                {

                    comments.map((comment) => {

                        return(

                            

                            <div key = {comment.id}  className="col-sm-6 mb-3">

                                <div className="card">

                                    <div className="card-body">

                                        <h5 className="card-title">{comment.name}</h5>
                                        <p className="card-text">{comment.title}</p>

                                    </div>

                                </div>

                            </div>
                            
                            

                            
                        )
                    })
                }


                </div>

            </div>

          

            

        </>
    )
}

export default Comments; 
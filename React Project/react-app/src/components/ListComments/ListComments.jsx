import style from "./ListComments.module.css"
import { useState } from "react"

function ListComments() {

    const [listComments, setListComments] = useState([{ username: "Robson", comment: "Something worng isn't right!" }, { username: "Jaqueline", comment: "Life isn't a stranberry!!" }])

    const [newUsername, setNewUsername] = useState("");
    const [newCommentUser, setNewCommentUser] = useState("");

    function handleInput() {

        if (!newUsername || !newCommentUser) {
            alert("Field empty!!!");
            return;
        }

        const newComment = {
            username: newUsername,
            comment: newCommentUser
        }

        setListComments(l => [...l, newComment]);
        setNewUsername("");
        setNewCommentUser("");
    }

    function removeComment(index) {
        setListComments(listComments.filter((_, i) => i != index))
    }


    return (
        <>
            <p className="title-h1">Comments</p>
            <div className={style.listCommentsBox}>
                <div className={style["inputSection"]}>
                    <div className={style["inputObj"]}>
                        <div>
                            <p className={style["textInput"]}>Username</p>
                            <input type="text" placeholder="Username" id="usernameInput" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                        </div>
                        <div>
                            <p className={style["textInput"]}>Comments</p>
                            <textarea name="comment" id="comment" placeholder="Let a comment..." id="commentInput" value={newCommentUser} onChange={(e) => setNewCommentUser(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button onClick={handleInput}>Add</button>
                </div>
                <ul>
                    {listComments.map((comment, index) =>
                        <li key={index} onClick={() => removeComment(index)}>
                            <div className={style["commentSection"]}>
                                <img src={`https://robohash.org/${index}`} alt="ImageUser" />
                                <div className={style["text-box"]}>
                                    <p className={style["usernameTitle"]}>{comment.username}</p>
                                    <p className={style["commentBox"]}>{comment.comment}</p>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );

}

export default ListComments
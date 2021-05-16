import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('gargi');
    const [IsPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog created');
            setIsPending(false);
            history.push('/');
        }
        )
    };
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="gargi">Gargi</option>
                    <option value="anwesha">Anwesha</option>
                    <option value="Ahana">Ahana</option>
                    <option value="Titir">Titir</option>
                    <option value="Anagana">Angana</option>


                </select>
                {!IsPending && <button>Add Blog</button>}
                {IsPending && <button>Adding Blog.....</button>}
            </form>
        </div>
    );
};

export default Create;
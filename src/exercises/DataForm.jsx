import { useState } from 'react';

export const DataForm = () => {

    const [form, setForm] = useState({
       username: '',
       fullname: '',
       age: 0
    });
    const [savedForm, setSavedForm] = useState({})
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setSavedForm( form );
    }

    const onChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label"
                        >
                            Username
                        </label>
                        <input type="text"
                               className="form-control"
                               id="exampleFormControlInput1"
                               placeholder="Introduce your username"
                               name="username"
                               onChange={onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label"
                        >
                            FullName
                        </label>
                        <input type="text"
                               className="form-control"
                               id="exampleFormControlInput1"
                               placeholder="Introduce your full name"
                               name="fullname"
                               onChange={onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1"
                               className="form-label"

                        >
                            Age
                        </label>
                        <input type="text"
                               className="form-control"
                               id="exampleFormControlInput1"
                               placeholder="Introduce your age"
                               name="age"
                               onChange={onChange}
                        />
                    </div>

                    <button type="submit"
                    className="btn btn-primary">
                        Submit
                    </button>
                </form>

                {/*<pre>
                    { JSON.stringify(form, null, 2) }
                </pre>*/}

                {submitted
                    ?
                    <div>
                        <h1>Request Sent to DB with below request data</h1>
                        <ul>
                            <li>Username: {savedForm.username}</li>
                            <li>FullName: {savedForm.fullname}</li>
                            <li>Age: {savedForm.age}</li>
                        </ul>
                    </div>
                     : null}
            </div>
        </>
    )
}

import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
function Login() {
    const [form, setForm] = useState({ name: "", pass: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

      
        if (!form.name && !form.pass) {
            setError("Both fields are required.");
            return;
        }
        if(!form.name && form.pass)
        {
            setError("Username required.");
            return; 
        }
        if(form.name && !form.pass)
            {
                setError("Password required.");
                return; 
            }

        setSuccess(`Welcome, ${form.name}!`);
        setError("");

    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Enter your Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                />
                <br />
                <br />

                <label htmlFor="pass">Enter your Password: </label>
                <input
                    type="password"
                    name="pass"
                    id="pass"
                    value={form.pass}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>{success}</div>}
            <br />
            <Link to="/">Go Back</Link>
        </>
    );
}

export default Login;

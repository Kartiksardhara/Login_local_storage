import React, { useState } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState("");

    const [flag, setflag] = useState(false);
    const [home, sethome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            const data = JSON.parse(storedData);
            const match = data.some((user) => {
                return user.Email === email && user.Password === password;
            });

            if (match) {
                sethome(!home);
                setflag(false);
                alert("You have Successfully Login.")
            } else {
                setflag(true);
            }
        } else {
            setflag(true);
        }
    }
    return (
        <div>
            {home ? (
                <form onSubmit={handleLogin}>
                    <div className="container">
                        <h3>Login</h3>
                        <div className="col-md-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                    
                        <div className="col-md-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e)=>setpassword(e.target.value)}
                            />
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </div>
                    {flag && <p class="offset-1">Fill correct info, or try again.</p>}
                    <Link to="/signup" class="offset-1" >Don't have an account? Register.</Link>
                </form>
            ) : (
                <Home />
            )}

        </div>
    );
}

import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [data, setdata] = useState([]);
    const [id, setid] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Password, setPassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [flag, setFlag] = useState(true);
    const [login, setLogin] = useState(true);

    const fetchdata = () => {
        const fetch = localStorage.getItem("userData");
        if (fetch) {
            const parseData = JSON.parse(fetch);
            setdata(parseData);
        }
    };
    console.log(data)
    const handleClick = (e) => {
        e.preventDefault();
        const data1 = {
            id: data.length + 1,
            fName: fName,
            lName: lName,
            Email: Email,
            Mobile: Mobile,
            Password: Password,
            cpassword: cpassword,
        };
        const updatedData = [...data, data1];
        const jsonData = JSON.stringify(updatedData);
        localStorage.setItem("userData", jsonData);
        setdata(updatedData);
        localStorage.setItem("email", Email);
        localStorage.setItem("password", Password);
        setLogin(!Login);
        setid("");
        setlName("");
        setfName("");
        setPassword("");
        setcpassword("");
        setEmail("");
        setMobile("");
        alert("You have Successfully Registered !")
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            {login ? (
                <form onSubmit={(e) => handleClick(e)}>
                    <div className="container">
                        <h3>Registration</h3>
                        <div className="col-md-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="First name"
                                value={fName}
                                onChange={(e) => setfName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Last name"
                                value={lName}
                                onChange={(e) => setlName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                required
                                className="form-control"
                                placeholder="Email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Mobile Number</label>
                            <input
                                type="tec"
                                required
                                maxLength={10}
                                minLength={10}
                                value={Mobile}
                                className="form-control"
                                placeholder="Mobile Number"
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                required
                                value={Password}
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                required
                                className="form-control"
                                value={cpassword}
                                placeholder="Confirm Password"
                                onChange={(e) => setcpassword(e.target.value)}
                            />
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            {flag && (
                                <p color="primary" variant="danger">
                                    {/* Please Fill Every Field */}
                                </p>
                            )}
                        </div>
                            <Link to="/" class="col-12">Already registered ? Login instead.</Link>
                    </div>
                    
                </form>
            ) : (
                <Login />
            )}
        </div>
    );
}

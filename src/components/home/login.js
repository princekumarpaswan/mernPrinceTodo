import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    const [UserName, setUserName] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [UserPassword, setUserPasswprd] = useState("");
    const [form, setForm] = useState(false);
    // const [logg, setlog] = useState(false)

    const check = () => {
        if (
            UserEmail.length > 0 &&
            UserName.length > 0 &&
            UserPassword.length > 0
        ) {
            console.log(form);

        } else {
            alert("fill all blanks");
        }
    };

    const clickHandLg = () => {
        submitDataLogin()
        check();
    }
    const clickHandUp = () => {
        submitDataSignUp()
        // submitDataLogin()
        check();
    };
    // signUp
    const submitDataSignUp = async () => {

        console.log(UserEmail, UserName, UserPassword);
        const data = {
            name: UserName,
            email: UserEmail,
            password: UserPassword,
        };

        const res = await axios.post("/createUser", data);
        console.log(res.data);
        const { user } = res.data;
        const NameData = user._id;
        localStorage.setItem("id", NameData);
        // const { succes } = res.data
        if (NameData) {
            setForm(true);
        }

    };
    // login

    const submitDataLogin = async () => {

        console.log(UserEmail, UserName, UserPassword);
        const data = {
            name: UserName,
            email: UserEmail,
            password: UserPassword,
        };

        const res = await axios.patch("/findUser", data);
        console.log(res.data);
        const { found } = res.data;
        const NameData = found._id;
        localStorage.setItem("id", NameData);
        if (NameData) {
            setForm(true)
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // to submit the data
        // submitDataSignUp();
        // submitDataLogin()
        // empty the name and email field
        setUserEmail("");
        setUserName("");
    };

    return (
        <>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="img"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={handleSubmit}>
                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p className="text-center font-semibold mx-4 mb-0">
                                        {" "}
                                        Login click twice / SignUp click twice {" "}
                                    </p>
                                </div>
                                {/* name input */}

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="User Name"
                                        value={UserName}
                                        onChange={(event) => {
                                            setUserName(event.target.value);
                                        }}
                                    />
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                        value={UserEmail}
                                        onChange={(event) => {
                                            setUserEmail(event.target.value);
                                        }}
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                        value={UserPassword}
                                        onChange={(event) => {
                                            setUserPasswprd(event.target.value);
                                        }}
                                    />
                                </div>
                                {form === true ? (
                                    <div className="text-center">
                                        <Link to="/home" onClick={submitDataSignUp}>
                                            {" "}
                                            <button
                                                type="button"
                                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                SignUp
                                            </button>
                                        </Link>
                                        <span> </span>
                                        <Link to="/home" onClick={submitDataLogin} >
                                            {" "}
                                            <button
                                                type="button"
                                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                Login
                                            </button>
                                        </Link>

                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <button
                                            onClick={clickHandUp}
                                            type="button"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            SignUp
                                        </button>{" "}
                                        <span> </span>
                                        <button
                                            onClick={clickHandLg}
                                            type="button"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Login
                                        </button>
                                    </div>
                                )}

                                {/* login button */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;

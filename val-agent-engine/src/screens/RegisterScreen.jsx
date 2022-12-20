import React, {useState} from "react";

const RegisterScreen = () => {
    return (
        <div className="register-area">
            <form>
                <h2>Register</h2>
                <input type="text" placeholder="username:"/>
                <input type="text" placeholder="password:"/>
                <button>Sign up</button>
            </form>
        </div>
    );
};

export default RegisterScreen;
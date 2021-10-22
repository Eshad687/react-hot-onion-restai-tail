import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo2.png';
import './Login.css';

const Login = () => {
    const { signInWithGoogle, signInWithEmailPassword } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmailPassword(data.email, data.password);
    };
    const history = useHistory()
    const handleSignUp = () => {
        history.push('/signup')
    }


    return (

        <div className="text-center banner bg-center bg-no-repeat  p-12 pt-20">
            <img className="mx-auto h-12" src={logo} alt="" />
            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>

                <input type="email" className="bg-gray-200 p-2 w-80 rounded" placeholder="Enter your email" {...register("email", { required: true })} />

                <br />
                {errors.email && <small className="text-red-600 m-0 p-0">This field is required</small>}
                <br />
                <input type="password" className="bg-gray-200 p-2 w-80 rounded" placeholder="Enter Your password" {...register("password", { required: true })} />


                <br />
                {errors.password && <small className="text-red-600">This field is required</small>}
                <br />
                <input className="bg-red-500 text-white p-2 w-80 rounded" type="submit" value="Log in" />


            </form>

            <small onClick={handleSignUp} className="text-blue-600 cursor-pointer">Don't have an account?</small>
            <small className="ml-20 text-blue-600 cursor-pointer">Forgot Password?</small>
            <br />
            <small>or</small>
            <br />
            <button onClick={signInWithGoogle} className="bg-red-500 text-white p-2 rounded">Sign in with Google</button>
        </div>
    );
};

export default Login;
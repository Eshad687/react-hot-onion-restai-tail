import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo2.png'

const SignUp = () => {

    const { createUser } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name, email, password } = data;
        // console.log(name)



        createUser(email, password, name)


    };
    const history = useHistory()
    const handleLogin = () => {
        history.push('/login')
    }
    return (
        <div className="text-center banner  bg-center bg-no-repeat  p-12 pt-20">
            <img className="mx-auto h-12" src={logo} alt="" />
            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>

                <input className="bg-gray-200 p-2 w-80 rounded" placeholder="Enter your name" defaultValue="" {...register("name", { required: true })} />

                <br />
                {errors.name && <small className="text-red-600 m-0 p-0">This field is required</small>}
                <br />
                <input type="email" className="bg-gray-200 p-2 w-80 rounded" placeholder="Enter your email" defaultValue="" {...register("email", { required: true })} />

                <br />
                {errors.email && <small className="text-red-600 m-0 p-0">This field is required</small>}
                <br />
                <input type="password" className="bg-gray-200 p-2 w-80 rounded" placeholder="Enter Your password" {...register("password", { required: true })} />


                <br />
                {errors.password && <small className="text-red-600">This field is required</small>}
                <br />

                <input className="bg-red-500 text-white p-2 w-80 rounded" type="submit" value="Sign up" />


            </form>


            <small onClick={handleLogin} className="text-blue-600 cursor-pointer">Already have an account?</small>

        </div>
    );
};

export default SignUp;
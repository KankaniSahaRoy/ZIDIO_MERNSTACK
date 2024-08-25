import { Label } from '../ui/label';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import Navbar from '../shared/Navbar';
import { RadioGroup } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { setLoading, setUser } from '@/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const {loading} = useSelector(store=>store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Handle text input changes
    const changeEventHandler = (e) => {
        const { name, value, type } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: type === 'file' ? prevInput[name] : value
        }));
    };

    // Handle form submission
    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: { 'Content-Type': "application/json" },
                withCredentials: true,
            });
            
            if (res.data.success) {
                // Assuming you have setUser action
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An unexpected error occurred.';
            console.error('Login error:', error);
            toast.error(errorMessage);
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    };
    

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />
            <div className='flex items-center justify-center flex-grow'>
                <form onSubmit={submitHandler} className='w-full max-w-md bg-white shadow-lg rounded-lg p-8'>
                    <h1 className='font-bold text-3xl mb-8 text-center text-gray-700'>Login</h1>

                    <div className='mb-6'>
                        <Label className="text-gray-600">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="kankani@gmail.com"
                            value={input.email}
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='mb-6'>
                        <Label className="text-gray-600">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="kankani@123"
                            value={input.password}
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='mb-8'>
                        <Label className="text-gray-600">Role</Label>
                        <RadioGroup className="flex gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1" className="text-gray-600">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2" className="text-gray-600">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {
                    loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
                    }

                    <div className='text-center'>
                        <span className="text-gray-600">Don't have an account? <Link to="/Signup" className='text-indigo-600 hover:text-indigo-500 underline'>Sign Up</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

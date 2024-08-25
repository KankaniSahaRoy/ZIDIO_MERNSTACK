import { Label } from '../ui/label';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import Navbar from '../shared/Navbar';
import { RadioGroup } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from '@/utils/constant';
import { setLoading } from '@/redux/authSlice';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';


const Signup = () => {
    
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const {loading} = useSelector(store=>store.auth);
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const changeEventHandler = (e) => {
        const { name, value, type, files } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: type === 'file' ? files[0] : value
        }));
    };
    const changeFileHandler = (e) => {
        const file = e.target.files[0];
        setInput(prevInput => ({
            ...prevInput,
            file: file
        }));
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`); // Log FormData entries
        }
  
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });
            
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error('Error response data:', error.response?.data); // Log detailed error response
            console.error('Error message:', error.message); // Log error message
            toast.error(error.response?.data?.message || 'An error occurred');
        }
        
        
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>

                    <div className='my-2'>
                        <Label>Full name</Label>
                        <Input
                            type="text"
                            placeholder="kankani"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            name="fullname"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="kankani@gmail.com"
                            value={input.email}
                            onChange={changeEventHandler}

                        />
                    </div>

                    <div className='my-2'>
                        <Label>Phone no</Label>
                        <Input
                            type="text"
                            name="phoneNumber"
                            placeholder="8101856901"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}

                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="kankani@123"
                            value={input.password}
                            onChange={changeEventHandler}

                        />
                    </div>

                    <div className='my-5'>
                        <Label>Role</Label>
                        <RadioGroup className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
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
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className='my-5'>
                        <Label>Profile</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            className="cursor-pointer"
                            onChange={changeFileHandler}
                        />
                    </div>

                    {
                       loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
                    }

                    <div className='my-5 text-center'>
                        <span>Already have an account? <Link to="/login" className='text-blue-600 underline'>Login here</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;

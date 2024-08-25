import React, { useState } from 'react';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { Search } from 'lucide-react';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className='text-center bg-[#ffe4e6] py-16'>
            <div className='flex flex-col gap-6 my-10'>
                <span className='mx-auto px-6 py-2 rounded-full bg-[#F83002] text-white font-semibold tracking-wide'>BetterCareer - Your Trusted Job Portal</span>
                <h1 className='text-5xl font-extrabold text-gray-800'>
                    Discover Your Dream Job with <span className='text-[#6A38C2]'>BetterCareer</span>
                </h1>
                <p className='text-lg text-gray-600 max-w-xl mx-auto'>Don't wait for the perfect opportunity, create it with BetterCareer. Your future is one search away!</p>
                <div className='flex w-[80%] md:w-[50%] lg:w-[40%] shadow-lg border border-gray-200 pl-4 py-2 rounded-full items-center gap-3 mx-auto bg-white'>
                    <input
                        type="text"
                        placeholder='Search for your dream job...'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-gray-700 placeholder-gray-400'
                    />
                    <Button onClick={searchJobHandler} className="rounded-full bg-[#6A38C2] p-3">
                        <Search className='h-5 w-5 text-white' />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

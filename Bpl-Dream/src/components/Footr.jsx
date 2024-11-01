import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubscribe = () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setSuccess(false);
        } else {
            setError('');
            setSuccess(true);
            console.log('Subscribed with:', email);
        }
    };

    return (
        <footer className="bg-[#00051C] gap-24 pt-48 pb-12 text-gray-400 font-semibold relative">
            <img className='mx-auto w-36' src="logo-footer.png" alt="" />
            <div className='flex justify-between lg:px-64 px-12 my-4 gap-2'>
                <div className=''>
                    <h2 className='font-bold text-white text-lg '>About Us</h2>
                    <p>We are a passionate team dedicated to providing <br /> the best services to our customers.</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-2'>
                    <h2 className='font-bold text-white text-lg '>Quick Links</h2>
                    <ul className='pl-5'>
                        <li className='list-disc pl-1'>Home</li>
                        <li className='list-disc pl-1'>Services</li>
                        <li className='list-disc pl-1'>About</li>
                        <li className='list-disc pl-1'>Contact</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <h2 className='font-bold text-white text-lg '>Subscribe</h2>
                    <p>Subscribe to our newsletter for <br /> the latest updates.</p>
                    <div className="flex gap-3">
                        {!success ? (
                            <>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    aria-label="Email address"
                                    className="rounded-lg shadow-md w-72 border p-3 mb-3 text-gray-700 outline-none"
                                />
                                <button
                                    className="border max-h-14 px-10 outline-none border-none rounded-lg shadow-md text-white bg-teal-950 transition duration-300 hover:bg-teal-700"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                            </>
                        ) : (
                            <p className="text-green-500 mt-2">Thanks for subscribing!</p>
                        )}
                    </div>
                </div>
            </div>
            <hr className='mt-12' />
            <div className='text-center mt-5'>
                <p className='text-gray-500'>© 2024 All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
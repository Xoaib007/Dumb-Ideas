import React from 'react';
import { Link } from 'react-router-dom';

const LogInForm = () => {
    return (
        <div class="min-h-screen bg-blue-400 pt-16">
            <div class="bg-white px-16 py-10 mx-auto rounded shadow-2x1 w-1/2">
                <h2 class="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>

                <form class="space-y-5">
                    <div>
                        <label class="block mb-1 font-bold text-gray-500">Name</label>
                        <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label class="block mb-1 font-bold text-gray-500">Email</label>
                        <input type="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label class="block mb-1 font-bold text-gray-500">Password</label>
                        <input type="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div class="flex items-center">
                        <input type="checkbox" id="agree" required/>
                            <label for="agree" class="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
                    </div>

                    <div>
                        <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>
                    </div>
                </form>
                
                <p className='mt-4'>Already registered? <Link to='/user/login' className='text-blue-700 underline'>Sign in</Link></p>
            </div>
        </div>
    );
};

export default LogInForm;
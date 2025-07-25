import React, { useState, FormEvent } from 'react';

interface FormData {
    username: string;
    email: string;
    password: string;
    countryCode: string;
    phoneNumber: string;
    address: string;
    gender: string;
    profileImage: string;
    role: 'user' | 'admin' | 'vendor';
}

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        countryCode: '',
        phoneNumber: '',
        address: '',
        gender: '',
        profileImage: '',
        role: 'user',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your backend API submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    Create Your Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/3">
                            <label
                                htmlFor="countryCode"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Country Code
                            </label>
                            <input
                                type="text"
                                id="countryCode"
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                                placeholder="+1"
                                required
                            />
                        </div>
                        <div className="w-2/3">
                            <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                                placeholder="1234567890"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white transition duration-150 ease-in-out"
                            required
                        >
                            <option value="" disabled>
                                Select gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="profileImage"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            id="profileImage"
                            name="profileImage"
                            value={formData.profileImage}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
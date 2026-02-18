"use client";
import Link from "next/link";


export function AuthPage({ isSignin }: { isSignin: boolean }) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-red-100 to-pink-200">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    {isSignin ? "Welcome Back" : "Create Account"}
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition text-black "
                    />
                </div>
                {/* Password */}
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition text-black "
                    />
                </div>

                {/* Button */}
                <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md"
                    onClick={() => { }}
                >
                    {isSignin ? "Sign In" : "Sign Up"}
                </button>

                {/* Switch text */}
                <p className="text-sm text-center text-gray-600 mt-4">
                    {isSignin ? "Don't have an account?" : "Already have an account?"}{" "}

                    <Link
                        href={isSignin ? "/signup" : "/signin"}
                        className="text-red-500 font-medium ml-1 hover:underline"
                    >
                        {isSignin ? "Sign up" : "Sign in"}
                    </Link>
                </p>

            </div>
        </div>
    );
}

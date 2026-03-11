"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week8Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
            <section className="bg-gray-800 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6">Shopping List App</h1>

                {!user ? (
                    <>
                        <p className="mb-4">Please sign in with GitHub.</p>

                        <div className="flex flex-col gap-3 items-center">
                            <button
                                onClick={handleSignIn}
                                className="bg-white text-green-900 px-4 py-2 rounded hover:bg-gray-200">
                                Login with GitHub
                            </button>

                            <Link
                                href="/"
                                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Back to Home
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="mb-4">
                            Welcome {user.displayName} ({user.email})
                        </p>

                        <div className="flex flex-col gap-3 items-center">
                            <Link
                                href="/week-8/shopping-list"
                                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                                Go to Shopping List
                            </Link>

                            <button
                                onClick={handleSignOut}
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
                                Logout
                            </button>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}
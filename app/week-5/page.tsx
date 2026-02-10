import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="min-h-screen bg-gray-900 flex justify-center items-start p-6">
            <section className="w-full max-w-xl bg-white text-black rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Shopping List
                </h1>
                <ItemList />

                {/* Back to Home Button */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/"
                        className="px-5 py-2 rounded-md font-semibold bg-gray-800 text-white hover:bg-gray-700 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}


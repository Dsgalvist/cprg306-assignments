import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="min-h-screen bg-gray-900 flex justify-center items-start p-6">
            <section className="w-full max-w-xl bg-white text-black rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Shopping List
                </h1>

                <ItemList />
            </section>
        </main>
    );
}

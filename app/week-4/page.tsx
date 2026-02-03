import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
            <h1 className="text-white text-3xl font-bold"> Add New Item </h1>
            <NewItem />
        </main>
    );
}

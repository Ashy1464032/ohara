import Header from "../components/Header";
import BookCard from "../components/BookCard";

export default function Library() {
    return (
        <div className="min-h-screen">
            <main className="">
                <Header />
                <h1 className="text-black text-center mt-10 text-xl font-semibold underline">Our Library</h1>
                <BookCard name="Generic Book 1" author="Generic Author 1" plot="This is a generic plot of a generic book"/>
            </main>
        </div>
    );
}
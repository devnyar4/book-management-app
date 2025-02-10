import {useState} from "react"

type AddBookFormProps = {
    onAddBook: (book: { title: string; author: string }) => void
}

export default function AddBookForm({ onAddBook }: AddBookFormProps) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !author) return

        onAddBook({ title, author })
        setTitle('')
        setAuthor('')
    }

    return (
        <form onSubmit={handleSubmit} className="p-10 mt-10">
            <div className="mb-6">
                <label className="block text-xl text-lightGray font-bold mb-2">タイトル</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 bg-neutral-700 focus:ring-1 focus:ring-shockingPink focus:outline-none rounded"
                    placeholder="書籍のタイトルを入力"
                />
            </div>
            <div className="mb-6">
                <label className="block text-xl text-lightGray font-bold mb-2">著者</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 bg-neutral-700 focus:ring-1 focus:ring-shockingPink focus:outline-none rounded"
                    placeholder="著者名を入力"
                />
            </div>
            <button type="submit"
                className="w-full bg-shockingPink text-lightGray mt-5 py-3 px-6 rounded-lg hover:bg-pink-600 transition-all duration-300"
            >
            書籍を追加
            </button>
        </form>
    )
}

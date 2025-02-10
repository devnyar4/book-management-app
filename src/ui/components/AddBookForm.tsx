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
        <form onSubmit={handleSubmit} className="p-4 rounded shadow">
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">タイトル</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="書籍のタイトルを入力"
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">著者</label>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="著者名を入力"
            />
            </div>
            <button
            type="submit"
            className="w-full bg-shockingPink text-white py-2 px-4 rounded transition"
            >
            書籍を追加
            </button>
        </form>
    )
}

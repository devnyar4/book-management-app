export type Book = {
    id: number
    title: string
    author: string
}

type BookListProps = {
    books: Book[]
}

export default function BookList({ books }: BookListProps) {
  return (
    <div className='p-4'>
        <h2 className='text-2xl font-bold text-lightGray mb-8'>書籍一覧</h2>
        <ul className='space-y-3'>
            {books.map((book) => (
                <li key={book.id}
                    className="p-6 bg-zinc-800 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300"
                >
                    <h3 className='text-lg font-semibold text-shockingPink'>{book.title}</h3>
                    <p className='text-lightGray'>著者: {book.author}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

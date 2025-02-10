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
        <h2 className='text-2xl font-bold text-shockingPink mb-4'>書籍一覧</h2>
        <ul className='space-y-2'>
            {books.map((book) => (
                <li key={book.id} className='p-4 text-lightGray rounded shadow'>
                    <h3 className='text-lg font-semibold'>{book.title}</h3>
                    <p className='text-gray-400'>著者: {book.author}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

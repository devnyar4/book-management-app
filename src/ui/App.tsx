import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
import { useState } from 'react'

type Book = {
  id: number
  title: string
  author: string
};

function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'React入門', author: '山田 リアクト' },
    { id: 2, title: 'TypeScriptガイド', author: '佐藤 ティーエス' },
    { id: 3, title: 'Electronアプリ開発', author: '田中 エレクトロニクス' },
  ])

  const addBook = (newBook: { title: string; author: string }) => {
    const newBookWithId = { ...newBook, id: books.length + 1 }
    setBooks([...books, newBookWithId])
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-dark text-lightGray">
        {/* サイドメニュー */}
        <nav className="w-64 text-shockingPink p-4">
          <h1 className="text-2xl font-bold mb-6">書籍管理</h1>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-300">書籍一覧</Link>
            </li>
            <li>
              <Link to="/add" className="hover:text-gray-300">書籍を追加</Link>
            </li>
          </ul>
        </nav>

        {/* メインコンテンツ */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<BookList books={books} />} />
            <Route path="/add" element={<AddBookForm onAddBook={addBook} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App

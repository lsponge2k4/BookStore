// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import BookDetail from './pages/BookDetail';
// import PopularBooks from './pages/PopularBooks';
// import Location from './pages/Location';
// import Information from './pages/Information';
// import SearchResults from './pages/SearchResults';
// import Admin from './pages/Admin';
// import ProfileInfo from './pages/ProfileInfo';
// import ChangePassword from './pages/ChangePassword';

// export default function App() {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/book/:id" element={<BookDetail />} />
//                 <Route path="/popular" element={<PopularBooks />} />
//                 <Route path="/location" element={<Location />} />
//                 <Route path="/info" element={<Information />} />
//                 <Route path="/search" element={<SearchResults />} />
//                 <Route path="/admin" element={<Admin />} /> {/* ← Thêm */}
//                 <Route path="/profile/info" element={<ProfileInfo />} />
//                 <Route path="/profile/change-password" element={<ChangePassword />} />
//             </Routes>
//         </Router>
//     );
// }

import AppRouter from "./routers/AppRouter";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
      <AppRouter />
    </>
  )
}
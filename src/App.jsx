import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex justify-between items-center">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-4 gap-6">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
           <div className="p-4 grid grid-cols-3 gap-4 text-center items-end">
          {/* Basic */}
          <div className="bg-gray-200 p-6 rounded shadow-md 
            hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Basic</h3>
            <p>Rp 50.000</p>
          </div>

          {/* Pro (POP-UP) */}
          <div className="bg-blue-300 p-6 rounded shadow-md 
            hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p>Rp 100.000</p>
          </div>

           {/* Premium */}
          <div className="bg-gray-200 p-6 rounded shadow-md 
            hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Premium</h3>
            <p>Rp 200.000</p>
          </div>

        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen">
          <header className="bg-gray-300 p-4">Header</header>
          <aside className="bg-gray-200 p-4">Sidebar</aside>
          <main className="bg-white p-4 border">Content</main>
          <footer className="bg-gray-300 p-4">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

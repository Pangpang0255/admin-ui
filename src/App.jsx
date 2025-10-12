import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <h2 className="font-semibold">LATIHAN 1</h2>
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0 text-left">
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
      <h2 className="font-semibold">LATIHAN 2</h2>
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        <img
          src="https://www.placehold.co/200x200"
          alt="Gambar Galeri 1"
          className="h-48 w-48 object-cover rounded hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.placehold.co/200x200"
          alt="Gambar Galeri 2"
          className="h-48 w-48 object-cover rounded hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.placehold.co/200x200"
          alt="Gambar Galeri 3"
          className="h-48 w-48 object-cover rounded hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.placehold.co/200x200"
          alt="Gambar Galeri 4"
          className="h-48 w-48 object-cover rounded hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.placehold.co/200x200"
          alt="Gambar Galeri 5"
          className="h-48 w-48 object-cover rounded hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.placehold.co/200x200"
          alt="Gambar Galeri 6"
          className="h-48 w-48 object-cover rounded hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

        <hr />

       {/* LATIHAN 3 - PRICING TABLE */}

        <h2 className="font-semibold mb-4">LATIHAN 3</h2>

        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
          {/* Basic */}
          <div className="bg-gray-200 p-6 rounded shadow-md hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Basic</h3>
             <p>Rp 50.000</p>
          </div>

          {/* Pro */}
          <div className="bg-blue-200 p-8 rounded shadow-lg border border-gray-300 scale-105 md:scale-110 hover:scale-115 transition-transform duration-300 z-10">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p>Rp 100.000</p>
          </div>

          {/* Premium */}
          <div className="bg-gray-200 p-6 rounded shadow-md hover:border border-gray-500 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Premium</h3>
            <p>Rp 200.000</p>
          </div>
        </div>

        <hr />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <h2 className="font-semibold mb-4">LATIHAN 4</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 min-h-[80vh] font-medium text-left">
          {/* Header */}
          <header className="bg-gray-300 p-6 md:col-span-12 h-[300px] flex items-start justify-start">
            Header
          </header>

          {/* Sidebar */}
          <aside className="bg-gray-200 p-6 md:col-span-3 h-[300px] flex items-start justify-start">
            Sidebar
          </aside>

          {/* Content */}
          <main className="bg-white p-6 border md:col-span-9 h-[300px] flex items-start justify-start">
            Content
          </main>

          {/* Footer */}
          <footer className="bg-gray-300 p-6 md:col-span-12 h-[300px] flex items-start justify-start">
            Footer
          </footer>
        </div>

        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        <h2 className="font-semibold">LATIHAN 5</h2>
        <div className="p-4 border rounded flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 rounded object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg">Nama Produk</h3>
            <p className="text-sm text-gray-600">
              Deskripsi produk singkat...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

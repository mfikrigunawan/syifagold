export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <h1 className="text-2xl font-bold">
          Syifa Gold
        </h1>

        <nav className="hidden gap-8 md:flex">

          <a href="#">
            Beranda
          </a>

          <a href="#">
            Produk
          </a>

          <a href="#">
            Tentang
          </a>

          <a href="#">
            Kontak
          </a>

        </nav>

      </div>
    </header>
  );
}
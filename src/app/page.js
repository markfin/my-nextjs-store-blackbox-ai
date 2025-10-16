import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="text-center px-4 py-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Selamat Datang di Toko Herbal Kami
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Temukan koleksi produk herbal terbaik untuk kesehatan dan kesejahteraan Anda.
          Kami menyediakan berbagai produk alami berkualitas tinggi dengan harga terjangkau.
        </p>
        <Link
          href="/products"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Lihat Katalog Produk
        </Link>
      </div>
    </div>
  );
}

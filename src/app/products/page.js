
import { supabase } from '../../lib/supabaseClient';
import Image from 'next/image';

// Fungsi bantuan untuk memformat harga ke dalam format Rupiah
const formatPrice = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

// Komponen halaman ini adalah Server Component, ditandai dengan `async`
export default async function ProductsPage() {
  // 1. Mengambil data produk dari Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false }); // Urutkan berdasarkan produk terbaru

  // Menangani jika terjadi error saat pengambilan data
  if (error) {
    console.error('Error fetching products:', error);
    return <p className="text-center text-red-500 py-10">Gagal memuat produk. Silakan coba lagi nanti.</p>;
  }

  // Menangani jika tidak ada produk yang ditemukan
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500 py-10">Belum ada produk yang tersedia.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800">
        Katalog Produk Herbal
      </h1>
      
      {/* 2. Menampilkan produk dalam tata letak grid yang responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          // 3. Kartu produk dengan styling Tailwind CSS
          <div 
            key={product.id} 
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image_url || 'https://placehold.co/600x400.png'} // Fallback ke placeholder jika tidak ada gambar
                alt={`Gambar ${product.name}`}
                fill
                style={{ objectFit: 'cover' }}
                className="bg-gray-100"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate" title={product.name}>
                {product.name}
              </h2>
              <p className="text-xl text-green-600 font-bold mt-2">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

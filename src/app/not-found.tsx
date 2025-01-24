import Link from 'next/link';

export default function NotFound() {
  return (
    <div data-theme='corporate' className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-error mb-4'>404</h1>
          <p className='text-2xl mb-4'>Halaman Tidak Ditemukan</p>
          <p className='mb-6'>Maaf, halaman yang Anda cari tidak tersedia.</p>
          <Link href='/' className='btn btn-primary'>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

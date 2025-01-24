import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pendaftaran Berhasil',
  description:
    'Halaman konfirmasi pendaftaran anggota JOIN SLD. Anda telah berhasil mendaftar dan dapat bergabung dengan grup Telegram melalui tautan yang tersedia.',
};

interface SearchParams {
  name?: string;
  nip?: string;
  upt?: string;
  wa?: string;
}

export default function SuccessPage({
  searchParams = {},
}: {
  searchParams: SearchParams;
}) {
  const { name = '-', nip = '-', upt = '-', wa = '-' } = searchParams;
  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK;

  return (
    <div
      data-theme='corporate'
      className='hero min-h-screen bg-base-200 py-8 transition-all duration-300'
    >
      <div className='hero-content text-center'>
        <div className='max-w-lg'>
          <div className='card bg-base-100 shadow-2xl transition-all duration-300'>
            <div className='card-body'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-success mb-6 transition-all duration-300'>
                Pendaftaran Berhasil
              </h1>

              <div className='text-left space-y-4'>
                <div className='alert alert-success transition-all duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='stroke-current shrink-0 h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>
                    Selamat! Anda telah berhasil mendaftar sebagai anggota.
                  </span>
                </div>

                <div className='bg-base-200 p-4 rounded-lg transition-all duration-300'>
                  <h2 className='text-lg sm:text-xl lg:text-2xl text-center font-semibold mb-4 transition-all duration-300'>
                    Detail Pendaftaran
                  </h2>
                  <table className='w-full'>
                    <tbody>
                      <tr>
                        <td className='font-medium py-2'>Nama Lengkap</td>
                        <td>{name}</td>
                      </tr>
                      <tr>
                        <td className='font-medium py-2'>NIP</td>
                        <td>{nip}</td>
                      </tr>
                      <tr>
                        <td className='font-medium py-2'>
                          Unit Pelaksana Teknis
                        </td>
                        <td>{upt}</td>
                      </tr>
                      <tr>
                        <td className='font-medium py-2'>Nomor WhatsApp</td>
                        <td>{wa}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='alert alert-info transition-all duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='stroke-current shrink-0 w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                  <span>
                    Silakan bergabung ke grup Telegram menggunakan tombol di
                    bawah.
                  </span>
                </div>
              </div>

              <div className='card-actions justify-center mt-6 transition-all duration-300'>
                {telegramLink ? (
                  <Link
                    href={telegramLink}
                    className='btn btn-primary btn-wide transition-all duration-300'
                    target='_blank'
                  >
                    Bergabung ke Telegram
                  </Link>
                ) : (
                  <span className='text-gray-500'>
                    Tautan grup Telegram tidak tersedia.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

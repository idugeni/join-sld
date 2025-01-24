import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Pelajari lebih lanjut tentang JOIN SLD, platform inovatif yang mengubah cara komunitas terhubung dan berkembang melalui teknologi canggih untuk manajemen grup Telegram.',
};

export default function AboutPage() {
  return (
    <div
      data-theme='corporate'
      className='min-h-screen w-full bg-base-200 py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300'
    >
      <div className='max-w-7xl mx-auto space-y-12'>
        <div className='text-center'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 transition-all duration-300 hover:text-secondary'>
            Telegram Group Management
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-base-content max-w-4xl mx-auto transition-all duration-300 hover:text-primary'>
            Platform inovatif untuk manajemen keanggotaan grup berbasis
            teknologi terkini.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 lg:gap-12'>
          <div className='space-y-6 transition-all duration-300 hover:bg-base-300 p-6 rounded-lg shadow-lg hover:brightness-105'>
            <h2 className='text-xl sm:text-2xl font-semibold text-primary text-center'>
              Misi Kami
            </h2>
            <p className='text-base-content leading-relaxed'>
              Kami bertujuan menciptakan ekosistem digital yang aman, efisien,
              dan inklusif. Dengan teknologi canggih, kami merevolusi cara
              komunitas terhubung dan berkembang.
            </p>
          </div>

          <div className='space-y-6 transition-all duration-300 hover:bg-base-300 p-6 rounded-lg shadow-lg hover:brightness-105'>
            <h2 className='text-xl sm:text-2xl font-semibold text-primary text-center'>
              Keunggulan
            </h2>
            <ul className='list-disc list-inside text-base-content space-y-2'>
              <li>Validasi keanggotaan berbasis NIP</li>
              <li>Proses pendaftaran cepat dan akurat</li>
              <li>Antarmuka ramah pengguna</li>
              <li>Keamanan data terjamin</li>
            </ul>
          </div>
        </div>

        <div className='text-center space-y-6'>
          <h2 className='text-2xl sm:text-3xl font-bold text-primary transition-all duration-300'>
            Teknologi Pendukung
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='card shadow-lg p-6 rounded-lg transition-all duration-300 hover:bg-base-200'>
              <div className='flex justify-center mb-4'>
                <div className='badge badge-sm sm:badge-md md:badge-lg hover:badge-soft badge-primary rounded-full transition-all duration-300'>
                  Next.js
                </div>
              </div>
              <p className='text-base-content'>
                Next.js adalah framework React yang menyediakan fitur-fitur
                seperti rendering sisi server dan statis, pengelolaan routing,
                dan optimasi performa.
              </p>
            </div>

            <div className='card shadow-lg p-6 rounded-lg transition-all duration-300 hover:bg-base-200'>
              <div className='flex justify-center mb-4'>
                <div className='badge badge-sm sm:badge-md md:badge-lg hover:badge-soft badge-secondary rounded-full transition-all duration-300'>
                  TypeScript
                </div>
              </div>
              <p className='text-base-content'>
                TypeScript adalah superset dari JavaScript yang menambahkan tipe
                statis dan fitur-fitur modern lainnya, meningkatkan skalabilitas
                dan pengembangan aplikasi besar.
              </p>
            </div>

            <div className='card shadow-lg p-6 rounded-lg transition-all duration-300 hover:bg-base-200'>
              <div className='flex justify-center mb-4'>
                <div className='badge badge-sm sm:badge-md md:badge-lg hover:badge-soft badge-accent rounded-full transition-all duration-300'>
                  Tailwind CSS
                </div>
              </div>
              <p className='text-base-content'>
                Tailwind CSS adalah framework CSS berbasis utility yang
                memungkinkan pembuatan desain responsif dan kustomisasi cepat
                dengan menggunakan kelas-kelas berbasis utilitas.
              </p>
            </div>

            <div className='card shadow-lg p-6 rounded-lg transition-all duration-300 hover:bg-base-200'>
              <div className='flex justify-center mb-4'>
                <div className='badge badge-sm sm:badge-md md:badge-lg hover:badge-soft badge-neutral rounded-full transition-all duration-300'>
                  DaisyUI
                </div>
              </div>
              <p className='text-base-content'>
                DaisyUI adalah plugin UI untuk Tailwind CSS yang menyediakan
                berbagai komponen desain siap pakai dengan tema yang mudah
                disesuaikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div
      data-theme='corporate'
      className='hero min-h-screen bg-cover bg-center relative'
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/happy-volunteers-team-smiling-united-men-women-community-rejoice-joyful-male-female-group-from-social-charity_1016-14070.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay dengan opacity 80% dan efek blur */}
      <div className='absolute inset-0 bg-black opacity-80 backdrop-blur-sm'></div>

      <div className='hero-content text-center relative'>
        <div className='max-w-3xl mx-auto px-4 transition-all duration-300 ease-in-out'>
          {/* Judul */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent pb-6 transition-all duration-300 ease-in-out'>
            Telegram Group Invite
          </h1>

          {/* Deskripsi */}
          <p className='py-6 text-sm sm:text-base md:text-lg lg:text-xl text-white transition-all duration-300 ease-in-out'>
            Bergabung dengan komunitas kami melalui proses pendaftaran sederhana
            dan aman.
          </p>

          {/* Tombol */}
          <Link
            href='/invite'
            className='btn btn-primary transition-all duration-300 ease-in-out hover:bg-primary-focus hover:shadow-lg'
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}

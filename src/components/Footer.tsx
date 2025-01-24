import Link from 'next/link';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer
      data-theme='corporate'
      className='bg-base-200 text-base-content border-t border-base-300'
    >
      {/* Bagian Menu */}
      <div className='p-10 transition-all duration-300 ease-in-out'>
        <div className='container mx-auto flex flex-wrap'>
          {/* Layanan */}
          <div className='flex flex-col w-1/3 space-y-4 mb-4'>
            <span className='footer-title text-sm sm:text-md md:text-base lg:text-base font-semibold'>
              Layanan
            </span>
            <nav className='flex flex-col space-y-2 mt-4'>
              <Link
                href='/telegram-group'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Telegram Group
              </Link>
              <Link
                href='/pendaftaran-anggota'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Pendaftaran Anggota
              </Link>
              <Link
                href='/informasi'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Informasi
              </Link>
            </nav>
          </div>

          {/* Kontak */}
          <div className='flex flex-col w-1/3 space-y-4 mb-4'>
            <span className='footer-title text-sm sm:text-md md:text-base lg:text-base font-semibold'>
              Kontak
            </span>
            <nav className='flex flex-col space-y-2 mt-4'>
              <Link
                href='/email-support'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Email Support
              </Link>
              <Link
                href='/pusat-bantuan'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Pusat Bantuan
              </Link>
              <Link
                href='/hubungi-kami'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Hubungi Kami
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className='flex flex-col w-1/3 space-y-4 mb-4'>
            <span className='footer-title text-sm sm:text-md md:text-base lg:text-base font-semibold'>
              Legal
            </span>
            <nav className='flex flex-col space-y-2 mt-4'>
              <Link
                href='/syarat-penggunaan'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Syarat Penggunaan
              </Link>
              <Link
                href='/kebijakan-privasi'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Kebijakan Privasi
              </Link>
              <Link
                href='/ketentuan-layanan'
                className='link link-hover text-xs sm:text-sm md:text-base lg:text-base font-medium transition-all duration-300 ease-in-out hover:text-yellow-300'
              >
                Ketentuan Layanan
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bagian Sosial Media */}
      <div className='py-6 border-t border-base-300'>
        <div className='container mx-auto flex justify-center items-center space-x-6'>
          <a
            href='https://twitter.com'
            className='text-white text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-blue-300 rounded-full p-2 bg-blue-500'
          >
            <FaTwitter />
          </a>
          <a
            href='https://github.com'
            className='text-white text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-gray-300 rounded-full p-2 bg-gray-800'
          >
            <FaGithub />
          </a>
          <a
            href='https://linkedin.com'
            className='text-white text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-blue-400 rounded-full p-2 bg-blue-700'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://instagram.com'
            className='text-white text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-pink-500 rounded-full p-2 bg-pink-600'
          >
            <FaInstagram />
          </a>
          <a
            href='https://facebook.com'
            className='text-white text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-blue-600 rounded-full p-2 bg-blue-600'
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className='py-6'>
        <div className='container mx-auto flex justify-center items-center'>
          <p className='text-xs sm:text-sm md:text-base lg:text-base'>
            © {new Date().getFullYear()}{' '}
            <Link href='/' className='text-primary hover:text-yellow-300'>
              JOIN SLD
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

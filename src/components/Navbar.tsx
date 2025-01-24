import Link from 'next/link';

export default function Navbar() {
  return (
    <div data-theme='corporate' className='navbar bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link href='/'>Beranda</Link>
            </li>
            <li>
              <Link href='/about'>Tentang</Link>
            </li>
          </ul>
        </div>
        <Link href='/' className='btn btn-ghost text-xl text-white'>
          JOIN SLD
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/' className='text-white hover:text-gray-200'>
              Beranda
            </Link>
          </li>
          <li>
            <Link href='/about' className='text-white hover:text-gray-200'>
              Tentang
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <Link href='/invite' className='btn btn-primary hover:bg-primary-focus'>
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
}

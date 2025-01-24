'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import FormComponent from '@/components/FormSubmit';
import { MemberData } from '@/types/MemberTypes';

const MySwal = withReactContent(Swal);

export default function InvitePage() {
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<MemberData>>({});

  const handleFormSubmit = (formData: MemberData) => {
    MySwal.fire({
      title: 'Konfirmasi Pendaftaran',
      text: 'Pastikan data yang Anda masukkan sudah benar',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya, Daftar',
      cancelButtonText: 'Periksa Kembali',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push(
          `/invite/success?name=${formData.fullName}&nip=${formData.nip}&upt=${formData.upt}&wa=${formData.whatsappNumber}`
        );
      }
    });
  };

  return (
    <div data-theme='corporate' className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse py-12 px-4'>
        <div className='lg:w-1/2 px-4'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center sm:text-left transition-all duration-300'>
            Bergabung Sekarang dan Dapatkan Akses Eksklusif!
          </h1>
          <p className='py-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center sm:text-left transition-all duration-300'>
            Isi formulir dengan data yang valid dan pastikan informasi yang Anda
            berikan sudah lengkap dan benar, agar kami dapat mengirimkan
            undangan Telegram yang akan membawa Anda lebih dekat dengan
            informasi dan komunitas yang bermanfaat. Jangan lewatkan kesempatan
            untuk bergabung dan memperluas jaringan Anda!
          </p>
        </div>
        <div className='lg:w-1/2 px-4'>
          <div className='card shadow-xl bg-base-100'>
            <FormComponent
              onSubmit={handleFormSubmit}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

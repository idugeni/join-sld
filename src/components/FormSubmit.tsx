'use client';

import { useState } from 'react';
import { MemberData } from '@/types/MemberTypes';
import { validateForm } from '@/utils/formValidation';

interface FormProps {
  onSubmit: (formData: MemberData) => void;
  errors: Partial<MemberData>;
  setErrors: React.Dispatch<React.SetStateAction<Partial<MemberData>>>;
}

const FormSubmit: React.FC<FormProps> = ({ onSubmit, errors, setErrors }) => {
  const [formData, setFormData] = useState<MemberData>({
    fullName: '',
    nip: '',
    upt: '',
    whatsappNumber: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors } = validateForm(formData);

    if (isValid) {
      onSubmit(formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className='card-body space-y-2'>
      <fieldset className='fieldset'>
        <legend className='fieldset-legend text-sm sm:text-base'>
          Informasi Pribadi
        </legend>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Nama Lengkap</span>
          </label>
          <input
            type='text'
            placeholder='Nama Lengkap'
            className='input w-full bg-transparent my-2 border border-gray-300 focus:border-gray-300 focus:ring-0 focus:outline-none hover:border-gray-300 transition-all duration-300'
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
          />
          <p className='text-xs text-gray-500'>
            Masukkan nama lengkap sesuai identitas resmi.
          </p>
        </div>
      </fieldset>
      <fieldset className='fieldset'>
        <legend className='fieldset-legend text-sm sm:text-base'>
          Data Kepegawaian
        </legend>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>NIP</span>
          </label>
          <input
            type='text'
            placeholder='19980921 201712 1 006'
            className='input w-full bg-transparent my-2 border border-gray-300 focus:border-gray-300 focus:ring-0 focus:outline-none hover:border-gray-300 transition-all duration-300'
            value={formData.nip}
            onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
            required
          />
          <p className='text-xs text-gray-500'>
            NIP terdiri dari 18 digit, pastikan sesuai dengan dokumen resmi.
          </p>
        </div>
      </fieldset>
      <fieldset className='fieldset'>
        <legend className='fieldset-legend text-sm sm:text-base'>
          Unit Pelaksana Teknis
        </legend>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Unit Pelaksana Teknis</span>
          </label>
          <input
            type='text'
            placeholder='UPT'
            className='input w-full bg-transparent my-2 border border-gray-300 focus:border-gray-300 focus:ring-0 focus:outline-none hover:border-gray-300 transition-all duration-300'
            value={formData.upt}
            onChange={(e) => setFormData({ ...formData, upt: e.target.value })}
            required
          />
          <p className='text-xs text-gray-500'>
            Masukkan nama Unit Pelaksana Teknis (UPT) tempat Anda bekerja.
          </p>
        </div>
      </fieldset>
      <fieldset className='fieldset'>
        <legend className='fieldset-legend text-sm sm:text-base'>
          Kontak WhatsApp
        </legend>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Nomor WhatsApp</span>
          </label>
          <input
            type='text'
            placeholder='6285641159405'
            className='input w-full bg-transparent my-2 border border-gray-300 focus:border-gray-300 focus:ring-0 focus:outline-none hover:border-gray-300 transition-all duration-300'
            value={formData.whatsappNumber}
            onChange={(e) =>
              setFormData({ ...formData, whatsappNumber: e.target.value })
            }
            required
          />
          <p className='text-xs text-gray-500'>
            Pastikan nomor WhatsApp aktif dan dapat dihubungi.
          </p>
        </div>
      </fieldset>
      {Object.keys(errors).length > 0 && (
        <div className='form-control'>
          <div className='alert alert-error'>
            <div>
              <span>{Object.values(errors).join(', ')}</span>
            </div>
          </div>
        </div>
      )}
      <div className='form-control'>
        <button type='submit' className='btn btn-primary w-full'>
          Daftar
        </button>
      </div>
    </form>
  );
};

export default FormSubmit;

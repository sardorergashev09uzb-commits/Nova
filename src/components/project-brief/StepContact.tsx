import React from 'react';
import { ProjectBriefData, BriefValidationErrors } from '../../types/brief';
import { User, Mail, Phone, Building2, Briefcase, AlertCircle } from 'lucide-react';

interface StepContactProps {
  data: ProjectBriefData;
  errors: BriefValidationErrors;
  onChange: (field: keyof ProjectBriefData, value: any) => void;
}

export const StepContact: React.FC<StepContactProps> = ({
  data,
  errors,
  onChange,
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-studio-border pb-4">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-studio-black">
          Aloqa va Kompaniya Ma'lumotlari
        </h3>
        <p className="text-sm text-studio-muted mt-1 font-sans">
          Loyiha bo‘yicha muloqot qilish va texnik taklifni yuborish uchun asosiy kontaktlaringizni kiriting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
            Ism va Familiyangiz <span className="text-warmOrange-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => onChange('fullName', e.target.value)}
              placeholder="Masalan: Sardor Rahimov"
              className={`w-full pl-10 pr-4 py-3 bg-white border text-sm font-sans text-studio-black transition-colors focus:outline-none ${
                errors.fullName
                  ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500'
                  : 'border-studio-border focus:border-cobalt-600'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
            Kompaniya yoki Loyiha Nomi <span className="text-warmOrange-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Building2 className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => onChange('companyName', e.target.value)}
              placeholder="Masalan: Apex Logistics yoki Novatech"
              className={`w-full pl-10 pr-4 py-3 bg-white border text-sm font-sans text-studio-black transition-colors focus:outline-none ${
                errors.companyName
                  ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500'
                  : 'border-studio-border focus:border-cobalt-600'
              }`}
            />
          </div>
          {errors.companyName && (
            <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>

        {/* Work Email */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
            Elektron Pochta <span className="text-warmOrange-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="sardor@kompaniya.uz"
              className={`w-full pl-10 pr-4 py-3 bg-white border text-sm font-sans text-studio-black transition-colors focus:outline-none ${
                errors.email
                  ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500'
                  : 'border-studio-border focus:border-cobalt-600'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone or Telegram */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
            Telefon yoki Telegram <span className="text-warmOrange-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={data.phoneOrTelegram}
              onChange={(e) => onChange('phoneOrTelegram', e.target.value)}
              placeholder="+998 90 123 45 67 yoki @username"
              className={`w-full pl-10 pr-4 py-3 bg-white border text-sm font-sans text-studio-black transition-colors focus:outline-none ${
                errors.phoneOrTelegram
                  ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500'
                  : 'border-studio-border focus:border-cobalt-600'
              }`}
            />
          </div>
          {errors.phoneOrTelegram && (
            <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.phoneOrTelegram}</span>
            </p>
          )}
        </div>

        {/* Role or Position (Optional) */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
            Kompaniyadagi vazifangiz <span className="text-slate-400 font-normal font-sans lowercase">(ixtiyoriy)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={data.roleOrPosition || ''}
              onChange={(e) => onChange('roleOrPosition', e.target.value)}
              placeholder="Masalan: Ta'sischi / Bosh direktor / Marketing rahbari"
              className="w-full pl-10 pr-4 py-3 bg-white border border-studio-border text-sm font-sans text-studio-black focus:outline-none focus:border-cobalt-600 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-studio-muted flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
        <span>
          Maxfiylik kafolati: Bog‘lanish ma'lumotlaringiz faqat loyiha briefi doirasida qo‘llaniladi va uchinchi shaxslarga berilmaydi.
        </span>
      </div>
    </div>
  );
};

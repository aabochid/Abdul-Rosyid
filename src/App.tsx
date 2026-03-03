/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  School, 
  BookOpen, 
  Briefcase, 
  Hotel, 
  CheckCircle2, 
  ArrowRight, 
  User, 
  Mail, 
  Phone, 
  Building2,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Program = 'AKL' | 'BDP' | 'Perhotelan';

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  originSchool: string;
  program: Program | '';
}

const programs = [
  {
    id: 'AKL',
    title: 'Akuntansi Keuangan Lembaga',
    description: 'Mempelajari pengelolaan keuangan, perpajakan, dan audit dengan standar industri modern.',
    icon: BookOpen,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    id: 'BDP',
    title: 'Bisnis Daring Pemasaran',
    description: 'Fokus pada strategi pemasaran digital, e-commerce, dan kewirausahaan kreatif.',
    icon: Briefcase,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  },
  {
    id: 'Perhotelan',
    title: 'Perhotelan',
    description: 'Pelatihan profesional dalam manajemen hotel, pelayanan tamu, dan operasional hospitality.',
    icon: Hotel,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600'
  }
];

export default function App() {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    originSchool: '',
    program: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const nextStep = () => setActiveStep(prev => prev + 1);
  const prevStep = () => setActiveStep(prev => prev - 1);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pendaftaran Berhasil!</h2>
          <p className="text-slate-600 mb-8">
            Terima kasih, <span className="font-semibold text-slate-900">{formData.fullName}</span>. 
            Data pendaftaran Anda untuk program <span className="font-semibold text-slate-900">{formData.program}</span> telah kami terima.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ fullName: '', email: '', phone: '', originSchool: '', program: '' });
              setActiveStep(1);
            }}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-colors"
          >
            Kembali ke Beranda
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
              <School size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">SMK BANDARA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-slate-900 transition-colors">Beranda</a>
            <a href="#programs" className="hover:text-slate-900 transition-colors">Program Keahlian</a>
            <a href="#register" className="hover:text-slate-900 transition-colors">Daftar Sekarang</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <GraduationCap size={14} />
              <span>Penerimaan Siswa Baru 2026/2027</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Terbang Tinggi Menuju <span className="text-blue-600">Masa Depan</span> Cemerlang.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              SMK Bandara menghadirkan pendidikan vokasi berkualitas dengan kurikulum berbasis industri untuk mencetak tenaga kerja profesional dan kompeten.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#register" 
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                Daftar Sekarang <ArrowRight size={18} />
              </a>
              <a 
                href="#programs" 
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all"
              >
                Lihat Program
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                alt="Students" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 max-w-[240px]">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Akreditasi A</p>
                <p className="text-xs text-slate-500">Unggul & Terpercaya</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Program Keahlian</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Pilih program keahlian yang sesuai dengan minat dan bakat Anda untuk membangun karier impian.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${program.lightColor} ${program.textColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="flex items-center text-sm font-bold text-slate-900 gap-1 group-hover:gap-2 transition-all">
                  Pelajari Selengkapnya <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Formulir Pendaftaran</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Lengkapi data diri Anda dengan benar untuk memulai proses pendaftaran di SMK Bandara.
                </p>
                
                <div className="space-y-6">
                  {[
                    { step: 1, label: 'Data Diri' },
                    { step: 2, label: 'Pilihan Program' }
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${activeStep === s.step ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                        {s.step}
                      </div>
                      <span className={`text-sm font-medium ${activeStep === s.step ? 'text-white' : 'text-slate-500'}`}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-10 border-t border-slate-800">
                <p className="text-xs text-slate-500">Butuh bantuan?</p>
                <p className="text-sm font-bold text-slate-300">info@smkbandara.sch.id</p>
              </div>
            </div>

            <div className="md:w-2/3 p-10 md:p-14">
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {activeStep === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <User size={16} className="text-slate-400" /> Nama Lengkap
                        </label>
                        <input 
                          required
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <Mail size={16} className="text-slate-400" /> Email Aktif
                        </label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="contoh@email.com"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <Phone size={16} className="text-slate-400" /> Nomor WhatsApp
                        </label>
                        <input 
                          required
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0812xxxx"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <Building2 size={16} className="text-slate-400" /> Asal Sekolah (SMP)
                        </label>
                        <input 
                          required
                          type="text" 
                          name="originSchool"
                          value={formData.originSchool}
                          onChange={handleInputChange}
                          placeholder="Nama SMP asal"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>

                      <button 
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.fullName || !formData.email || !formData.phone || !formData.originSchool}
                        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        Lanjutkan <ArrowRight size={18} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <label className="text-sm font-bold text-slate-700">Pilih Program Keahlian</label>
                        <div className="grid gap-4">
                          {programs.map((p) => (
                            <label 
                              key={p.id}
                              className={`relative flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${formData.program === p.id ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}
                            >
                              <input 
                                type="radio" 
                                name="program" 
                                value={p.id}
                                checked={formData.program === p.id}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${formData.program === p.id ? 'bg-blue-500 text-white' : 'bg-white text-slate-400'}`}>
                                <p.icon size={20} />
                              </div>
                              <div className="flex-1">
                                <p className={`font-bold text-sm ${formData.program === p.id ? 'text-blue-900' : 'text-slate-900'}`}>{p.title}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{p.id}</p>
                              </div>
                              {formData.program === p.id && (
                                <CheckCircle2 size={20} className="text-blue-500" />
                              )}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={prevStep}
                          className="flex-1 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all"
                        >
                          Kembali
                        </button>
                        <button 
                          type="submit"
                          disabled={!formData.program}
                          className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Kirim Pendaftaran
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              <School size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight">SMK BANDARA</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 SMK Bandara. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Facebook</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

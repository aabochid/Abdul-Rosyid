export type ProgramKeahlian = 'Akuntansi Keuangan Lembaga' | 'Bisnis Daring Pemasaran' | 'Perhotelan';

export interface RegistrationData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: 'Laki-laki' | 'Perempuan';
  address: string;
  previousSchool: string;
  program: ProgramKeahlian;
  registrationDate: string;
}

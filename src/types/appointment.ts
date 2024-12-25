export interface Appointment {
    id: string;
    title: string;
    date: string;
    time: string;
    description: string;
    status: 'pending' | 'confirmed' | 'cancelled';
  }
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import { Appointment } from './types/appointment';

function App() {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleCreateAppointment = (newAppointment: Omit<Appointment, 'id' | 'status'>) => {
    const appointment: Appointment = {
      ...newAppointment,
      id: crypto.randomUUID(),
      status: 'pending'
    };
    setAppointments([...appointments, appointment]);
  };

  const handleStatusChange = (id: string, status: Appointment['status']) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === id ? { ...appointment, status } : appointment
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center justify-center mb-8">
          <Calendar className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Appointment Manager</h1>
        </div>

        <div className="grid md:grid-cols-[2fr,3fr] gap-6">
          <div>
            <AppointmentForm onSubmit={handleCreateAppointment} />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Appointments</h2>
            {appointments.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                No appointments scheduled yet.
              </div>
            ) : (
              <AppointmentList
                appointments={appointments}
                onStatusChange={handleStatusChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
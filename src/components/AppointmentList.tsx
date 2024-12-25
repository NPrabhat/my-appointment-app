// import React from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Appointment } from '../types/appointment';

interface AppointmentListProps {
  appointments: Appointment[];
  onStatusChange: (id: string, status: Appointment['status']) => void;
}

export default function AppointmentList({ appointments, onStatusChange }: AppointmentListProps) {
  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600';
      case 'cancelled':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  const getStatusIcon = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-5 h-5" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{appointment.title}</h3>
            <div className="flex space-x-2">
              <select
                value={appointment.status}
                onChange={(e) => onStatusChange(appointment.id, e.target.value as Appointment['status'])}
                className={`${getStatusColor(appointment.status)} bg-transparent border-none font-medium focus:outline-none`}
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <span className={getStatusColor(appointment.status)}>
                {getStatusIcon(appointment.status)}
              </span>
            </div>
          </div>

          <div className="text-gray-600 space-y-2">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{appointment.date}</span>
              <Clock className="w-4 h-4 mx-2" />
              <span>{appointment.time}</span>
            </div>
            
            {appointment.description && (
              <p className="text-sm text-gray-500 mt-2">{appointment.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
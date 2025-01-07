import { Appointment } from '../types/appointment';

interface AppointmentListProps {
  appointments: Appointment[];
  onStatusChange: (id: string, status: Appointment['status']) => void;
  onDelete: (id: string) => void;
}

export default function AppointmentList({ appointments, onStatusChange, onDelete }: AppointmentListProps) {
  return (
    <div>
      {appointments.map(appointment => (
        <div
          key={appointment.id}
          className={`relative rounded-lg shadow-md p-4 mb-4 ${
            appointment.status === 'pending' ? 'bg-yellow-200' :
            appointment.status === 'confirmed' ? 'bg-green-200' :
            'bg-red-400'
          }`}
        >
          <h3 className="text-xl font-bold">{appointment.title}</h3>
          <p>{appointment.description}</p>
          <p>{appointment.date} at {appointment.time}</p>
          <select
            value={appointment.status}
            onChange={(e) => onStatusChange(appointment.id, e.target.value as Appointment['status'])}
            className="absolute top-2 right-2 rounded p-1 text-sm w-[19.2%] bg-transparent"
            style={{ border: 'none', backgroundColor: 'transparent' }}
          >
            <option value="pending" style={{ backgroundColor: 'white' }}>Pending</option>
            <option value="confirmed" style={{ backgroundColor: 'white' }}>Confirmed</option>
            <option value="cancelled" style={{ backgroundColor: 'white' }}>Cancelled</option>
          </select>
          <button
            onClick={() => onDelete(appointment.id)}
            className="absolute bottom-2 right-2 bg-white text-red-500 rounded p-1 text-sm w-16"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
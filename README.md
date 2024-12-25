# Appointment Management System

A modern React application for managing appointments with a clean, responsive interface.

![Appointment Manager Screenshot](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000)

## Features

- Create new appointments with title, date, time, and description
- View all appointments in a clean, organized list
- Update appointment status (Pending, Confirmed, Cancelled)
- Responsive design for all devices
- Real-time status updates
- Clean and intuitive user interface

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm 7.0 or higher

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd appointment-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── AppointmentForm.tsx   # Form for creating appointments
│   └── AppointmentList.tsx   # List view of appointments
├── types/
│   └── appointment.ts        # TypeScript interfaces
├── App.tsx                   # Main application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles
```

## Usage

1. Fill in the appointment form with:
   - Title
   - Date
   - Time
   - Description (optional)

2. Click "Create Appointment" to add it to the list

3. Manage appointments by:
   - Viewing all appointments in the list
   - Changing appointment status using the dropdown
   - Monitoring status indicators

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
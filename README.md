# CheckOff - A Modern Todo Application

CheckOff is a full-stack todo application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It features a modern Material-UI interface and provides a seamless experience for managing your tasks.

## Features

- Create, read, update, and delete todos
- Modern Material-UI interface
- Responsive design
- Real-time updates
- MongoDB database integration
- RESTful API architecture

## Tech Stack

### Frontend
- React 19
- Material-UI (MUI) v7
- Axios for API calls
- Emotion for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd checkoff
```

2. Install dependencies for both server and client:
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

## Running the Application

### Development Mode

To run both the server and client concurrently in development mode:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:3001
- Frontend development server on http://localhost:3000

### Production Mode

1. Build the client:
```bash
cd client
npm run build
cd ..
```

2. Start the server:
```bash
npm start
```

## Project Structure

```
checkoff/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # React source code
├── models/                # MongoDB models
├── routes/                # API routes
├── server.js             # Express server
├── package.json          # Server dependencies
└── README.md             # Project documentation
```

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Material-UI for the beautiful components
- MongoDB for the database
- The MERN stack community 
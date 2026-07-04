# 🎥 AI-Powered YouTube Summarizer & Learning Assistant

An AI-powered full-stack web application that extracts YouTube video transcripts and automatically generates AI-powered summaries, smart notes, quiz questions, transcript analytics, downloadable transcript files, and an interactive learning dashboard.

## 🚀 Built With

- React + Vite
- Tailwind CSS
- Framer Motion
- FastAPI
- Google Gemini API
- YouTube Transcript API
- Lucide React Icons

---

# ✨ Features

## 🎨 Frontend

- Modern responsive UI
- Premium animated gradient background
- Glassmorphism cards
- Framer Motion animations
- YouTube URL validation
- Dynamic transcript rendering
- Show Full / Show Less transcript
- Copy transcript instantly
- Download transcript as `.txt`
- Download AI Summary
- AI analysis dashboard
- Transcript statistics
- Character count
- Word count
- Processing time display
- Backend connection status
- Error handling alerts
- Loading animations
- Thumbnail preview
- Recent video history using Local Storage
- Responsive navbar and footer

---

## ⚙️ Backend

- FastAPI backend architecture
- REST API architecture
- YouTube transcript extraction
- Transcript preprocessing & cleaning
- Google Gemini AI integration
- AI Summary generation
- Smart Notes generation
- Quiz generation
- JSON API responses
- Transcript validation
- Transcript availability checking
- Improved backend error handling
- Environment variable support (.env)
- Modular service architecture
- Swagger API documentation
- Frontend-backend integration
- CORS enabled

---

# 📂 Project Structure

```bash
Youtube-AI-Summarizer/
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── UrlInput.jsx
│   │   ├── SummaryCard.jsx
│   │   ├── NotesSection.jsx
│   │   ├── TimestampList.jsx
│   │   ├── QuizCard.jsx
│   │   ├── StatsCard.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── main.py
│   ├── config.py
│   ├── utils.py
│   ├── requirements.txt
│   │
│   └── services/
│       └── transcript_service.py
│
└── README.md
```

---

# 🖥️ Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Runs at:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Or manually:

```bash
pip install fastapi uvicorn youtube-transcript-api python-dotenv google-generativeai
```

Run the backend server:

```bash
uvicorn main:app --reload
```

Runs at:

```text
http://127.0.0.1:8000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

The backend automatically loads this key to generate:

- AI Summary
- Smart Notes
- Quiz Questions

---

# 🔄 Running Full Stack

## Terminal 1

```bash
cd frontend
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Terminal 2

```bash
cd backend
uvicorn main:app --reload
```

Runs on:

```text
http://127.0.0.1:8000
```

---

# 📡 API Endpoints

## Home

```http
GET /
```

Response

```json
{
  "message": "AI YouTube Summarizer Backend Running"
}
```

---

## Transcript

```http
GET /transcript?video_id=VIDEO_ID
```

Example

```http
GET /transcript?video_id=jNQXAC9IVRw
```

Sample Response

```json
{
  "success": true,
  "video_id": "jNQXAC9IVRw",
  "transcript": "...",
  "summary": "...",
  "notes": [],
  "quiz": [],
  "characters": 2300,
  "words": 420,
  "preview": "..."
}
```

---

# 📘 Swagger API Documentation

FastAPI automatically generates API documentation.

Visit:

```text
http://127.0.0.1:8000/docs
```

---

# 🎨 UI Highlights

- Premium animated gradient
- Glassmorphism cards
- Responsive dashboard
- Framer Motion animations
- Smooth scrolling
- Dynamic transcript rendering
- Loading animations
- AI analysis dashboard
- Transcript statistics
- Copy transcript
- Download transcript
- Download summary
- Mobile responsive design

---

# 🧠 Current Functionalities

- ✅ Paste YouTube URL
- ✅ Extract YouTube transcript
- ✅ Dynamic transcript rendering
- ✅ AI Summary generation
- ✅ Smart Notes generation
- ✅ Quiz generation
- ✅ Google Gemini AI integration
- ✅ Transcript statistics
- ✅ Character count
- ✅ Word count
- ✅ Copy transcript
- ✅ Download transcript (.txt)
- ✅ Download AI Summary
- ✅ Show Full / Show Less transcript
- ✅ Recent video history
- ✅ Backend connection indicator
- ✅ Error handling
- ✅ Loading animations
- ✅ FastAPI backend integration
- ✅ Responsive React + Tailwind UI

---

# 🚀 Future Improvements

- AI Chat with transcript
- Dynamic timestamp generation
- Export Notes as PDF
- Export Quiz as PDF
- Multi-language transcript support
- Authentication
- User Dashboard
- Database integration
- Personalized learning recommendations
- Transcript search functionality

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

---

## Backend

- Python
- FastAPI
- Uvicorn
- Google Gemini API
- YouTube Transcript API

---

## Development Tools

- Git
- GitHub
- VS Code
- Postman

---

# 🌐 Deployment

### Frontend

- ✅ Vercel

### Backend

- ✅ Render

---

# 📌 Current Status

- ✅ Full-stack architecture completed
- ✅ React frontend completed
- ✅ FastAPI backend completed
- ✅ Google Gemini AI integrated
- ✅ Transcript extraction working locally
- ✅ AI Summary generation working
- ✅ Smart Notes generation working
- ✅ Quiz generation working
- ✅ Transcript analytics implemented
- ✅ Copy transcript working
- ✅ Download transcript working
- ✅ Download summary working
- ✅ Recent video history implemented
- ✅ Backend service refactored
- ✅ Improved backend error handling
- ✅ Premium UI completed
- ✅ Frontend deployed on Vercel
- ✅ Backend deployed on Render
- ⚠️ Cloud transcript extraction may fail because YouTube blocks requests from some cloud-hosted IP addresses (including Render). Running the backend locally avoids this limitation.

---

# ⚠️ Known Limitations

- YouTube may block transcript requests from cloud-hosted servers such as Render.
- Some YouTube videos do not provide captions, so transcripts cannot be retrieved.
- Running the backend locally avoids most cloud IP restrictions.

---

# 👩‍💻 Developer

## Built by **Pragati Pandey**

- 💻 Aspiring Software Engineer
- 🌐 Full Stack Developer
- 🤖 AI Enthusiast

### GitHub Repository

**https://github.com/pragatipandey-tech/Youtube-AI-Summarizer**

---

⭐ If you found this project helpful, consider giving it a **star** on GitHub!


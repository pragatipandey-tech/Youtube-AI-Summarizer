# 🎥 AI-Powered YouTube Summarizer & Learning Assistant

An AI-powered full-stack web application that extracts youTube video transcripts and automatically generates summaries, smart notes, quiz questions, transcript analytics, and downloadable learning resources.

Built using:

* React + Vite
* Tailwind CSS
* Framer Motion
* FastAPI
* YouTube Transcript API

---

# 🚀 Features

## Frontend:-

* Modern responsive UI
* Premium gradient design
* Glassmorphism cards
* Framer Motion animations
* Smooth auto-scroll behavior
* Dynamic transcript rendering
* Show Full / Show Less transcript
* Copy transcript functionality
* Download transcript as TXT
* Transcript statistics dashboard
* Loading animations
* Error handling alerts
* Backend connection status indicator
* Thumbnail preview support
* AI analysis results section
* Responsive navbar & footer
* Animated dashboard cards
* Processing time display

---

## Backend:-

* FastAPI backend server
* REST API architecture
* YouTube transcript extraction
* Dynamic JSON API responses
* AI summary generation
* Smart notes generation
* Quiz question generation
* Transcript preprocessing and cleaning
* Error handling system
* Transcript availability validation
* CORS enabled backend
* Frontend-backend integration
* Swagger API documentation

---

# 📂 Project Structure

```bash
Youtube-AI-Summarizer/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── UrlInput.jsx
│   │   │   ├── SummaryCard.jsx
│   │   │   ├── NotesSection.jsx
│   │   │   ├── TimestampList.jsx
│   │   │   ├── QuizCard.jsx
│   │   │   └── StatsCard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── utils.py
│   └── services/
│       └── transcriptService.py
│
└── README.md
```

---

# 🖥 Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# ⚙ Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
py -m pip install fastapi uvicorn youtube-transcript-api python-dotenv
```

## Run backend server

```bash
py -m uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# 🔄 Running Full Stack Together

## Terminal 1 — Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```bash
http://localhost:5173
```

---

## Terminal 2 — Backend

```bash
cd backend
py -m uvicorn main:app --reload
```

Runs on:

```bash
http://127.0.0.1:8000
```

---

# 📡 API Endpoints

## Home Route

```http
GET /
```

Response:

```json
{
  "message": "AI YouTube Summarizer Backend Running"
}
```

---

## Transcript Extraction Route

```http
GET /transcript?video_id=VIDEO_ID
```

Example:

```http
GET /transcript?video_id=jNQXAC9IVRw
```

Response:

```json
{
  "video_id": "jNQXAC9IVRw",
  "transcript": "Transcript text...",
  "summary": "AI generated summary",
  "notes": ["Point 1", "Point 2"],
  "quiz": ["Question 1", "Question 2"],
  "characters": 2500,
  "words": 450,
  "preview": "First 300 characters..."
}
```

---

# 📘 Swagger API Documentation

FastAPI automatically generates interactive API docs.

Open:

```bash
http://127.0.0.1:8000/docs
```

---

# 🎨 UI Highlights

* Framer Motion animations
* Premium gradient landing page
* Glassmorphism transcript cards
* Responsive dashboard layout
* Hover animations
* AI-style loading states
* Transcript statistics section
* Copy transcript button
* Download transcript feature
* Show Full / Show Less transcript
* Dynamic transcript rendering
* Animated footer and navbar
* Processing time tracking

---

# 🧠 Current Functionalities

* ✅ Paste YouTube URL
* ✅ Extract video transcript
* ✅ Dynamic transcript rendering
* ✅ AI Summary generation
* ✅ Smart Notes generation
* ✅ Quiz generation
* ✅ Transcript statistics
* ✅ Character count
* ✅ Word count
* ✅ Copy transcript button
* ✅ Download transcript (.txt)
* ✅ Show Full / Show Less transcript
* ✅ Error handling
* ✅ Loading animations
* ✅ Backend connection status
* ✅ FastAPI backend integration
* ✅ React + Tailwind responsive UI

---

# 🚀 Upcoming Features

* Gemini/OpenAI API integration
* Real AI-powered summarization
* Dynamic timestamp extraction
* Export notes as PDF
* Export quiz as PDF
* Video sentiment analysis
* Multi-language transcript support
* Authentication system
* Database integration
* Deployment on Vercel + Render
* User history dashboard

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React Icons

---

## Backend

* Python
* FastAPI
* Uvicorn
* YouTube Transcript API

---

## APIs & Services

* REST API
* JSON API Architecture

---

## Development Tools

* Git
* GitHub
* VS Code

---

# 📌 Current Status

* ✅ Full-stack architecture completed
* ✅ React frontend completed
* ✅ FastAPI backend completed
* ✅ Transcript extraction working
* ✅ Dynamic transcript rendering completed
* ✅ AI summary generation working
* ✅ Smart notes generation working
* ✅ Quiz generation working
* ✅ Transcript analytics implemented
* ✅ Copy transcript feature working
* ✅ Download transcript feature working
* ✅ Show Full / Show Less transcript working
* ✅ Error handling system implemented
* ✅ Loading animations completed
* ✅ Frontend-backend integration completed
* 🚧 Gemini/OpenAI integration planned
* 🚧 Deployment pending

---

# 👩‍💻 Developer

Built and maintained by Pragati Pandey

Aspiring Software Engineer | Full Stack Developer | AI Enthusiast

GitHub Repository:-

https://github.com/pragatipandey-tech/Youtube-AI-Summarizer



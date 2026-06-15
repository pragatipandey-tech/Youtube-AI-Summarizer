# 🎥 AI YouTube Summarizer

An AI-powered full-stack web application that extracts YouTube video transcripts and generates smart summaries, notes, timestamps, and quiz questions.

Built using:

* React + Vite
* Tailwind CSS
* Framer Motion
* FastAPI
* YouTube Transcript API

---

# 🚀 Features

## Frontend:

* Modern responsive UI
* Animated dashboard
* Glassmorphism design
* Gradient hero section
* Framer Motion animations
* Smooth auto-scroll behavior
* Dynamic transcript rendering
* Loading animations
* Progress loading bar
* URL validation
* Copy transcript functionality
* Transcript statistics
* Responsive navbar & footer
* Smart notes section
* Quiz questions section
* Timestamp section
* Animated statistics cards

---

## Backend:

* FastAPI backend server
* REST API architecture
* YouTube transcript extraction
* Dynamic JSON API responses
* Error handling
* Swagger API documentation
* CORS enabled backend
* Frontend-backend integration

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
│   └── services/
│
└── README.md
```

---

# 🖥️ Frontend Setup

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

# ⚙️ Backend Setup

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
  "transcript": "Transcript text..."
}
```

---

# 📘 Swagger API Docs

FastAPI automatically generates interactive API documentation.

Open:

```bash
http://127.0.0.1:8000/docs
```

---

# 🎨 UI Highlights

* Framer Motion animations
* Gradient animated hero section
* Responsive navbar
* Animated footer
* Glassmorphism transcript cards
* Auto-scroll animations
* Dynamic transcript rendering
* AI-style loading states
* Transcript statistics section
* Responsive dashboard layout
* Hover animations
* Copy transcript button

---

# 🧠 Current Functionalities

✅ Paste YouTube URL
✅ Extract video transcript
✅ Display transcript dynamically
✅ Show transcript statistics
✅ Copy transcript instantly
✅ Smooth loading animations
✅ Real-time frontend-backend communication
✅ Responsive full-stack dashboard

---

# 🧠 Upcoming Features

* Gemini/OpenAI integration
* Real AI summarization
* AI-generated notes
* AI-generated quiz questions
* Dynamic timestamps
* YouTube thumbnail preview
* Authentication system
* Database integration
* Export notes as PDF
* Deployment on Vercel & Render

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* Lucide Icons

---

## Backend

* Python
* FastAPI
* Uvicorn
* YouTube Transcript API

---

# 📌 Current Status

✅ Frontend UI completed
✅ Backend server completed
✅ Transcript extraction working
✅ Frontend-backend integration completed
✅ Dynamic transcript rendering completed
✅ API documentation working
✅ Loading states implemented
✅ Responsive animations completed
✅ Full-stack architecture established

---

# 👩‍💻 Developer

Created by Pragati Pandey

GitHub Repository:

https://github.com/pragatipandey-tech/Youtube-AI-Summarizer


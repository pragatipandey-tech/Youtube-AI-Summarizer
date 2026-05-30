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

## Frontend

* Modern responsive UI
* Animated dashboard
* Glassmorphism design
* Loading states
* URL validation
* Smart notes section
* Quiz questions section
* Timestamp section
* Animated statistics cards
* Copy summary functionality

## Backend

* FastAPI backend server
* REST API architecture
* YouTube transcript extraction
* JSON API responses
* Error handling
* Swagger API documentation
* CORS enabled backend

---

# 📂 Project Structure

```bash
Youtube-AI-Summarizer/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
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
* Responsive navbar
* Animated footer
* Glassmorphism cards
* Gradient hero section
* Scroll reveal animations
* AI-style loading states

---

# 🧠 Upcoming Features

* Gemini/OpenAI integration
* Real AI summarization
* AI-generated notes
* AI-generated quiz questions
* Dynamic timestamps
* Authentication
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
✅ API documentation working
✅ Full-stack architecture established

---

# 👩‍💻 Developer

Created by Pragati Pandey

GitHub Repository:
https://github.com/pragatipandey-tech/Youtube-AI-Summarizer

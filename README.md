# 🎥 AI-Powered YouTube Summarizer & Learning Assistant

An AI-powered full-stack web application that extracts YouTube video transcripts and automatically generates summaries, smart notes, quiz questions, transcript analytics, downloadable transcript files, and a modern interactive learning dashboard.

Built using:

- React + Vite  
- Tailwind CSS  
- Framer Motion  
- FastAPI  
- YouTube Transcript API  
- Lucide React Icons  

---

# 🚀 Features

## Frontend

- Modern responsive UI design  
- Premium animated gradient background  
- Glassmorphism UI cards  
- Framer Motion smooth animations  
- YouTube URL validation  
- Dynamic transcript rendering  
- Show Full / Show Less transcript  
- Copy transcript instantly  
- Download transcript as `.txt` file  
- Summary download functionality  
- AI analysis dashboard  
- Transcript statistics display  
- Character count and word count  
- Backend API status indicator  
- Processing time display  
- Error handling alert cards  
- Thumbnail preview support  
- Recent video history using Local Storage  
- Responsive navbar and footer  
- Animated loading states  

---

## Backend

- FastAPI backend architecture  
- REST API architecture  
- YouTube transcript extraction  
- Transcript cleaning and preprocessing  
- Summary generation system  
- Smart notes generation  
- Quiz generation  
- JSON API responses  
- Transcript validation system  
- Transcript availability checking  
- Improved backend error handling  
- Modular service architecture  
- Swagger API documentation  
- Frontend-backend integration  
- CORS enabled backend  

---

# 📂 Project Structure

```bash
Youtube-AI-Summarizer/
│
├── frontend/
│   ├── src/
│   │
│   │── components/
│   │    ├── Navbar.jsx
│   │    ├── Footer.jsx
│   │    ├── Loader.jsx
│   │    ├── UrlInput.jsx
│   │    ├── SummaryCard.jsx
│   │    ├── NotesSection.jsx
│   │    ├── TimestampList.jsx
│   │    ├── QuizCard.jsx
│   │    ├── StatsCard.jsx
│   │
│   │── services/
│   │    └── api.js
│   │
│   │── App.jsx
│   │── main.jsx
│
├── backend/
│   ├── main.py
│   ├── config.py
│   ├── utils.py
│   ├── requirements.txt
│   │
│   └── services/
│        └── transcript_service.py
│
└── README.md
```

---

# 🖥 Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Runs on:

```bash
http://localhost:5173
```

---

# ⚙ Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Or manually:

```bash
pip install fastapi uvicorn youtube-transcript-api python-dotenv
```

Run backend server:

```bash
uvicorn main:app --reload
```

Runs on:

```bash
http://127.0.0.1:8000
```

---

# 🔄 Running Full Stack Together

### Terminal 1 → Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```bash
http://localhost:5173
```

---

### Terminal 2 → Backend

```bash
cd backend
uvicorn main:app --reload
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

## Transcript Route

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
  "summary": "Generated summary...",
  "notes": ["Point 1", "Point 2"],
  "quiz": ["Question 1", "Question 2"],
  "characters": 2300,
  "words": 420,
  "preview": "Transcript preview..."
}
```

---

# 📘 Swagger API Documentation

FastAPI automatically generates interactive API documentation.

Open:

```bash
http://127.0.0.1:8000/docs
```

---

# 🎨 UI Highlights

- Premium animated gradient design  
- Glassmorphism cards  
- Framer Motion animations  
- Smooth auto-scroll behavior  
- Dynamic transcript rendering  
- Responsive dashboard layout  
- Loading animations  
- Transcript statistics cards  
- AI analysis result section  
- Copy transcript functionality  
- Download transcript feature  
- Processing time tracking  
- Responsive mobile-friendly design  

---

# 🧠 Current Functionalities

- ✅ Paste YouTube video URL  
- ✅ Extract YouTube transcript  
- ✅ Dynamic transcript rendering  
- ✅ AI summary generation  
- ✅ Smart notes generation  
- ✅ Quiz generation  
- ✅ Transcript statistics  
- ✅ Character count  
- ✅ Word count  
- ✅ Copy transcript feature  
- ✅ Download transcript (.txt)  
- ✅ Summary download functionality  
- ✅ Show Full / Show Less transcript  
- ✅ Recent video history storage  
- ✅ Backend connection indicator  
- ✅ Error handling system  
- ✅ Loading animations  
- ✅ FastAPI backend integration  
- ✅ Responsive React + Tailwind UI  

---

# 🚀 Upcoming Features

- Gemini API integration  
- OpenAI API integration  
- Real AI-powered summarization  
- Dynamic timestamp extraction  
- Export notes as PDF  
- Export quiz as PDF  
- Multi-language transcript support  
- Authentication system  
- Database integration  
- User dashboard  
- Video sentiment analysis  
- Personalized learning recommendations  

---

# 🛠 Tech Stack

## Frontend

- React.js  
- Vite  
- Tailwind CSS  
- Framer Motion  
- Lucide React Icons  

---

## Backend

- Python  
- FastAPI  
- Uvicorn  
- YouTube Transcript API  

---

## Development Tools

- Git  
- GitHub  
- VS Code  
- Postman  

---

# 🌐 Deployment

### Frontend Deployment

- Vercel

### Backend Deployment

- Render *(currently configuring)*

---

# 📌 Current Status

- ✅ Full-stack architecture completed  
- ✅ Frontend UI completed  
- ✅ FastAPI backend completed  
- ✅ Transcript extraction working locally  
- ✅ Summary generation working  
- ✅ Smart notes generation working  
- ✅ Quiz generation working  
- ✅ Transcript analytics implemented  
- ✅ Copy transcript feature working  
- ✅ Download transcript feature working  
- ✅ Summary download working  
- ✅ Recent video history implemented  
- ✅ Backend service refactoring completed  
- ✅ Improved backend error handling added  
- ✅ Premium UI redesign completed  
- ✅ Frontend deployed on Vercel  
- 🚧 Backend deployment on Render in progress  
- 🚧 Gemini/OpenAI integration planned  

---

# 👩‍💻 Developer

**Built by Pragati Pandey**

- Aspiring Software Engineer  
- Full Stack Developer  
- AI Enthusiast  

GitHub Repository:

https://github.com/pragatipandey-tech/Youtube-AI-Summarizer


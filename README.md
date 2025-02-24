# Endlesspedia

**Endlesspedia** is an interactive web-based game where users navigate through definitions to reach a target word, enhancing knowledge and engagement with related terms.

🔗 **Live Demo:** [Endlesspedia](https://endlesspedia.netlify.app)

---

## 📁 Project Structure
```
│── /frontend-web # React-based frontend hosted on Netlify
│── /backend # Flask backend hosted on AWS Lambda
│── README.md
```

---

## 🚀 Features

### 🖥️ Frontend (React + TypeScript)
- Interactive UI for exploring definitions  
- Dynamic content fetching using API  
- Game logic with a timer and step counter  
- Smooth animations for win conditions  
- Responsive design  

### ⚙️ Backend (Flask + AWS Lambda)
- Provides definitions and related terms  
- Handles search queries efficiently  
- Deployed as a serverless function on AWS Lambda  

---

## 🔧 Installation & Setup

### 🏗 Frontend Setup (React)

### 1. Install dependencies:
```sh
npm install
```

### 2. Run the development server:
```sh
npm run dev
```
The app should now be available at [http://localhost:3000](http://localhost:3000).

### 🛠 Backend Setup (Flask)

### 1. Navigate to the backend folder:
```sh
cd backend
```

### 2. Set up a virtual environment (optional but recommended):
```sh
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate
```

### 3. Install dependencies:
```sh
pip install -r requirements.txt
```

### 4. Run the backend server locally:
```sh
flask run
```
The API should now be available at [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

## 🚀 Deployment

### 🌐 Frontend Deployment (Netlify)
The frontend is deployed on Netlify. Any changes pushed to the `main` branch automatically trigger a deployment.

To manually deploy:

#### Build the project:
```sh
npm run build
```

#### Deploy using Netlify CLI:
```sh
netlify deploy --prod
```

### ☁️ Backend Deployment (AWS Lambda)
The backend is hosted as a serverless function on AWS Lambda using API Gateway.

To deploy updates:

#### Package the Flask app:
```sh
zip -r deployment.zip .
```

#### Upload the package to AWS Lambda via the AWS Console or CLI.

#### Update the API Gateway to reflect new changes if necessary.

## 📄 API Endpoints

| Method | Endpoint            | Description                         |
|--------|---------------------|-------------------------------------|
| GET    | `/definition/<term>` | Fetch definition of a word         |
| GET    | `/related/<term>`    | Get related terms for a word       |
| GET    | `/search?q=<query>`  | Search for words                   |

## 🛠 Tech Stack

### Frontend:
- React
- TypeScript
- Tailwind CSS
- Netlify

### Backend:
- Flask
- AWS Lambda (Serverless)
- API Gateway
- Python

## 📌 Future Improvements
- 🌟 Leaderboard to track best times
- 🎨 UI enhancements and animations
- 📖 More data sources for definitions
- 📱 Mobile App

## 👨‍💻 Contributing
Want to contribute? Feel free to submit issues or pull requests! 🎉



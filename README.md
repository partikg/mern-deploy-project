"# mern-deploy-project" 

Live URLs
Frontend: https://react-deploy-project-2.netlify.app
Backend: https://mern-api-2kt1.onrender.com/api/health
GitHub: https://github.com/partikg/mern-deploy-project

Run Locally

Backend
cd server
npm install
node index.js

Frontend
cd client
npm install
npm start

Docker
docker-compose up --build
docker-compose down

Deploy Frontend
cd client
npm run build
netlify deploy --prod --dir=build

Services
MongoDB Atlas: https://cloud.mongodb.com
Netlify: https://app.netlify.com
Render: https://dashboard.render.com
GitHub Actions: https://github.com/partikg/mern-deploy-project/actions

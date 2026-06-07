# 🌍 ExploreSphere

ExploreSphere is a full-stack web application that allows users to discover, explore, and share campgrounds and heritage destinations from around the world.

Users can browse interactive maps, view detailed information, upload images, write reviews, and contribute new locations to the community.

---

## ✨ Features

### 🏕️ Campgrounds
- Explore camping destinations
- View campground details
- Upload campground images
- Add, edit, and delete campgrounds
- Review and rate campgrounds

### 🏛️ Heritage Explorer
Explore historical and cultural destinations:

- 🛕 Temples
- 🏰 Forts
- 🏛️ Monuments
- 🌏 Heritage Sites

Features include:
- Interactive cluster maps
- Heritage details and descriptions
- Image galleries
- User reviews and ratings

### 👤 User Authentication
- Register new accounts
- Login and logout
- Authorization and ownership protection
- Profile dropdown menu

### 🗺️ Maps & Geolocation
- Mapbox integration
- Cluster maps
- Location-based exploration
- Geocoding support

### ☁️ Image Management
- Cloudinary image uploads
- Multiple image support
- Image deletion and management

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local Mongoose

### Services
- Mapbox
- Cloudinary

---

## 📂 Project Structure

```text
ExploreSphere/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── cloudinary/
├── seeds/
├── middleware.js
├── schemas.js
├── app.js
└── package.json
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Rajeevreddy-2006/CampVerse.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DB_URL=your_mongodb_url

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

MAPBOX_TOKEN=your_mapbox_token

SECRET=your_session_secret
```

Run the application:

```bash
npm start
```

or

```bash
nodemon app.js
```

---

## 📸 Main Features Showcase

- Interactive campground discovery
- Heritage destination explorer
- User-generated reviews
- Cluster maps with Mapbox
- Cloudinary image uploads
- Authentication and authorization
- Responsive Bootstrap UI

---

## 🔮 Future Enhancements

- User profile pages
- Favorite destinations
- Search and filtering
- Advanced ratings system
- Dark mode
- Travel itinerary planner

---

## 👨‍💻 Author

**Rajeev Reddy**

Built as a full-stack web development project using Node.js, Express, MongoDB, Cloudinary, and Mapbox.

---
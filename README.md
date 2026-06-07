# 🌍 ExploreSphere

ExploreSphere is a full-stack web application that enables users to discover, explore, and share both camping destinations and heritage landmarks through interactive maps, reviews, and image galleries.

The platform combines outdoor adventure with cultural exploration by allowing users to browse campgrounds, temples, forts, monuments, and heritage sites from a single application.

---

## ✨ Features

### 🏕️ Campgrounds Explorer

* Browse campgrounds on an interactive map
* View campground details and images
* Create, edit, and delete campgrounds
* Upload multiple images
* Add reviews and ratings
* View campground locations using Mapbox

### 🏛️ Heritage Explorer

Explore historical and cultural destinations categorized into:

* 🛕 Temples
* 🏰 Forts
* 🏛️ Monuments
* 🌏 Heritage Sites

Features:

* Category-wise heritage browsing
* Interactive cluster maps
* Historical descriptions
* Image galleries
* User reviews and ratings

### 👤 User System

* User Registration
* Secure Login & Logout
* Authentication with Passport.js
* Authorization and ownership protection
* User profile dropdown

### 🗺️ Maps & Geolocation

* Mapbox integration
* Cluster maps
* Geocoding support
* Location-based exploration

### ☁️ Image Management

* Cloudinary integration
* Multiple image uploads
* Image deletion support

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local Mongoose

### External Services

* Cloudinary
* Mapbox

---

## 📂 Project Structure

```text
ExploreSphere/
│
├── cloudinary/
│   └── index.js
│
├── controllers/
│   ├── campgrounds.js
│   ├── heritages.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── campground.js
│   ├── heritage.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── javascripts/
│   └── stylesheets/
│
├── routes/
│   ├── campgrounds.js
│   ├── heritages.js
│   ├── reviews.js
│   ├── heritageReviews.js
│   └── users.js
│
├── seeds/
│   ├── campgroundImages.js
│   ├── cities.js
│   ├── heritages.js
│   ├── seedHelpers.js
│   └── index.js
│
├── utils/
│   ├── catchAsync.js
│   └── ExpressError.js
│
├── views/
│   ├── campgrounds/
│   ├── heritages/
│   ├── layouts/
│   ├── partials/
│   ├── users/
│   ├── about.ejs
│   ├── home.ejs
│   └── error.ejs
│
├── middleware.js
├── schemas.js
├── app.js
├── package.json
├── vercel.json
└── README.md
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Rajeevreddy-2006/CampVerse.git
```

Move into the project:

```bash
cd CampVerse
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DB_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

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

## 🌟 Highlights

* Interactive campground discovery
* Heritage landmark exploration
* Category-based heritage browsing
* Cluster maps using Mapbox
* Cloudinary image storage
* Authentication & authorization
* Community reviews and ratings
* Responsive Bootstrap design

---

## 🔮 Future Improvements

* User profile page
* Search and filtering
* Favorite locations
* Advanced rating system
* Travel itinerary planner
* Notifications and recommendations

---

## 👨‍💻 Author

**Rajeev Reddy**

Built using Node.js, Express.js, MongoDB, Cloudinary, Mapbox, Passport.js, and Bootstrap.


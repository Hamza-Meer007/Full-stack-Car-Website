# React Car Dealership Website
This project combines a Django backend with a React frontend to create a modern car dealership website. The Django backend handles data storage, user authentication, and API endpoints, while the React frontend provides a dynamic and responsive user interface.

## Features

- Modern UI with Tailwind CSS
- TypeScript for type safety
- Responsive design for all devices
- Car listings with filtering and search
- Detailed car information pages
- User authentication (login/signup)
- User dashboard
- Contact forms and information
- About and Services pages
- Japanese market focus

## Tech Stack

- Backend: Django, Django REST framework
- Frontend: React, TypeScript, Tailwind CSS
- Database: PostgreSQL or MySQL (configurable in Django)
- API: RESTful API with JSON data exchange

## Getting Started

### Prerequisites

- Node.js (v14 or later) [Click Here](https://nodejs.org/en/download/)
- Download the **.msi** installer for windows.
- Verify the installation by running
```bash
# node installation
node -v

# npm installation
npm -v

```

### Installation

1. Clone the repository 
```bash
git clone https://github.com/Hamza-Meer007/Full-stack-Car-Website.git
```
2. cd frontend
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be located in the `dist` directory.

## Project Structure

```
carzone-react/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── cars/        # Car-related components
│   │   ├── dashboard/   # Dashboard components
│   │   └── layout/      # Layout components
│   ├── data/            # Mock data
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Changing Colors

The primary and secondary colors can be customized in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#e91e63', // Change this to your preferred primary color
        // ... other shades
      },
      secondary: {
        DEFAULT: '#333333', // Change this to your preferred secondary color
        // ... other shades
      },
    },
  },
},
```

### Adding Pages

To add a new page:

1. Create a new component in the `src/pages` directory
2. Add a new route in `src/App.tsx`


## Backend Features

- User authentication (login/signup) with Django's built-in auth system
- Car model with fields for make, model, year, price, and features
- API endpoints for car listings, filtering, and search
- User dashboard with profile information and saved cars
- Contact form handling with email notifications



## Getting Started

### Prerequisites
- **Python 3.6+**: Download Python from the [official website](https://www.python.org/downloads/).
- **pip**: Python package installer (usually included with Python installations).

### Installation


## Installation

Follow these steps to set up the project locally:


1.  **Create a Virtual Environment**

    It is recommended to create a virtual environment to manage project dependencies.

    ```
    python -m venv venv
    ```

    Activate the virtual environment:

    -   On Windows:

        ```
        venv\Scripts\activate
        ```

    -   On macOS and Linux:

        ```
        source venv/bin/activate
        ```

2.  **Install Python Dependencies**

    Install the required Python packages using pip:

    ```
    pip install -r requirements.txt
    ```

3. **Run Migrations**
```bash
python manage.py migrate

```

4. **Run Django server**
```bash
python manage.py runserver
```
# Restaurant Project Backend

## Getting Started

To set up and run this project on your local machine, follow the steps below.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (Node Package Manager, comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running on your machine)

### Installation

`git clone https://github.com/khalilahmad3212/restuarant-backend.git`

`npm install`

### *.env file setup*

rename `.env.example` to `.env `

### Run the Project

`npm run dev `

### Populate Database

[Click Here](http://localhost:5000/api/populate/)
*(Tip: Hold `Ctrl` (or `Cmd` on Mac) and click the link to open it in a new tab.)*


### API Documentation

` /api/auth/register`

###### Request

```
{
  name: 'Khalil',
  email: 'meerkhalil@gmail.com'
  password: 'password'
}
```

###### Response

```
{
    "user": {
        "_id": "66d481acab622ec55528903b",
        "name": "Meer Khalil 02",
        "email": "meer3@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDQ4MWFjYWI2MjJlYzU1NTI4OTAzYiIsImlhdCI6MTcyNTIwMjg2MCwiZXhwIjoxNzI3Nzk0ODYwfQ.uRMhdqEkbJObmCPOq66dvN4UcaAzfsDfdqkmR9c-bo0"
}
```


` /api/auth/login `

###### Request

```
{
    "email": "meer2@gmail.com",
    "password": "password"
}
```

###### Response

```
{
    "user": {
        "_id": "66d20bcac6863f42d489b45e",
        "name": "Meer Khalil 02",
        "email": "meer2@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDIwYmNhYzY4NjNmNDJkNDg5YjQ1ZSIsImlhdCI6MTcyNTIwMjk5NSwiZXhwIjoxNzI3Nzk0OTk1fQ.rzvPy9YYXiwN8YbAKuv0rDGil4BXN6MPTIQHz9AY-U0"
}
```

` /api/restaurants/`

This Route is protected. Without login it will not give any response.

###### Parameters

` page = 1`

` cuisine = Italian`

` location = New York`

` name = Restaurant Name`

`limit = 12`

###### Response

```
{
    "success": true,
    "count": 12,
    "pages": 1667,
    "data": [
        {
            "_id": "66d2d5d3a408ba950b48e955",
            "name": "Kautzer, Jerde and Upton",
            "cuisine": "Italian",
            "location": "Los Angeles",
            "rating": 4,
            "__v": 0
        }
     ]
}
```

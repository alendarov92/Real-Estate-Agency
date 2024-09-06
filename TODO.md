# Tasks

## Initial setup

1. Initialize project / 'npm - init --yes' /
2. Install initial dependencies / -D nodemon /, express, express-handlebars, bcrypt, jsonwebtoken, cookie-parser /
3. Add resources
4. Express config / 
const express = require('express') 
const app = express();
app.listen(PORT, () => console.log(`Surver is listening on port ${PORT}`)) /

    * body parser / app.use(express.urlencoded({extended: false})); /
    * static path / app.use(express.static('public')); /

5. Configure Express handlebars / 
app.engine('hbs', hbs.engine({
    extname: 'hbs'
})) /

6. Add router   
7. Add home controller
8. Add layout
9. Add home view/template
10. Fix static assets and paths

## Database setup

1. Install mongoose
2. Configure mongoose
    * creating path in .env
    * creating file 'db.js' and make the config...
    * call the db in index.js
3. Create User model

## Authentication

1. Add auth controller
    * add contreoller to routes
2. Add login and register pages
    * modify hrefs in navigation
    * modify names in forms
3. Add post login and register actions
4. Create user with register
    * creating folder 'services'
    * authServices.js
5. Hash password
6. Login action
7. Login service method / find user, validate password /
8. Generate jwt token
    * add secret to global env
9. Logout



## Notifications

1. Add notification element to layout

## Error handling

1. Add error mapper

## Others

1. Auth Middleware, use http only cookie
2. Navigation links
3. Route guards
4. Ad 404 page
5. User validation
6. Global error heandling
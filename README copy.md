# Node class

# TutoringApp
Learning NodeJS with Zuri Program

##  SET UP
### 1. Create your project directory/folders 
     - contollers
     - db
     - middleware
     - models
     - routes
     - .env
     - server.js or index.js
     - .gitignore
     - readme.md


### 2. Create an express server in server.js
   - require express
   - Connect to mongodb
   - require dotenv
   - set your PORT to process.env
   - connect to Database
   - Initialise express
   - Initialise express middleware
   - Create a simple get request home-route (optional)
   - Define our routes
   - Listen to our app connection



### 3. install needed pakages
npm init -y
npm install express express-validator, jsonwebtoken, bcrypt, dotenv 
npm install nodemon --save dev
-in your package.json change your main: to server.js

 
 ### 4. setup Database connection inside db folder
install mongodb on your computer(check step to install this)
npm install mongoose
run mongod  (server)
run mongo (shell)
- Start a local mongodb server connection
- Create a connection function for mongodb
 
### 5. create model schema e.g 
 - user schema 
 - student schema
 - tutor schema
 - admin schema
 - subject schema
 - category schema
 - lesson schema

 ### 6. create Routes e.g
 - user route(general)  -/api/auth
 - student route -/api/student
 - tutor route  -/api/tutor
 - admin route  -/api/admin
 - subject route  -/api/subject
 - category route -/api/category

 ### 7. create controllers e.g 
 - user controller -/register,/login
 - student controller 
 - tutor controller 
 - admin controller

### 8. setup postman



### Build a server for an online tutoring app
you are to build an online tutoring app that has three categories of users Admin , tutors and students.
 -A user can register as a student on this platform. Afterwards they can view all categories they can belong to. They can also view all subject taught in tha category. Other actions they can carry out are outlined further down this page.
-A user can also register as a tutor. Afterwards, they can perform actions specific to tutors as outlined below.
-The last category of users is the admin. No one can sign up as an admin. Only tutors can become admins. Making a tutor an admin is up to you as to how you want to implement that. 
You are however, expected to provide admin details on your readme when documenting your APIs. I will be testing the admin routes with the admin details you provide on your readme.(why not /env file)
However I will sign up as a tutor and a student to test other functionalities. Ideally a user should not be able to carry out actions they not priviledged to. You should take this into consideration and protect your routes.

The users on your platform have different privileges based on the roles as outlined below.

### General (For Admin, Tutors and Students)
NOTE: Admin does not sign in (has already been manually added/hard coded)
1. Students/Tutors can sign in.
2. Admin/Students/Tutors can login in.
3. Admin/Students/Tutors can retrieve a subjects in a category
4. Admin/Students/Tutors can retrieve all subjects by category
5. Admin/Students/Tutors can retrieve all category.
6. Admin/Students/Tutors can search for subjects by name, sorted alphabetical order.
7. Admin/Students can search for tutors by first name, sorted alphabetical

### Admin
NOTE: Admin does not register/sign in (will be manually added/hard coded,admin will have details they can register-with)
1. Admin can create subjects under 3 categories primary, JSS(Junoir Sec Sch), SSS(Senoir Sec Sch)
2. Admin can update subjects in a category
3. Admin can delete subjects in a category
4. Admin can delete or update subjects in a category
5. Admin can retrieve all tutors
6. Admin can get a tutor
7. Admin can deactivate a tutor
8. Admin can book lessons
9. Admin can retrieve all lessons
10. Admin can get a lesson
11. Admin can update a lesson
12. Admin can delete a lesson
13. Admin sign up as a tutor but you can make a tutor of your choice an admin by giving them the  admin role. Not all tutors must be admin,just a few

### Tutors
1. Tutors can register to take a subject in a category(POST)
2. Tutors can see all subjects they registered to take(GET) 
3. Tutors can update a registered subject(PUT) 
4. Tutors can delete a registered subject(DELETE) 

### Students
1. Students can sign up
2. Students can see all tutors taking a subject in a category
3. Students can book lessons


**WHAT WOULD BE NEEDED FOR THIS CLASS**

***Dependency Packages***
Express
Mongo database
Express validator
Jsonwebtoken
dotenv
mongoose
bcrypt

***Dev Dependencies***
nodemon

***Application***
Postman

### Users
1. Any users
2. Admin (Super)
3. Tutor
4. Students

### General role & routes for any user
*** NOTE:Any user can sign in except Admin (has already been added manually/hard coded) ***
1. Any user Can sign in/register as a Student. - (/api/student/register) POST
2. Any user Can sign in/register as a tutor. - (/api/tutor/register) POST

3. Any user can login in as admin   - /api/auth/adminAuth,   POST
4. Any user can login in as student -  /api/studentAuth  POST
5. Any user can login in as tutor - /api/tutorAuth POST

6. Any user can get a subject in a category by id. -(api/category/:categoryId/:subjectId) GET
7. Any user can get all subjects by category. -(api/subjects?category=:category) GET
8. Any user can search for subjects by name, sorted alphabetically in ascending order. -(api/subjects?name=:name) POST
9. Admin and students can search for tutors by firstname, sorted in alphabetical asc. order. -(api/tutors?firstname=:firstName) POST
10. Admin and students can search for tutors by ID-(api/tutors?ID=:ID) POST

Admin User Roles
1. Can create subjects under three categories: primary, jss, sss (api/subject) POST
2. can update subject in a category (by id) (api/subject) PUT
3. can delete subject in a category (api/subject) DELETE
4. Can delete or update a category (api/category) DELETE & PUT
5. Can get all tutors (api/tutors) GET
6. can get a tutor (api/tutor/:userId) GET
7. can deactivate a tutor (api/tutor/:userId) PUT
8. can book lesssons (api/lessons) POST
9. can retreive all lessons (api/lessons) GET
10. can get a lesson (api/lessons/:lessonId) GET
11. can update a lesson (api/lessons/:lessonId) PUT (by Id) [Category: JSS, Subject: Mathematics, Lesson: Add numbers]
12. can delete a lesson (api/lessons/:lessonId) DELETE
13. can sign up as a tutor (api/tutor/:userId) PUT {isTutor: true)
14. can make a tutor of your choice an admin (api/tutor/:userId) role = admin

Tutor User Roles
1. Registers to take a subject in a category (api/category/:categoryId/:subjectId) POST
2. Can see all subjects they registered to take (api/subjects) GET
3. Can update a registed subject (api/subjects/:subjectId) PUT
4. Tutors can delete a registered subject (api/subjects/:subjectId) DELETE

Students User Roles
1. Can sign up (/api/register/student) POST
2. Can see all tutors taking a subject in a category (/api/tutors/) GET
3. Can book lessons (api/lesson/book) POST

Category Model (parent to 'Subject')
- Name eg Primary, JSS, SSS
- Subject (relationship)
- description: {


Subject Model
- Name eg Social Studies
- user (relationship)
- Category (relationship)
- isRegistered

Lesson Model
- lessonName
- Category (relationship)
- Subject (relationship)

User Model
- First Name
- Last Name
- email
- password
- Role: admin, tutor, student
- isTutor: boolean, default: false
- isAdmin
- createdAt
- updatedAt





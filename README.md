
# Virtual Classroom Web Application

## Project Overview

The Virtual Classroom Web Application is designed to facilitate online education by providing a platform where instructors can manage classes, sessions, and course materials, while students can engage with the content and participate in discussions. This project is a work-in-progress, and the following README outlines the features and current status of the application.

## Features Implemented

### 1. User Authentication
   - Basic authentication allows users to log in using predefined credentials.
   - Access to the classroom and other features is restricted to authenticated users.

### 2. 2D Classroom Map
   - A 2D interactive map representing classrooms has been implemented.
   - Users can navigate the map using arrow keys.
   - The map adjusts according to the screen size and features background images for classrooms.
   - A user character (Mario-like) is displayed on the map and can move around.

### 3. Classroom Management
   - **Classroom List**: A component to list available classrooms.
   - **Classroom Details**: Displays classroom details and interactive map.

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

## Usage

1. **Login**
   - Use the following credentials to log in:
     - Username: `user`
     - Password: `password`

2. **Navigate**
   - Use arrow keys to move the character on the 2D map.
   - The map features different classrooms, represented with images.

## Future Enhancements

- **Admin/Instructor Dashboard**: Implement functionality for administrators/instructors to manage classes, units, and sessions.
- **Course Material**: Enable users to access and interact with course materials and lectures.
- **Discussion System**: Implement a nested comment system for discussions on lectures.
- **Enrollment System**: Ensure only enrolled students can access specific classes.
- **Performance and Security**: Optimize the application for performance and implement security best practices.


```

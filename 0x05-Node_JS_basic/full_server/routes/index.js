import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

/**
 * Define the routes for the application.
 */

// Root route to display a homepage message
router.get('/', AppController.getHomepage);

// Route to display all students
router.get('/students', StudentsController.getAllStudents);

// Route to display students filtered by their major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;

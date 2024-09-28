import express from 'express';
import {
    createEvent,
    getEvents,
    getEventById,
    deleteEvent
} from '../controllers/eventController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

// Create a new event (protected route)
router.route("/events").post(createEvent);

// Get all events
router.route("/events").get(getEvents);

// Get a specific event by ID
router.route("/events/:id").get(getEventById);



// Delete an event (protected route)
router.route("/events/:id").delete( deleteEvent);

export default router;

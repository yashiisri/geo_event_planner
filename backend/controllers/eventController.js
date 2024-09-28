import { Event } from '../models/Event.js'; // Adjust the import based on your file structure

// Create a new event
export const createEvent = async (req, res) => {
    try {
        const { title, description, location, date } = req.body;

        // Validate the input
        if (!title || !description || !location || !date) {
            return res.status(400).json({
                message: 'All fields are required',
                success: false
            });
        }

        // Create a new event
        const event = new Event({ title, description, location, date });
        await event.save();

        return res.status(201).json({
            message: 'Event created successfully',
            success: true,
            event
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error creating event',
            success: false
        });
    }
};

// Get all events
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find(); // Fetch all events
        return res.status(200).json({
            message: 'Events fetched successfully',
            success: true,
            events
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error fetching events',
            success: false
        });
    }
};

// Get a specific event by ID
export const getEventById = async (req, res) => {
    try {
        const { id } = req.params; // Extract event ID from request parameters

        const event = await Event.findById(id); // Find event by ID
        if (!event) {
            return res.status(404).json({
                message: 'Event not found',
                success: false
            });
        }

        return res.status(200).json({
            message: 'Event fetched successfully',
            success: true,
            event
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error fetching event',
            success: false
        });
    }
};


// Delete an event
export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params; // Extract event ID from request parameters

        const event = await Event.findByIdAndDelete(id); // Delete event
        if (!event) {
            return res.status(404).json({
                message: 'Event not found',
                success: false
            });
        }

        return res.status(200).json({
            message: 'Event deleted successfully',
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error deleting event',
            success: false
        });
    }
};

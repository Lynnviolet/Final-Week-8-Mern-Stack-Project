// File: controllers/workoutController.js
import Workout from '../models/Workout.js';

export const createWorkout = async (req, res) => {
  const { type, duration, date } = req.body;
  try {
    const workout = new Workout({
      user: req.user._id,
      type,
      duration,
      date,
    });
    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Workout not found' });

    if (workout.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await workout.deleteOne();
    res.json({ message: 'Workout removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

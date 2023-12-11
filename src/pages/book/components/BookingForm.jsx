import { useState } from "react";
import { object, string, date, number, union } from "zod";

const reservationSchema = object({
  name: string().min(2).max(50),
  date: date(),
  time: string(),
  guests: number().min(1),
  occasion: union([
    string().max(100), // Custom occasion
    string("Birthday", "Anniversary"), // Predefined occasions
  ]),
});

const ReservationForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Validate the form data
      const data = reservationSchema.parse({
        name,
        date,
        time,
        guests: parseInt(guests, 10),
        occasion,
      });

      // If validation succeeds, submit the data
      onSubmit(data);

      // Clear the form after submission
      setName("");
      setDate("");
      setTime("");
      setGuests("");
      setOccasion("");
      setValidationErrors({});
    } catch (error) {
      // If validation fails, set the validation errors
      setValidationErrors(error.errors);
    }
  };

  return (
    <div className="reservation-form container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required/>
        </label>
        <label>
          Guests:
          <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
        </label>
        <label>
          Occasion:
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </label>
        {validationErrors.occasion && (
          <p className="validation-error">{validationErrors.occasion}</p>
        )}
        <button type="btn-lg-secondary submit">Reserve Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;

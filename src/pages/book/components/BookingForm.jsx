import { useState } from "react";
const ReservationForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && time && guests && occasion) {
      onSubmit({ name, date, time, guests, occasion });
      // Limpiar los campos después de enviar la reserva
      setName('');
      setDate('');
      setTime('');
      setGuests('');
      setOccasion('');
    }
  };

  return (
    <div className="reservation-form container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Guests:
          <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
        </label>
        <label className="label-full">
          Occasion:
          <input type="text" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
        </label>
        <button type="btn-lg-secondary submit">Reserve Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;

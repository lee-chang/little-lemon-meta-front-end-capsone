import ReservationCard from './BookCard';

const ReservationList = ({ reservations }) => {
  return (
    <div className="reservation-list">
      <h2>Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <div>
          {reservations.map((reservation, index) => (
            <ReservationCard key={index} reservation={reservation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationList;

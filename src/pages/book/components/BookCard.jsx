import calendarCheck from "../../../assets/calendar-check.svg";

const ReservationCard = ({ reservation }) => {
  const { name, date, time } = reservation;

  return (
    <div className="reservation-card">
      <div className="reservation-header">
        <img src={calendarCheck} alt="Calendar Check" />
        <p>{date}</p>
      </div>
      <div className="reservation-details">
        <p>{`Reserved by: ${name}`}</p>
        <p>{`Time: ${time}`}</p>
      </div>
    </div>
  );
};

export default ReservationCard;

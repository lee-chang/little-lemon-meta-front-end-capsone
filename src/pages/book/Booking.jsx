import './style.css'

import ReservationForm from './components/BookingForm';
import ReservationList from './components/BookingList';
import bannerImage from '../../assets/restaurant.jpg';
import { useState,useEffect } from 'react';

const ReservationPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Obtener las reservas almacenadas en el localStorage al cargar la página
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(storedReservations);
  }, []);

  const handleReservationSubmit = (newReservation) => {
    // Agregar la nueva reserva al estado y al localStorage
    const updatedReservations = [...reservations, newReservation];
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  return (
    <section>
    <div className="reservation-page">
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
        <h1>Reserve a Table</h1>
      </div>
      <div className="reservation-container container">
        <ReservationForm onSubmit={handleReservationSubmit} />
        <ReservationList reservations={reservations} />
      </div>
    </div>
    </section>
  );
};

export default ReservationPage;

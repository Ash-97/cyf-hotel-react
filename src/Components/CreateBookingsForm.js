import React, { useState } from "react";

function CreateBookingsForm(props) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [newCustomerBooking, setNewCustomerBooking] = useState("");

  function handleChange(event) {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    }
    if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    }
    if (event.target.name === "surname") {
      setSurname(event.target.value);
    }
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "roomId") {
      setRoomId(event.target.value);
    }
    if (event.target.name === "checkInDate") {
      setCheckInDate(event.target.value);
    }
    if (event.target.name === "checkOutDate") {
      setCheckOutDate(event.target.value);
    }
    setNewCustomerBooking({
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props.setBooking(element => element.concat(newCustomerBooking));
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Add New Booking</h3>
      <div className="form-group">
        <label htmlFor="customerTitle">Title</label>
        <input
          type="text"
          value={title}
          name="title"
          className="form-control"
          placeholder="Enter Title Here"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerFirstName">First Name</label>
        <input
          type="text"
          value={firstName}
          name="firstName"
          className="form-control"
          placeholder="Enter First Name Here"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerSurname">Surname</label>
        <input
          type="text"
          value={surname}
          name="surname"
          className="form-control"
          placeholder="Enter Surname Here"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerEmail">Email</label>
        <input
          type="email"
          value={email}
          name="email"
          className="form-control"
          placeholder="Enter Email Here"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerRoomId">Room ID</label>
        <input
          type="text"
          value={roomId}
          name="roomId"
          className="form-control"
          placeholder="Enter RoomId Here"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerCheckInDate">Check In Date</label>
        <input
          type="date"
          value={checkInDate}
          name="checkInDate"
          className="form-control"
          placeholder="Enter Check In Date Here"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerCheckOutDate">Check Out Date</label>
        <input
          type="date"
          value={checkOutDate}
          name="checkOutDate"
          className="form-control"
          placeholder="Enter Check Out Date Here"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreateBookingsForm;

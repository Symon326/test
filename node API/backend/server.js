const express = require("express");
const app = express();
const PORT = 3000;

// Middleware 
app.use(express.json());

// to store Data  using arrays
let rooms = [];
let bookings = [];
let customers = [];
let nextRoomId = 1;
let nextCustomerId = 1;

// API endpoint to create a new room
app.post("/rooms", (req, res) => {
  const { roomName, seatsAvailable, amenities, pricePerHour } = req.body;
  const newRoom = {
    id: nextRoomId++,
    roomName,
    seatsAvailable,
    amenities,
    pricePerHour,
  };
  rooms.push(newRoom);
  res.status(201).send("Room created successfully");
});

// API to create a new customer
app.post("/customers", (req, res) => {
  const { customerName } = req.body;
  const newCustomer = {
    id: nextCustomerId++,
    customerName,
  };
  customers.push(newCustomer);
  res.status(201).send("Customer created successfully");
});

// API to book a room
app.post("/bookings", (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  // Check if the room exists
  const roomExists = rooms.some((room) => room.id === roomId);
  if (!roomExists) {
    return res.status(400).send("Room does not exist");
  }

  // Check if the room is available for booking
  const isAvailable = bookings.every((booking) => {
    return (
      booking.roomId !== roomId ||
      booking.date !== date ||
      startTime >= booking.endTime ||
      endTime <= booking.startTime
    );
  });

  if (!isAvailable) {
    return res.status(400).send("Room is already booked at that time");
  }

  // Check if the customer exists
  const customerExists = customers.some(
    (customer) => customer.customerName === customerName
  );
  if (!customerExists) {
    return res.status(400).send("Customer does not exist");
  }

  const newBooking = { customerName, date, startTime, endTime, roomId };
  bookings.push(newBooking);
  res.status(201).send("Room booked successfully");
});

// List rooms with booking data
app.get("/rooms/booked-data", (req, res) => {
  const bookedRooms = rooms.map((room) => {
    const bookedInfo = bookings.find((booking) => booking.roomId === room.id);
    return {
      roomName: room.roomName,
      bookedStatus: bookedInfo ? "Booked" : "Available",
      customerName: bookedInfo ? bookedInfo.customerName : "",
      date: bookedInfo ? bookedInfo.date : "",
      startTime: bookedInfo ? bookedInfo.startTime : "",
      endTime: bookedInfo ? bookedInfo.endTime : "",
    };
  });
  res.send(bookedRooms);
});

// List all customers with booking data
app.get("/customers/booked-data", (req, res) => {
  const bookedCustomers = customers.map((customer) => {
    const bookedInfo = bookings.find(
      (booking) => booking.customerName === customer.customerName
    );
    const roomInfo = rooms.find((room) => room.id === bookedInfo.roomId);
    return {
      customerName: customer.customerName,
      roomName: roomInfo ? roomInfo.roomName : "Unknown",
      date: bookedInfo ? bookedInfo.date : "",
      startTime: bookedInfo ? bookedInfo.startTime : "",
      endTime: bookedInfo ? bookedInfo.endTime : "",
    };
  });
  res.send(bookedCustomers);
});

// List booking history
app.get("/customers/:customerName/booking-history", (req, res) => {
  const customerName = req.params.customerName;
  const customerBookings = bookings.filter(
    (booking) => booking.customerName === customerName
  );
  res.send(customerBookings);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

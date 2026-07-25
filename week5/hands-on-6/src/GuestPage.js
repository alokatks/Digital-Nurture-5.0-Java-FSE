import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Available Flights</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI-101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>08:00 AM</td>
          </tr>
          <tr>
            <td>AI-202</td>
            <td>Bangalore</td>
            <td>Chennai</td>
            <td>11:30 AM</td>
          </tr>
          <tr>
            <td>AI-303</td>
            <td>Kolkata</td>
            <td>Pune</td>
            <td>03:45 PM</td>
          </tr>
        </tbody>
      </table>
      <p><i>Please login to book a ticket.</i></p>
    </div>
  );
}

export default GuestPage;
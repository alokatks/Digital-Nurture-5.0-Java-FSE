import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You are logged in. You can now book your flight tickets.</p>
      <label>
        Select Flight:
        <select>
          <option value="AI-101">AI-101 (Delhi to Mumbai)</option>
          <option value="AI-202">AI-202 (Bangalore to Chennai)</option>
          <option value="AI-303">AI-303 (Kolkata to Pune)</option>
        </select>
      </label>
      <br /><br />
      <button>Book Ticket</button>
    </div>
  );
}

export default UserPage;
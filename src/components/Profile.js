import React from "react";

function Profile({ name, email }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg w-1/2 mx-auto mt-4">
      <h2 className="text-xl font-semibold">Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default Profile;

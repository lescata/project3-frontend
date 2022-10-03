function Profile() {
  return (
    <div className="contactDetails">
      <h1 className="heading">YOUR CONTACT DETAILS</h1>
      <input
        type="firstName"
        placeholder="First Name"
        className="firstName"
        required
      />

      <input
        type="lastName"
        placeholder="Last Name"
        className="lastName"
        required
      />

      <input type="email" placeholder="Email" className="email" required />

      <input
        type="password"
        placeholder="Password"
        className="password"
        required
      />

      <div className="address">
        <h1 className="heading">ADDRESS</h1>
        <div className="street">
          <input
            type="number"
            placeholder="Number"
            className="number"
            required
          />
          <input
            type="streetName"
            placeholder="Street Name"
            className="streetName"
            required
          />
        </div>

        <input type="city" placeholder="City" className="city" required />

        <input
          type="country"
          placeholder="Country"
          className="country"
          required
        />
      </div>
    </div>
  );
}

export default Profile;

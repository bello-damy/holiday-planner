import "./Form.css"


const Form = () => {
  return (
    <div className="form-body">
      <div classname="form-container">
        <h1>Holiday Booking Form</h1>
        <form>
          <label htmlFor="firstname">First Name*</label>
          <input type="text" placeholder="Enter First Name" name="`firstname" />

          <label htmlFor="Lastname">Last Name*</label>
          <input type="text" placeholder="Enter Last Name" name="`lastname" />

          <label htmlFor="email">Email*</label>
          <input type="email" placeholder="Enter Email" name="email" />

          <label htmlFor="contact">Contact*</label>
          <input type="text" placeholder="Enter Phone #" name="contact" />

          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" />Male
          <input type="radio" name="gender" />Female
          <input type="radio" name="gender" />Other

          <label htmlFor="destination">Destination</label>
          <select name="destination" id="destination">
            <option value="Newcastle">Newcastle</option>
            <option value="London">london</option>
            <option value="Dubai">Dubai</option>
            <option value="NewYork">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Berlin">Berlin</option>
          </select>

          <label htmlFor="resume">Resume</label>
          <input type="file" placeholder="Select Resume" name="resume" />

          <label htmlFor="url">URL</label>
          <input type="text" placeholder="Enter url" name="url" />

          <label htmlFor="about">About</label>
          <textarea name="about" id="about" cols="30" rows="10" placeholder="Enter description"></textarea>

          <button type="button">Reset</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
import "./Form.css"
import { useState } from "react"


const Form = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    contact: '',
    destination: '',
    info: ''
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const ResetFunc = () => {
    setValues({ firstName: '', lastName: '', email: '' })
  }

  return (
    <div className="form-body">
      <div className="form-container">
        <h1>Holiday Booking Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
            onChange={(e) => handleChange(e)}
            value={values.firstName}
          />

          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
            onChange={(e) => handleChange(e)}
            value={values.lastName}
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            autoComplete="off"
            required
            onChange={(e) => handleChange(e)}
            value={values.email}
          />

          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            placeholder="Enter Phone #"
            name="contact"
            required
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender"
            onChange={(e) => handleChange(e)} />Male
          <input type="radio" name="gender"
            onChange={(e) => handleChange(e)} />Female
          <input type="radio" name="gender"
            onChange={(e) => handleChange(e)} />Other

          <label htmlFor="destination">Destination</label>
          <select name="destination" id="destination" onChange={(e) => handleChange(e)}>
            <option value="Newcastle">Newcastle</option>
            <option value="London">London</option>
            <option value="Dubai">Dubai</option>
            <option value="NewYork">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Berlin">Berlin</option>
          </select>

          <label htmlFor="info">Additional Information</label>
          <textarea
            name="info"
            id="info"
            cols="30"
            rows="10"
            placeholder="Enter additional information"
            onChange={(e) => handleChange(e)}>
          </textarea>

          <button type="button" onClick={ResetFunc}>Reset</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
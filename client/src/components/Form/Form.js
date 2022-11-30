import React, { useState } from "react"
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import Result from "../Result/Result"

const Form = () => {
  const history = useHistory()
  const [state, setState]= useState(false)
  const [type1, setType1] = useState(null)
  const onSubmit = async (e) => {
    console.log("this is array", array.toString())
    const post = { selected: array.toString() }
    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', post)
      setState(true)
      setType1(res.data)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }
  var array = []
  return (
    <MDBContainer>
      {state ? <Result type={type1}/> :
      <MDBRow className="justify-content-center">
        <MDBCol size="5">
          <form className="bg-white mt-3" action="">
            <p className="fw-bold">I feel most energetic and focused:?</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="In the morning"
              value="In the morning"
              // defaultChecked
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="During the afternoon and early evening"
              label="Late at night"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="Option 3"
            />
          </form>
          <form className="bg-white mt-3" action="">
            <p className="fw-bold">When you speak to people, you tend to:</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped"
              value="Have your hands clasped"
              onClick={(e)=>array.push(e.target.value)}

              // defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
            />
          </form>
          <form className="bg-white mt-3" action="">
            <p className="fw-bold">When you speak to people, you tend to:</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped"
              // defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
            />
          </form>
          <form className="bg-white mt-3" action="">
            <p className="fw-bold">When you speak to people, you tend to:</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped"
              defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
            />
          </form>

          <form className="bg-white mt-3" action="">
            <p className="fw-bold">When you speak to people, you tend to:</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped"
              defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
            />
          </form>
          <form className="bg-white mt-3" action="">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJgAZQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EADcQAAEEAQIEAwYEBQUBAAAAAAEAAgMRBAUhEhMxQSJRYQYUcYGRsTJCocEVI2LR8CQzUnLhFv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACYRAAICAQQCAgEFAAAAAAAAAAABAhEDBBIhMUFRFCITIzJCYYH/2gAMAwEAAhEDEQA/APl0cKKji6KRNO2yLjaLqlt3JnobGmcZDY6IiOGuy2iYiGR3SXcWUbBuT6LvJ9EwEO3Rd5KO85wF/J9Fzk+iPaxpc5oO7diPJdMPomjJEZQFro67Id8XiTR8YQ0kdK8KZmyNoC5XospIr7JjwClgWWUr7D/EVvh36KJkYlxNQlm7MUEKwxSw3SYwsHcIjlArHtXg9HdL0Ko7a7cIyEhyI93Y7YqnIMbxXQ+S6SYI5EFRR20K5gvspiO7OTCOPicOH7qLuzRFpoVvIdlPjLhzGNDeHfYAf59V10WyrB7kNSm92lx38RIaYXBwrY9kcY9iaRcqFglJCmSMoeRiamMOtDywUr48lGXNhsVuaQsnNR0jEM9hulaMrZmnHajAC1FsG0FEXJiqI1x2BzQaR8UDXNpw3WOJjyMoA23yTJkZ7tWSdo9HG0wR+F+ZhWDo3NPibacthsdwqSY5I2AKks6THlg3IVNAG42ReO9rnNaTRJVXxFhILStMOHjzMdh/NI0fqqSyRlyThjlEw91iZqWU5rGgiWSiB6tRDGkghZzG8iWQXbpHdTexbGf3W+NvYcoTfBXADOiI3WcjLFEJjJH3HRYvjBU97Ro2piiaHbYIV0G6cyQrJ8O3RaIZuDJkwWxO+MAriOfjhxshRU/KS/CzfDmljoNdxD1KcQZTuHxMB+CFZp1m7RUeneTnKMtVhKx0mag6OeLhF1Z7EIyKFk35K9QlrsTKbHTOE/JZQ/xPHdcYNeSlKenydyGj8nH1Eby6UHdvmqY2lGLMgkdXC2QON+htCjWtQhA5uPxN+CZ6dq38S5kePC7ntjc4NcNvL7kKOxJ/SVoq80nF740zzTsWH3t0THRl5J4Sxwdty4e4+C2bC5pojdXiZPiam582NHEyOZrLFnrAy62HQsI+SZSZmKd7Z6Js27wJpZQUafYvANUsJYyT0TQzQkWxzPmhJNQxmylkrG/EKSjKa47NMskcbt9ARbX4lQtDgjHDGyLdFNR7BDOima7Ytc30KP4cqVg+Vgbqwd0Ci25reljb1US3l9FLxexP/wDScuSjDPwX1q9k+w8l88TZYwXxu6OaF4PA0HVdY4BjMYYzYLy4MDa6k367L0+i+yWqac1726zgRCVha6nvcW73f4atXy6eDX17MOLV5E/t0eg54Yf92SM+oREWdM0g8yJ4/qFJHp+QzVAzTsX2hxfe4RZkfjuJmA8ga/zdNHQ47MRkkzosZ52cZS4C/lf3WGWkkzV8zG+0Noc/Hna6KeOuIcPHFVtvySTU9GmGRzItbeIJKYBI5rCb6NIFA7/VFs0w+82/VhFBQ4YsdoLn7b28gn6fVX9yDc2Kf3lvu7WuuARk8y6qye22/c0N+qfT6aWOTdmfNmg/2nhcuDNx5cmU54e/Hkt4Lw7hN8ILh8/1TbStH1GTCblyzulbLbg2hQ7V0TjT9DwcXOz5ZyJoc7GdDK1radZIJffnd/VG4EsmHhHGiyXMDTbTwBwv1BH2WrI8ij+m+TNFx3faNiEabkb0S0j8pQk+n5DXeIE2vWzZ0UOMJtRyYeEmgRAQXH0oqkoEj2Nx6IeCRK4+Fu2212VGOXVJ8pF3HSyXNo8nHDNE4ANPEOiJlym4uO+Sc15ucsf4jBJNLpjddEuTK/hE4wC0wm+g8W/cWqav7F5ua1jn67iyctnC3mQyNLt+pNHf69FqhmyXUjLPHh7inYsOuxlzuHDeRfWwLXEHmex+sYUvLtjxWzmWQf0UT7/7E2MB0XXNbfMMfAdwAGyNg1o9V6TUZdVmyYxj58jIpNuFrNmUN/3RWnadpXs7BkcmXIynhpkPG7gD9r69Uyk1h4DvdIgygLeG2R579fNc8cmw2eci9l9Zmy6hfO3FscUxAjFEdrK3Og6dhRSN1bU3yyX+GF7nkVvXYbhMJRm5xilysktiFO43u/pO47nqOi2xcXEiPE0cYsnjlF38B3+dpXBR7Zy5KjLzMmNsWj4Jx4WjgGRkSmuEeTR8PVEYEeoRSVNI7LjcPFLK/lgHsGt7D1JKOhayQccruJo6AuriWolne6o44uFu/C03Smp7nSXBRWDxZEr5ZWvx4miJhcTz3db6V8UEMHWyDm6c85VuLpdPld/Mb5iNw/EP19CjZBkuLg9oFuokqzmZJjb4gx7PwvaU9egOXtiPKk0nXIWYeZ7xg5LHAjnEuDXdxdA+lUgsv2QzDKZ9MyHyY5HEHRv5gAoUPPc2vV8eBrAMGv4/DONmZsbfGOw4/MfFA5GhapoczJsWXmY/A0CeJ3hPlfcfZc4Jis8dgYOqmV4lyHQzRjiAkZvd7Jro+dq/82TIyuY1rS3gd3dX6b0nGJr80mFFHqELMk0wccgu7odetotkWkzMc6NjcckcRAot3vfaipyxT8ATPn8vtdrDZnsyHPY9p/CWBRer1H2OZqz2ZEM0Jbw0HMefEO3mojsfoP8AoLNCZY5HyOa0ljmB7ztvt+yuc6PiIjHG479Nvp/dJX5D8h/FJK6uzj3+CJilDdo273uetrc6QtJDCSVz5OKR3E+u3ZG4WG6QiSeS/IFA43hALtzaYNyCBtQUpSXoFN+Rm2COtyVuOBrTwj0sHdKBkuNb/Rasmdxts91Om/AUqCIXf6i3B4Bd0dv+UIt07e1JPHORI4X37fALfmnfoukuRjfILZBY2cO9dV3Ttcm0xzmVzISadG49P7IN023WkJkHj8QI4vulproKp9npMrStP1nGdkaU9sM1tLmdNwQaI7dF5vOw3YznxysMTiACD0IB7eaGgz5sOQSwvc147j7L0OLreFrMBx86NnNO1EbOry/sqxFkqEGHlzthYLYW8DaL3X2XU3n0RjHBuPJUY6A9h5KJ6J2fO4pg8i+nZMceQAApHFKNqFIqObycmfIbHwyACPFt8Ft70wiuO/IJE2XxDxWieeQ3Z5+ACG0DYzblcJW8WS4kbjqkjMknufoiGZBB6fogwqxpHOOY+j3PX5LUZXXcX5JJDM4SuJfxdb2pbCbwm+qWSGDZMsHqB9Vi7KAOxIS583i6qjpyOiG0Nhk0wcbDt++yElkP4mOo9wFmcg10+lLKSW2kAV8U6iTch7h+02RFHwSgSgfhLnEH5rq81G+r3FqJqFtCdk4HS0RHkbf+JKx3m79Vs2UNHf5rkG0OWzEmq/WkU2batwfOkjZMT+YBatmIIog/ArgodCauhICsMlp6ucClPPaCB3/7LomHmT80KDYzhla2R77J7eIfutDlt739bSpmVTi5x3PquSZN/HzJRo5yD5JbNg/QKvN8yB6pbzj/AMmqGc7eIFFInKQcZv61wzCtyLQDpxe7h8lmJRxHcoijAvs3QUQBnZ5ldTUdYla+itGSVvSiikmTTZs2UV2+i62X4fRRRMVTNRN5V81z3jagKH3UUXBOtnJPb6KonPdRREDIZbXeaR1dsoogBlXSglUMjW7g7qKLrOfRi+XiN9VFFF1k9zP/2Q=="
              alt=""
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
            />
          </form>
          <form className="bg-white mt-3" action="">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
            />
          </form>
          <form className="bg-white mt-3" action="">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
            />
          </form>
          <h1>Audio Based Questions</h1>
          <div className="iframe">
            <iframe
              src={"https://voca.ro/1oHX61oxk2Oa"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
          </div>
          <div className="iframe">
            <iframe
              src={"https://voca.ro/1oHX61oxk2Oa"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
          </div>
          <div className="iframe">
            <iframe
              src={"https://voca.ro/1oHX61oxk2Oa"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
          </div>
          <div className="iframe">
            <iframe
              src={"https://voca.ro/1oHX61oxk2Oa"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
          </div>
          <div className="text-white">
            <button className="btn btn-success" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </MDBCol>
      </MDBRow>}
    </MDBContainer>
  )
}

export default Form

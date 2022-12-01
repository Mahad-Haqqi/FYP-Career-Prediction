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
              label="Late at night"
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
              src={require("../../img/1.png")}
              width="425" 
              height="300"
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
              src={require("../../img/books.png")}
              width="425" 
              height="300"
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
              src={require("../../img/camping.png")}
              width="425" 
              height="300"
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
              src={require("../../img/women in jungle.png")}
              width="425" 
              height="300"
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
              src={require("../../img/tower.png")}
              width="425" 
              height="300"
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
              src={"https://voca.ro/1eGOGK8ZA7Hl"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
          </div>
          <div className="iframe">
            <iframe
              src={"https://voca.ro/1bW8bzSP1BRb"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
          </div>
          <div className="iframe">
            <iframe
              src={"https://voca.ro/12R2MN9U3b7x"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
            </div>
            <div className="iframe">
            <iframe
              src={"https://voca.ro/1fYy1fkVBnZM"}
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

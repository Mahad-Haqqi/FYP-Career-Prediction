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
        <h1>Textual Questions</h1>
          <form className="" action="">
            <p className="fw-bold">I feel most energetic and focused:?</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="In the morning"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="During the afternoon and early evening"
              value="During the afternoon and early evening"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="Late at night"
              value="Late at night"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
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
              value="Have one or both of your hands on your hips"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="Touch or push the person to whom you are talking"
              value="Touch or push the person to whom you are talking"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="Stand with your arms folded"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
            <p className="fw-bold">When you find something really funny, you usually give:</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="A big, appreciative laugh"
              value="A big, appreciative laugh"
              onClick={(e)=>array.push(e.target.value)}
              // defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="A laugh, but not a loud one"
              value="A laugh, but not a loud one"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="A quiet chuckle"
              value="A quiet chuckle"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="A sheepish smile"
              value="A sheepish smile"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
            <p className="fw-bold">When you dream, you’re often:</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Falling"
              value="Falling"
              onClick={(e)=>array.push(e.target.value)}
             // defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Flying or floating"
              value="Flying or floating"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="Fighting or struggling"
              value="Fighting or struggling"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Searching for something or somebody"
              value="Searching for something or somebody"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>

          <form className="" action="">
            <p className="fw-bold">When you enter a party or social gathering, you tend to:</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Make a loud entrance, so that everyone notices you"
              value="Make a loud entrance, so that everyone notices you"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Make the quietest entrance, trying to stay unnoticed"
              value="Make the quietest entrance, trying to stay unnoticed"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="Make a quiet entrance, looking around for someone you know"
              value="Make a quiet entrance, looking around for someone you know"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <h1>Pictorial Questions</h1>
          <form className="" action="">
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
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
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
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
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
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
             // defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
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
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
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
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>

          <h1>Audio Questions</h1>
          <form className="" action="">
            <iframe
              src={"https://voca.ro/1oHX61oxk2Oa"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            
          </form>
          <form className="" action="">
            <iframe
              src={"https://voca.ro/1eGOGK8ZA7Hl"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
            <iframe
              src={"https://voca.ro/1bW8bzSP1BRb"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
          <form className="" action="">
            <iframe
              src={"https://voca.ro/12R2MN9U3b7x"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
            <form className="" action="">
            <iframe
              src={"https://voca.ro/1fYy1fkVBnZM"}
              style={{
                width: "100%",
                height: "40%",
              }}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="Have your hands clasped3333"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
              //defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="Have one or both of your hands on your hips"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="touch or push the person to whom you are talking"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="Stand with your arms folded"
              value="In the morning"
              onClick={(e)=>array.push(e.target.value)}
            />
          </form>
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

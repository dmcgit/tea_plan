import React, { Component } from 'react';
import { render } from 'react-dom';
import carfix from "./SunrisePeekTeaEstate.jpg";
import "./add_labourer.css";
import "../../pages/App.css";
import firebase from "../../config/firebase.js";


class App extends Component {
    render() {
      return (
        <Register />
      );
    }
  }
  
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Labourer:null,
        Phone_number:null,
        First_name: null,
        Last_name : null,
        Address: null,
        Status:null,

        value: '',
        errors: {
        Labourer:'',
        Phone_number:'',
        First_name: '',
        Last_name : '',
        Address: '',
        Status:'',
          }
    };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      switch (name) {
        case 'Phone_number': 
          errors.Phone_number = 
          validEmailRegex.test(value)
              ? 'Phone_number must be 10 characters long!'
              : '';
          break;
        case 'First_name': 
          errors.First_name = 
          validEmailRegex.test(value)
              ? 'Full Name must be  characters long!'
              : '';
          break;
        case 'Last_name': 
          errors.Last_name = 
            validEmailRegex.test(value)
              ? ''
              : ' is not valid!';
          break;
        case 'Address': 
          errors.Address = 
          validEmailRegex.test(value)
              ? 'Password must be 8 characters long!'
              : '';
          break;
          case 'Status': 
          errors.Status = 
          validEmailRegex.test(value)
              ? 'Password must be 8 characters long!'
              : '';
          break;

        default:
          break;
      }
  
      this.setState({errors, [name]: value});
    }
  
    
    handleBack = () => {
      window.location.replace("/conductor/AddLabourer");
    
    }
    handleSubmit = () => {
      // alert('A name was submitted: ' + this.state.value);
      // event.preventDefault();
       
      const{Phone_number,First_name,Last_name,Address,Status} = this.state;
      if(Phone_number==null|| First_name==null||Last_name==null||Address==null){
        alert("Please Complete all the details");
       
      }
      else if(Phone_number.length!=10){
        
        alert("Wrong Phone Number");
        window.location.reload();
      }

      
      else{
        
      firebase.database().ref("Labourer").child(Phone_number).update({
        
        First_name:First_name,
        Last_name:Last_name,
        Address:Address,
        Status:"Active"
      
      })
      alert("Laborer Added");
      // .then(() => alert("success"))
      // .catch(() => alert("fail"))
      
    }

    
    }
    render() {
      const {errors} = this.state;
      return (
        <div
        className="App"
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.0)),url(${carfix})`
        }}>
            <div className='submit'>
              <button onClick={this.handleBack}>Back</button>
            </div>
        <div className="wrapper">
        
        <h2 className="heading">Add Labourer</h2>
        
        <form name="myForm" >
        
        <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Phone_number}
              name="Phone_number"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Phone_number: event.target.value })}
              placeholder="Phone_number" required/>
               {errors.Phone_number.length > 0 &&  
                 <span className='error'>{errors.Phone_number}</span>} 
          </div>
        </div>
      </div>

          <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.First_name}
              name="First_name"
              className="input"
              type="text"
              onChange={(event) => this.setState({ First_name: event.target.value })}
              placeholder="First_name" required/>
               {errors.First_name.length > 0 &&  
                 <span className='error'>{errors.First_name}</span>} 
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Last_name}
              name="Last_name"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Last_name: event.target.value })}
              placeholder="Last_name" required/>
               {errors.Last_name.length > 0 &&  
                 <span className='error'>{errors.Last_name}</span>} 
          </div>
        </div>
      </div>
      
      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Address}
              name="Address"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Address: event.target.value })}
              placeholder="Address" required/>
               {errors.Address.length > 0 &&  
                 <span className='error'>{errors.Address}</span>} 
          </div>
        </div>
      </div>

      


         <div className='submit'>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
         
        </form>
        </div>>
        </div>
        
      );
    }
  }

  render(<App/>, document.getElementById('root'))
 export default App;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhoneNo, setEnteredPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [enteredPetName, setEnteredPetName] = useState('');
  const [selectedPetGender, setSelectedPetGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedPetAge, setSelectedPetAge] = useState('');
  const [selectedHealthStatus, setSelectedHealthStatus] = useState('');
  const [selectedDescription, setSelectetDescription] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const navigate = useNavigate();

  function handleInputChange(identifier, value) {
    if (identifier === 'name') {
      setEnteredName(value);
    } else if (identifier === 'number') {
      setEnteredPhoneNo(value);
    } else if (identifier === 'Petname') {                   
      setEnteredPetName(value);
    } else if (identifier === 'description') {
      setSelectetDescription(value);
    } else if (identifier === 'address') {
      setAddress(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleSave() {
    const nameValid = enteredName.trim().length >= 6;
    const numberValid = /^\d{10}$/.test(enteredPhoneNo.trim());
    const passwordValid = /^(?=.*[a-zA-Z])(?=.*[@]).{6,}$/.test(enteredPassword.trim());

    if (nameValid && numberValid && passwordValid) {
      const data = {
        CustomerName: enteredName,
        PhoneNo: enteredPhoneNo,
        Address: address,
        PetName: enteredPetName,
        PetGender: selectedPetGender,
        Breed: selectedBreed,
        Age: selectedPetAge,
        health_status: selectedHealthStatus,
        description: selectedDescription,
        Password: enteredPassword,
        IsActive: 1,
      };

      const url = 'https://localhost:44375/api/Test/Registration'; 
      axios.post(url, data)
        .then((result) => {
          alert(result.data);
          navigate('/');
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('Please check the entered information and try again.');
    }
  }

  const nameNotValid = enteredName.trim().length < 6;
  const numberNotValid = !/^\d{10}$/.test(enteredPhoneNo.trim());
  const passwordNotValid = !/^(?=.*[a-zA-Z])(?=.*[@]).{6,}$/.test(enteredPassword.trim());

  return (
    <div id='auth-inputs'>
      <div className="controls">
        <p>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter Name'
            className={nameNotValid ? 'invalid' : undefined}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </p>

        <p>
          <label>Phone No</label>
          <input
            type='text'
            placeholder='Enter Phone No'
            className={numberNotValid ? 'invalid' : undefined}
            onChange={(e) => handleInputChange('number', e.target.value)}
          />
        </p>

        <p>
          <label>Address</label>
          <input
            type='text'
            id='txtAddress'
            placeholder='Enter Address'
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
        </p>

        <p>
          <label>PetName</label>
          <input
            type='text'
            placeholder='Name'
            onChange={(e) => handleInputChange('Petname', e.target.value)}
          />
        </p>

        <p>
          <label>PetGender</label>
          <select
            value={selectedPetGender}
            onChange={(e) => {
              setSelectedPetGender(e.target.value);
            }}
          >
            <option value='' disabled>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </p>

        <p>
          <label>PetBreed</label>
          <select
            value={selectedBreed}
            onChange={(e) => {
              setSelectedBreed(e.target.value);
            }}
          >
            <option value='' disabled>Select Breed</option>
            <option value='labrador'>Labrador</option>
            <option value='goldenRetriever'>Golden Retriever</option>
            <option value='germanShepherd'>German Shepherd</option>
          </select>
        </p>

        <p>
          <label>PetAge</label>
          <select
            value={selectedPetAge}
            onChange={(e) => {
              setSelectedPetAge(e.target.value);
            }}
          >
            <option value='' disabled>Select Age</option>
            <option value='1-2'>1-2</option>
            <option value='2-3'>2-3</option>
            <option value='3-4'>3-4</option>
            <option value='4-5'>4-5</option>
          </select>
        </p>

        <p>
          <label>Pet Health Status</label>
          <select
            value={selectedHealthStatus}
            onChange={(e) => {
              setSelectedHealthStatus(e.target.value);
            }}
          >
            <option value='' disabled>Select Status</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </p>

        <p>
          <label>Description</label>
          <input
            type='text'
            id="Description"
            placeholder='Description'
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </p>

        <p>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter Password'
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </p>
      </div>
      <button className='button' onClick={() => handleSave()}>Save</button>
    </div>
  );
}

import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function Register(){

  const history = useHistory();
  const[registerInput, setRegister] = useState({
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
    error_list:[],
  });

  const handleInput = (e) =>{
    e.persist();
    setRegister({...registerInput, [e.target.name]:e.target.value})
  }

  const registerSubmit = (e) =>{
    e.preventDefault();
    
    const data = {
      name:registerInput.name,
      email:registerInput.email,
      password:registerInput.password,
      password_confirmation:registerInput.password_confirmation,
    }
    axios.get('/sanctum/csrf-cookie').then(response => {

      axios.post('/api/register', data).then(res =>{

        if(res.data.status === 200)
        {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal("Success", res.data.message, "success");
          history.push('/');
        }else{
          setRegister({...registerInput, error_list: res.data.validation_errors})
        }
      });

    });

  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
    <CContainer>
    <CRow className="justify-content-center">
    <CCol md="9" lg="7" xl="6">
    <CCard className="mx-4">
    <CCardBody className="p-4">
    <CForm onSubmit={registerSubmit}>
    <h1>Register</h1>
    <p className="text-muted">Create your account</p>
    <CInputGroup className="mb-3">
    <CInputGroupPrepend>
    <CInputGroupText>
    <CIcon name="cil-user" />
    </CInputGroupText>
    </CInputGroupPrepend>
    <CInput type="text" name="name" placeholder="Username" onChange={handleInput} value={registerInput.name} autoComplete="username" />
    <div className="invalid-feedback">{registerInput.error_list.name}</div>
    </CInputGroup>
    <CInputGroup className="mb-3">
    <CInputGroupPrepend>
    <CInputGroupText>@</CInputGroupText>
    </CInputGroupPrepend>
    <CInput type="text" name="email" placeholder="Email" onChange={handleInput} value={registerInput.email} autoComplete="email" />
    <div className="invalid-feedback">{registerInput.error_list.email}</div>
    </CInputGroup>
    <CInputGroup className="mb-3">
    <CInputGroupPrepend>
    <CInputGroupText>
    <CIcon name="cil-lock-locked" />
    </CInputGroupText>
    </CInputGroupPrepend>
    <CInput type="password" name="password" placeholder="Password" onChange={handleInput} value={registerInput.password} autoComplete="new-password" />
    <div className="invalid-feedback">{registerInput.error_list.password}</div>
    </CInputGroup>
    <CInputGroup className="mb-4">
    <CInputGroupPrepend>
    <CInputGroupText>
    <CIcon name="cil-lock-locked" />
    </CInputGroupText>
    </CInputGroupPrepend>
    <CInput type="password" name="password_confirmation" placeholder="Repeat password" onChange={handleInput} value={registerInput.password_confirmation} autoComplete="new-password" />
    </CInputGroup>
    <CButton color="success" type="submit">Create Account</CButton>
    </CForm>
    </CCardBody>
    </CCard>
    </CCol>
    </CRow>
    </CContainer>
    </div>
    )
}

export default Register

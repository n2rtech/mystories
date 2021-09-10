import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory, Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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

function Login() {

  const history = useHistory();
  const[loginInput, setLogin] = useState({
    email:'',
    password:'',
    error_list:[],
  });

  const handleInput = (e) =>{
    e.persist();
    setLogin({...loginInput, [e.target.name]:e.target.value})
  }

  const loginSubmit = (e) =>{
    e.preventDefault();
    
    const data = {
      email:loginInput.email,
      password:loginInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {

      axios.post('/api/login', data).then(res =>{

        if(res.data.status === 200)
        {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal("Success", res.data.message, "success");
          history.push('/');
        }else if(res.data.status === 401){
          swal("Warning", res.data.message, "warning");
        }else{
          setLogin({...loginInput, error_list: res.data.validation_errors})
        }
      });

    });

  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={loginSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder="Email" autoComplete="username" />
                      <div className="invalid-feedback">{loginInput.error_list.email}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" onChange={handleInput} value={loginInput.password}  placeholder="Password" autoComplete="current-password" />
                      <div className="invalid-feedback">{loginInput.error_list.password}</div>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" type="submit" className="px-4">Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

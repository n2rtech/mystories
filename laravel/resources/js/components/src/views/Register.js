import React from 'react'
import TheRegister from './pages/register/Register'
import {
	CHeader,
	CHeaderBrand,
	CHeaderNav,
	CHeaderNavItem,
	CHeaderNavLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
	return (
		<div className="c-app c-default-layout">

		<div className="c-wrapper">
		<CHeader withSubheader>

		<CHeaderBrand className="mx-auto d-lg-none" to="/">
		<CIcon name="logo" height="48" alt="Logo"/>
		</CHeaderBrand>

		<CHeaderNav className="d-md-down-none mr-auto">
		<CHeaderNavItem className="px-5" >
		<CHeaderNavLink to="/">Home</CHeaderNavLink>
		</CHeaderNavItem>
		</CHeaderNav>

		<CHeaderNav className="px-3">
		<CHeaderNavItem  className="px-3">
		<CHeaderNavLink to="/login">Login</CHeaderNavLink>
		</CHeaderNavItem>
		<CHeaderNavItem className="px-3 c-active">
		<CHeaderNavLink to="/register">Register</CHeaderNavLink>
		</CHeaderNavItem>
		</CHeaderNav>

		</CHeader>

		<div className="c-body">
		<TheRegister/>
		</div>
		</div>
		</div>
		)
	}

	export default Register

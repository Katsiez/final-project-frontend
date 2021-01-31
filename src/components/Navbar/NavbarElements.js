import styled from "styled-components"
import { Link as LinkR} from "react-router-dom"
//import { Link as LinkS} from "react-scroll"

export const Nav = styled.nav`
	border-bottom: 0.5px solid #38392b;
	background: #fff;
	height: 60px;
	margin-bottom: -20px;
	margin-top: 12px;
	display: flex;
	align-items: center;
	posiiton: sticky;
	top: 0;
	z-index: 5;
	box-shadow:  9px 4px 4px #ccc;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-contnet: space-between;
	height: 80px;
	width:100%;
	z-index: 1;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
	color: #c2cbc8;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	`;

export const MobileIcon = styled.div`
	display:none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%)
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin: 0 auto;
	margin-right: 30px;
	margin-left: 50px;
	@media screen and (max-width: 768px) {
		display: none;
	}
	@media screen and (max-width: 880px) {
		margin-left: 20px;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavLinks = styled(LinkR)`
	color: #6e2e2e;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	margin: auto;
	height: 100%;
	cursor: pointer;
	&.active {
		border-bottom: 2px solid red;
	}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 880px) {
	display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #bd9478;
position: absolute; 
text-align: center;
align-items: center;
right: 50px;
white-space: no-wrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #bb7b6a;
	color: #010606;
}
@media screen and (max-width: 768px) {
	display: none;
}
`;

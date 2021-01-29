import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements"

export const Sidebar = ({isOpen, toggle}) =>{
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon/>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="login" onClick={toggle}>
						Login
					</SidebarLink>
					<SidebarLink to="signup" onClick={toggle}>
						Sign Up
					</SidebarLink>
					<SidebarLink to="books" onClick={toggle}>
						All books
					</SidebarLink>
					<SidebarLink to="bestseller" onClick={toggle}>
						Bestsellers
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/signup">Signup</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}
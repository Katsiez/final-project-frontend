import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements"

export const Sidebar = () =>{
	return (
		<SidebarContainer>
			<Icon>
				<CloseIcon/>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="login">
						Login
					</SidebarLink>
					<SidebarLink to="signup">
						Signup
					</SidebarLink>
					<SidebarLink to="books">
						All books
					</SidebarLink>
					<SidebarLink to="bestseller">
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


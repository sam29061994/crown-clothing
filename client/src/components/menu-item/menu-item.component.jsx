import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentSubtitle,
    ContentTitle,
    ContentContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></BackgroundImageContainer>
        <ContentContainer className="content">
            <ContentTitle> {title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);

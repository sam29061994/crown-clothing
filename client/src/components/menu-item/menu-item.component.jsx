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
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></BackgroundImageContainer>
        <ContentContainer>
            <ContentTitle> {title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>

    // <div>
    //     className={`${size} menu-item`}
    //     onClick={() => history.push(`${match.url}${linkUrl}`)}
    // >
    //     <div
    //         className={'background-image'}
    //         style={{ backgroundImage: `url(${imageUrl})` }}
    //     ></div>
    //     <div className="content">
    //         <h1 className="title"> {title.toUpperCase()}</h1>
    //         <span className="sub-title">SHOP NOW</span>
    //     </div>
    // </div>
);

export default withRouter(MenuItem);

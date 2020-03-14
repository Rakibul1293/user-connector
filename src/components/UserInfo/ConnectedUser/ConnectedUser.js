import React from 'react';

const ConnectedUser = (props) => {
    const { name, picture } = props.userInfo;

    return (
        <ul className="list-group col-6">
            <li className="list-group-item text-center"><img className="userInfoImg" src={picture.large} alt="" />{name.title} {name.first} {name.last}</li>
        </ul>
    );
};

export default ConnectedUser;
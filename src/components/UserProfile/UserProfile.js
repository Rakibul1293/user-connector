import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import "./UserProfile.css";

const UserProfile = (props) => {
    // console.log(props);
    const { name, email, phone, picture, location } = props.userProfile;

    var arr = [300, 500, 600, 7000, 3000, 10000, 400, 100000, 15000, 35000, 45000, 5000, 130000, 123000, 100000000];
    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }
    const income = parseInt(shuffle(arr));

    return (
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" src={picture.large} alt="" />
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>Name: {name.title} {name.first} {name.last}</h3>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p className="income">Yearly Income: ${income}</p>
                    <p>Address: {location.country}</p>
                    <button
                        className="btn btn-info"
                        onClick={(e) => props.handleUserInfo(e, props.userProfile)}
                    ><FontAwesomeIcon icon={faUserPlus} />Add User</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
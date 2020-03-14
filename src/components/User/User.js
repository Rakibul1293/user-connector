import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./User.css";
import UserProfile from '../UserProfile/UserProfile';
import UserInfo from '../UserInfo/UserInfo';

const User = () => {
    const [userProfile, setUserProfile] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?page=3&results=15&seed=abc')
            .then(getData => {
                // console.log(getData.data.results);
                setUserProfile(getData.data.results);
            })
    }, [])

    const handleUserInfo = (e, userInfos) => {
        e.preventDefault();
        console.log("handleAddProduct", userInfos);

        const newUserInfo = [...userInfo, userInfos];
        setUserInfo(newUserInfo);
    }

    return (
        <div className="user-container">
            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Users Profiles</h1>
                        <p className="lead text-center">Connect Other's User</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 userProfile-container">
                        {
                            userProfile.map((userProfile, i) =>
                                <UserProfile
                                    key={i}
                                    userProfile={userProfile}
                                    handleUserInfo={handleUserInfo}
                                ></UserProfile>
                            )
                        }
                    </div>

                    <div className="col-md-4 userInfo-container">
                        <UserInfo userInfo={userInfo}></UserInfo>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default User;
import React from 'react';
import ConnectedUser from './ConnectedUser/ConnectedUser';
import "./UserInfo.css";

const UserInfo = (props) => {
    const userInfo = props.userInfo;
    // console.log(userInfo);

    return (
        <div className="posFix">
            <div className="card card-body bg-light mb-3">

                <div className="row">
                    <div className="col-md-12 d-none d-lg-block">
                        <h4 className="text-center">Request Summary</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Total Request: {userInfo.length}</li>
                            <li className="list-group-item">User's Total Yearly Income: </li>
                        </ul>
                        <br />
                    </div>
                </div>
            </div>

            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-md-12 d-none d-lg-block">
                        <h4 className="text-center">Connected Users</h4>
                        {
                            userInfo.map((userInfo, i) =>
                                <ConnectedUser
                                    key={i}
                                    userInfo={userInfo}
                                ></ConnectedUser>
                            )
                        }
                    </div>
                </div>

            </div>
        </div >
    );
};

export default UserInfo;
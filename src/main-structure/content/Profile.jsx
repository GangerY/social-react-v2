import React from 'react';

const Profile = () => {
    return (
        <div className="content profile">
            <div className="preview-pic">
                <img src='https://ichef.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg' />
            </div>
            <div className="divid"></div>
            <div>
                ava + description
            </div>
            <div className="divid"></div>
            <div>
                <h3>My posts</h3>
                <div>
                    New post
                </div>
                <div className="divid"></div>
                <div>
                    <div>
                        post1
                    </div>
                    <div className="divid"></div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
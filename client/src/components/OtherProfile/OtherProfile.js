import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap/";
import { useParams } from 'react-router-dom'
// import Interest from "../InterestsCard/InterestTag/interestTag";
import DTDiv from "../Settings/Desktop View/DTDiv/DTDiv";
import MobileDiv from "../mobileDiv";
import { Link } from "react-router-dom";
import InterestsCard from "../Settings/InterestsCard/InterestsCard";
import axios from "axios";
import PartnerPrefCard from "../Settings/PartnerPrefCard/PartnerPrefCard";
import ImageCard from "../Settings/ImageCard/ImageCard";
import ProfileIntro from "./OtherProfileIntro/ProfileIntro";
import ProfileBio from "./OtherProfileBio/ProfileBio";
import ProfileInterests from "./OtherProfileInterests/ProfileInterests";
import ProfileImage from "./OtherProfileImage/ImageCard";

const DTProfile = () => {
  //state obj containing needed userdata to fill out card
  //need state data to be named after each card
  console.log("hit")
  let { username } = useParams();
  console.log("username ---------------------", username);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    pronouns: "",
    location: "",
    orientation: "",
    status: "",
    bio: "",
    interests: "",
    agePref: "",
    genderPref: "",
  });

  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    axios.get(`/api/users/${username}`).then((data) => {
      setUserData({
        firstName: `${data.data.firstName}`,
        lastName: `${data.data.lastName}`,
        username: `${data.data.username}`,
        age: `${data.data.age}`,
        pronouns: `${data.data.pronouns}`,
        location: `${data.data.location}`,
        gender: `${data.data.gender}`,
        sexuality: `${data.data.sexuality}`,
        status: `${data.data.status}`,
        bio: `${data.data.bio}`,
        interests: `${data.data.interests}`,
        agePref: `${data.data.agePref}`,
        genderPref: `${data.data.genderPref}`,
        profileImg: `${data.data.profileImg.url}`
      });
      console.log("useEffect setUserData results:", data);
    });
  }, [reRender]);

  return (
    <div>
      <div className="text-center mt-4 px-5" style={{ overflowX: "hidden" }}>
        {/* <h1 style={{ marginTop: "1rem" }}>Edit Profile</h1> */}
        <Row className="py-5 px-3">
         <ProfileImage 
         profileImg={userData.profileImg}/>
          <Col className="border-left" md={7}>
            <DTDiv>
              <Row style={{ marginBottom: "1rem" }}>
                <ProfileIntro
                  setReRender={setReRender}
                  reRender={reRender}
                  firstName={userData.firstName}
                  lastName={userData.lastName}
                  username={userData.username}
                  age={userData.age}
                  location={userData.location}
                  gender={userData.gender}
                  pronouns={userData.pronouns}
                  sexuality={userData.sexuality}
                  status={userData.status}
                  agePref={userData.agePref}
                  genderPref={userData.genderPref}
                />
              </Row>
            </DTDiv>
            <Row>
              <ProfileBio
                bio={userData.bio}
                setReRender={setReRender}
                reRender={reRender}
              />
            </Row>
            <Row>
              <ProfileInterests
                interests={userData.interests}
                setReRender={setReRender}
                reRender={reRender}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DTProfile;
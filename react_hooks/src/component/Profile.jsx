import React, { useContext } from "react";
import UseContext from "../context/UseContext";

const Profile = () => {
  const { user } = useContext(UseContext);
  console.log(JSON.stringify(user));
  if (!user) return <div>Please Login</div>;
  return <div>{user.username}</div>;
};

export default Profile;

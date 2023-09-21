import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const [changeHeading, resetHeading] = useOutletContext();

  useEffect(() => {
    changeHeading('Profile');
    return () => {
      resetHeading();
    }
  });

  return (
    <main>

    </main>
  );
};

export default Profile;

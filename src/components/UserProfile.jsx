import PropTypes from "prop-types";

function UserProfile({ isOnline, setIsOnline }) {
  return (
    <>
      <div>
        User Profile is
        <span> {isOnline ? "Online" : "Offline"}</span>
      </div>
    </>
  );
}

UserProfile.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  setIsOnline: PropTypes.func.isRequired,
};

export default UserProfile;

import useAuth from "../../hooks/useAuth";


const Profile = () => {
    const {user} = useAuth();
    
    return (
        <div className="pt-28">
        <h2 className="text-3xl font-bold mb-4">Profile Information</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Email:</h3>
          <p>{user.email}</p>
          {/* Add other profile information here if needed */}
        </div>
      </div>
    );
  };

export default Profile;
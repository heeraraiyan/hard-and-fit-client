import useAuth from "../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>

            <h2 className="text-3xl">
                <span>hi Welcome</span>

                {
                    user?.email ? user.email : 'back'
                }
            </h2>
                
        </div>
    );
};

export default UserHome;
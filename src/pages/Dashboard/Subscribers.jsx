import useSubscribes from "../../hooks/useSubscribes";



const Subscribers = () => {
    const [subscribes] = useSubscribes();
    // console.log(subscribes.length)
    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically populate rows */}
              {subscribes.map((subscribe, index) => (
                <tr key={subscribe._id}>
                  <th>{index + 1}</th>
                  <td>{subscribe.name}</td>
                  <td>{subscribe.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Subscribers;
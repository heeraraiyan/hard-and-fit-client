import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";


const Subscribers = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPublic.post('/subscribes', formData);

            if (response.data.insertedId) {
                console.log('User added successfully');
                console.log(response.data);

                e.target.reset();
                //  reset();

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your subscription success',
                    showConfirmButton: false,
                    timer: 1500,
                });

                navigate('/');
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };





    return (<div className="subscribe-container max-w-3xl mx-auto mb-20">
        <h2 className="subscribe-title text-3xl italic font-bold text-amber-600 mb-12 ">Subscribe Now</h2>
        {/* {registerSuccess && <p className="success-message">{registerSuccess}</p>} */}
        <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="form-group border-4 mb-2 ">
                <label htmlFor="name" className="form-label">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group border-4 mb-2">
                <label htmlFor="email" className="form-label">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <button type="submit" className="subscribe-button border-2 border-green-700 px-4 py-2 text-xl">
                Subscribe Now
            </button>
        </form>
    </div>
    );
};

export default Subscribers;
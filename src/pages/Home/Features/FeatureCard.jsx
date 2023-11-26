

const FeatureCard = ({ item }) => {
    const { image, description, title } = item;

    return (
      <div className="relative bg-gradient-to-t from-slate-400 to-slate-800 text-white border-2 border-red-800 p-6 rounded-lg shadow-md">
        {/* Animated fade-in effect */}
        <img
          className="h-60 w-full object-cover rounded-md opacity-70 animate-fade-in"
          src={image}
          alt=""
        />
  
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  };

export default FeatureCard;
import useFeatures from "../../../hooks/useFeatures";
import FeatureCard from "./FeatureCard";


const Features = () => {

    const [features] =useFeatures()

    return (
        <div>

            <h2 className="text-5xl text-amber-500 font-bold italic mt-10 mb-16 text-center">HERE FOR YOU</h2>

            
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {
                
                features.map(item=><FeatureCard key={item.id} item={item}></FeatureCard>)
            }
        </div>
            
        </div>
    );
};

export default Features;
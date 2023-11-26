import useFeatures from "../../../hooks/useFeatures";
import FeatureCard from "./FeatureCard";


const Features = () => {

    const [features] =useFeatures()

    return (
        <div>

            {/* <h2>features</h2> */}

            
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-12">
            {
                
                features.map(item=><FeatureCard key={item.id} item={item}></FeatureCard>)
            }
        </div>
            
        </div>
    );
};

export default Features;
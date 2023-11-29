import { Helmet } from "react-helmet-async";
import useTrainer from "../../hooks/useTrainer";
import TrainerCard from "./TrainerCard";
import { Link } from "react-router-dom";


const Trainer = () => {
    const [trainer] = useTrainer();
    console.log(trainer.length)
    return (
        <div className="pt-28 bg-slate-400">
            <Helmet>
            <title>HARD & TIME | Trainer</title>
            </Helmet>

<h1 className="text-5xl italic font-bold mb-20 text-center text-amber-500 pt-10">Our Trainer</h1>


            <div className="grid lg:grid-cols-2 max-w-6xl mx-auto gap-10">

                {
                    trainer.map(train=><TrainerCard key={train._id} train={train}></TrainerCard>)
                }
            </div>

            <div className="flex items-center justify-center pb-12">
            <Link to='/betrainer'><button className="btn  text-center px-10 text-lg bg-yellow-500 text-slate-100 rounded-lg">Be A Trainer</button></Link>
            </div>
           
            
        </div>
    );
};

export default Trainer;
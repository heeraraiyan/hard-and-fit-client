import useTrainer from "../../hooks/useTrainer";
import TrainerCard from "./TrainerCard";


const Trainer = () => {
    const [trainer] = useTrainer();
    console.log(trainer.length)
    return (
        <div className="pt-28 bg-slate-400">

<h1 className="text-5xl italic font-bold mb-20 text-center text-amber-500 pt-10">Our Trainer</h1>


            <div className="grid lg:grid-cols-2 max-w-6xl mx-auto gap-10">

                {
                    trainer.map(train=><TrainerCard key={train._id} train={train}></TrainerCard>)
                }
            </div>

            <div className="flex items-center justify-center pb-12">
            <button className="btn  text-center px-10 text-lg bg-yellow-500 text-slate-100 rounded-lg">Be A Trainer</button>
            </div>
           
            
        </div>
    );
};

export default Trainer;
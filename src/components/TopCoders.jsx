import React, { useContext, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { AppContext } from '../context/AppContext'; 
import Card from './Card'; // Import Card component

const TopCoders = () => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const { coders } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Coders to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of Top Coders.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {coders?.slice(0, 10).map((item, index) => (
                    <Card
                        key={index}
                        item={item}
                        isExpanded={isExpanded}
                        toggleDescription={toggleDescription}
                    />
                ))}
            </div>
            <button onClick={() => { navigate('/coders'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>
                more
            </button>
        </div>
    );
}

export default TopCoders;

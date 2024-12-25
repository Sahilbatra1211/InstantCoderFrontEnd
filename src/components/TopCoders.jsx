import React, { useContext, useState } from 'react'; // Add useState here
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopCoders = () => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false); // State to toggle description

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const { coders } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Coders to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of Top Coders.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {coders.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                        key={index}
                    >
                        <img className='bg-[#EAEFFF]' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
                                <p>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                            <div className="flex gap-1 overflow-x-auto whitespace-nowrap">
                                {item.specialities?.map((speciality, index) => (
                                    <span
                                    key={index}
                                    className="bg-[#EAEFFF] text-[#5C5C5C] text-[11px] font-medium px-1 py-0.5 rounded-full border border-[#C9D8FF] whitespace-nowrap"
                                    >
                                    {speciality.speciality}
                                    </span>
                                ))}
                            </div>
                            <p
                                className={`text-[#5C5C5C] text-xs font-normal italic ${!isExpanded ? 'line-clamp-2' : ''}`} // Smaller text, grey color, and italic
                                style={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    lineHeight: '1.5', // Adjust line height for better readability
                                }}
                            >
                                {item.about}
                            </p>

                            <button onClick={toggleDescription} className='text-blue-500 text-xs'>
                                {isExpanded ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/coders'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>
                more
            </button>
        </div>
    );
}

export default TopCoders;

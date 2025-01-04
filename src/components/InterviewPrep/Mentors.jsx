import React, { useContext, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { AppContext } from '../../context/AppContext'; 
import Card from '../Card'; // Import Card component

const Mentors = ({ companyName }) => {  // Accept companyName as a prop
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const { coders } = useContext(AppContext);

    // Company anme needs to be added in backend to filter out and change the coniditon
    const filteredMentors = coders.filter(mentor => mentor.company !== companyName);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {filteredMentors.slice(0, 10).map((item, index) => (
                    <Card
                        key={index}
                        item={item}
                        isExpanded={isExpanded}
                        toggleDescription={toggleDescription}
                    />
                ))}
            </div>
        </div>
    );
}

export default Mentors;

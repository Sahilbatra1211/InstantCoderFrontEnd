import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const Coders = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { coders } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      // Filter coders based on whether the speciality array contains the desired speciality
      setFilterDoc(coders.filter(doc =>
        doc.specialities?.some(s => s.speciality === speciality)
      ));
    } else {
      setFilterDoc(coders);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [coders, speciality]);

  return (
    <div>
      <p className='text-black text-lg'>Browse through all Specialist Coders</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'C++ DSA Expert' ? navigate('/coders') : navigate('/coders/C++ DSA Expert')} className={`whitespace-nowrap w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'C++ DSA Expert' ? 'bg-[#E2E5FF] text-black ' : ''}`}>C++ DSA Experts</p>
          <p onClick={() => speciality === 'Java DSA Expert' ? navigate('/coders') : navigate('/coders/Java DSA Expert')} className={`whitespace-nowrap w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Java DSA Expert' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Java DSA Experts</p>
          <p onClick={() => speciality === 'Python DSA Expert' ? navigate('/coders') : navigate('/coders/Python DSA Expert')} className={`whitespace-nowrap w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Python DSA Expert' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Python DSA Experts</p>
          <p onClick={() => speciality === 'Aptitude Expert' ? navigate('/coders') : navigate('/coders/Aptitude Expert')} className={`whitespace-nowrap w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Aptitude Expert' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Aptitude Experts</p>
          <p onClick={() => speciality === 'LLD Expert' ? navigate('/coders') : navigate('/coders/LLD Expert')} className={`whitespace-nowrap w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'LLD Expert' ? 'bg-[#E2E5FF] text-black ' : ''}`}>LLD Experts</p>
          <p onClick={() => speciality === 'HLD Expert' ? navigate('/coders') : navigate('/coders/HLD Expert')} className={`whitespace-nowrap w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'HLD Expert' ? 'bg-[#E2E5FF] text-black ' : ''}`}>HLD Experts</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
                  <p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>

                {/* Display specialities */}
                <div className='text-[#5C5C5C] text-sm flex flex-wrap gap-2'>
                {item.specialities?.map((speciality, index) => (
                  <span
                    key={index}
                    className='bg-[#EAEFFF] text-[#5C5C5C] text-[10px] font-medium px-3 py-1 rounded-full border border-[#C9D8FF] max-w-max'
                  >
                    {speciality.speciality}
                  </span>
                ))}
              </div>     
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coders;

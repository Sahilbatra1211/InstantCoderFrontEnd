const Card = ({ item, isExpanded, toggleDescription }) => (
    <div
      onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
      className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
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
          className={`text-[#5C5C5C] text-xs font-normal italic ${!isExpanded ? 'line-clamp-2' : ''}`} 
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: '1.5',
          }}
        >
          {item.about}
        </p>
  
        <button onClick={toggleDescription} className='text-blue-500 text-xs'>
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
  
  export default Card;
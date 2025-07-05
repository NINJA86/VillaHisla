import { FaPhone } from 'react-icons/fa6';
function PhoneNum({ scrolled }) {
  return (
    <div
      className={`flex items-center text-black px-4 py-3 rounded-[10rem] cursor-pointer hover:bg-black hover:text-white transition-colors ${
        scrolled ? 'bg-[#f2f4f1]' : 'bg-white'
      }`}
    >
      <FaPhone className="mr-2.5 bg-light-green text-white p-1.5 rounded-full text-2xl" />
      <span>+047 919 2363</span>
    </div>
  );
}

export default PhoneNum;

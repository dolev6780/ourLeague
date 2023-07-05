import React, {useState, useEffect} from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export default function CustomSelect({options,setState,theChoose}) {
  const [isOpen, setIsOpen] = useState(false);
  const [otherOption, setOtherOption] = useState(true);
  const [input, setInput] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
      if(theChoose === "Other"){
        setOtherOption(false);
      }
      else{
              setOtherOption(true);
            }
    }, [theChoose]);
  
  return (
    <div className="relative mt-1">
      <button
        className="dropdown-button text-left bg-white bg-opacity-40 w-full p-4 rounded-lg"
        onClick={toggleDropdown}
      >
        {theChoose}
        {isOpen ? (
          <ExpandLessIcon
            className="absolute right-0 flex mr-3"
            aria-hidden="true"
          />
        ) : (
          <ExpandMoreIcon
            className="absolute right-0 flex mr-3"
            aria-hidden="true"
          />
        )}
      </button>
      {isOpen && (
        <div className="dropdown-content max-h-40 overflow-scroll overflow-x-auto bg-white bg-opacity-30 w-full mt-1 rounded-lg">
          {options.map((option) => (
            <p
              onClick={() => {
                setState(option);
                setIsOpen(false);
              }}
              key={option}
              className="block px-4 py-2 text-white font-semibold"
            >
              {option}
            </p>
          ))}
        </div>
      )}
      <div className="relative" hidden={otherOption}>
        <input
          type="text"
          className="w-full p-4 mt-2 rounded-lg bg-white bg-opacity-40 placeholder:text-white"
          placeholder="Enter your choice"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-2">
          <ArrowForwardIosOutlinedIcon
            onClick={
              input === ""
                ? null
                : () => {
                    setState(input);
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}

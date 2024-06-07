import React from "react";

const Modal = ({ toggleModal,selected,setSelected }) => {
  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];
  const bTechBranches = [
    "Computer Science Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Chemical Engineering",
    "Aeronautical Engineering",
  ];

  const handleClick = (searchInput) => {
    if (selected.includes(searchInput)) {
      const updatedArray = selected.filter(
        (element) => element !== searchInput
      );
      setSelected(updatedArray);
    } else {
      const updatedArray = [...selected, searchInput];
      setSelected(updatedArray);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          onClick={toggleModal}
        ></div>
        <div className="modal-container bg-white w-1/2 rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-end items-center pb-3">
              <button
                onClick={toggleModal}
                className="modal-close cursor-pointer z-50"
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z" />
                </svg>
              </button>
            </div>
            <div className="flex">
              <div className="w-1/2 h-[90%]">
                <span className="w-fit m-auto">Select State</span>
                <div className="bg-[#C4DAFF] h-96 p-5 rounded-xl overflow-y-scroll flex flex-col gap-2">
                  {statesInIndia.map((ele, index) => (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => handleClick(ele)}
                    >
                      <span>{index + 1}.</span>
                      <div
                        className={`${
                          selected.includes(ele)
                            ? "bg-[#334C8A] text-white"
                            : "bg-white"
                        } w-full py-3 rounded-xl text-center border border-black italic`}
                      >
                        {ele}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2 h-[90%]">
                <span className="w-full m-auto">Select Department</span>
                <div className="bg-[#C4DAFF] h-96 p-5 rounded-xl overflow-y-scroll flex flex-col gap-2">
                  {bTechBranches.map((ele, index) => (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => handleClick(ele)}
                    >
                      <span>{index + 1}.</span>
                      <div
                        className={`${
                          selected.includes(ele)
                            ? "bg-[#334C8A] text-white"
                            : "bg-white"
                        } w-full py-3 rounded-xl text-center border border-black italic`}
                      >
                        {ele}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

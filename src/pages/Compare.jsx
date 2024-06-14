import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [ratings, setRatings] = useState([]);
  const navigate = useNavigate();

  const college1 = query.get("college1");
  const college2 = query.get("college2");

  useEffect(() => {
    if (!college1 || !college2) {
        navigate("/colleges")
    }
  }, []);

  useEffect(() => {
    const getRatings = async () => {
      const ratings = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/get-ratings`,
        {
          colleges: [college1, college2],
        }
      );
      setRatings(ratings.data);
    };
    getRatings();
  }, []);

  return (
    <div className="h-screen w-screen overflow-auto">
      <div className="py-3 text-center text-3xl font-semibold italic border border-black">
        Comparison
      </div>
      <div className="h-fit flex justify-center overflow-hidden">
        <div className="w-[50%] md:w-[40%] relative md:mx-5 my-8 rounded-2xl h-fit bg-[#C4DAFF] flex flex-col items-center py-3 gap-5 drop-shadow-xl border border-gray-500">
          <div className="flex flex-col items-center gap-5 border-b border-black w-full p-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/24e8/bf64/430f32832c5f657bf713fcbcb2acf885?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgyiavqEjvsNE0AaiL8bm1f1pWjKk9Nml1q1BYGV4h44s11kmkbVGDZoITJ3QJbUfoFDW85wvvRXk4nRwSWaPxztGxIAnCl4eW1LA2UUMzoZ-aeswV1ZJxBV02fccuI2jXNjUhwESYrV9s4Aa0gfrFba6V7D385Pcw85UNlFbs0xsOiNfG8yNr1C40pLPYhCoQt-iysEXU5ywrqiWsoWsPKCrNXegXoOG77Aioq-1M6XDVZrSdWadLk8Hbj0KyGs651wy1vfe0ecChY1o66YOgxUkwhvEfaQp0zpLTEuzTWrK9QDL9TGnY3V4IhD1HR0qXqaQQAx2UMM6f4T67UzpA__"
              alt=""
              className="w-64 rounded-xl mx-auto"
            />
            <span className="text-lg font-bold text-center whitespace-nowrap truncate w-full">{college1}</span>
          </div>
          <div className="flex flex-col items-center gap-5">
            <span>Courses:</span>
            <span>Fees</span>
            {/* Ratings */}
            {ratings.length > 0 &&
              Object.keys(ratings[0]).map(
                (rating, index) =>
                  rating !== "Institute" && (
                    <span key={index} className="text-center">
                      {rating}: {ratings[0][rating]}/5
                    </span>
                  )
              )}
          </div>
          <div className="absolute -top-5 -left-5 w-[5rem] h-[5rem] md:w-28 md:h-28 text-white transform -rotate-[30deg] bg-[#334C8A] rounded-full flex flex-col items-center justify-center  text-center">
            <span className="text-sm md:text-md">NIRF</span>
            <span className="text-lg md:text-4xl -mt-1">#6</span>
          </div>
        </div>
        <div className="w-[0.5px] h-screen bg-black" />
        <div className="w-[50%] md:w-[40%] relative md:mx-5 my-8 rounded-2xl h-fit bg-[#C4DAFF] flex flex-col items-center py-3 gap-5 drop-shadow-xl border border-gray-500">
          <div className="flex flex-col items-center gap-5 border-b border-black w-full p-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/24e8/bf64/430f32832c5f657bf713fcbcb2acf885?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgyiavqEjvsNE0AaiL8bm1f1pWjKk9Nml1q1BYGV4h44s11kmkbVGDZoITJ3QJbUfoFDW85wvvRXk4nRwSWaPxztGxIAnCl4eW1LA2UUMzoZ-aeswV1ZJxBV02fccuI2jXNjUhwESYrV9s4Aa0gfrFba6V7D385Pcw85UNlFbs0xsOiNfG8yNr1C40pLPYhCoQt-iysEXU5ywrqiWsoWsPKCrNXegXoOG77Aioq-1M6XDVZrSdWadLk8Hbj0KyGs651wy1vfe0ecChY1o66YOgxUkwhvEfaQp0zpLTEuzTWrK9QDL9TGnY3V4IhD1HR0qXqaQQAx2UMM6f4T67UzpA__"
              alt=""
              className="w-64 rounded-xl mx-auto"
            />
            <span className="text-lg font-bold text-center whitespace-nowrap truncate w-full">{college2}</span>
          </div>
          <div className="flex flex-col items-center gap-5">
            <span>Courses:</span>
            <span>Fees</span>
            {/* Ratings */}
            {ratings.length > 0 &&
              Object.keys(ratings[1]).map(
                (rating, index) =>
                  rating !== "Institute" && (
                    <span key={index} className="text-center">
                      {rating}: {ratings[1][rating]}/5
                    </span>
                  )
              )}
          </div>
          <div className="absolute -top-5 -left-5 w-[5rem] h-[5rem] md:w-28 md:h-28 text-white transform -rotate-[30deg] bg-[#334C8A] rounded-full flex flex-col items-center justify-center  text-center">
            <span className="text-sm md:text-md">NIRF</span>
            <span className="text-lg md:text-4xl -mt-1">#6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

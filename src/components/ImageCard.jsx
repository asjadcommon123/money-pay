import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  DPIconAdd,
  DPIconComments,
  DPIconFilledHeart,
  DPIconHeart,
} from '../images/icons';
import { getUserData, likeAPost } from '../redux/DashboardSlice';

const ImageCard = ({ src, likes, id }) => {
  const { userData } = useSelector((state) => state.dashboard);
  const { limit } = userData;
  const dispatch = useDispatch();
  const [forLike, setForLike] = useState(false);
  const getLike = () => {
    setForLike((prev) => !prev);
    dispatch(likeAPost(id)).then(() => {
      if (!limit) return dispatch(getUserData());
      toast.error('You have reached your limit for the day');
    });
  };
  return (
    <div className="w-full rounded-2xl h-[400px] relative">
      <Link className="flex gap-2 absolute top-4 right-3 p-2 text-white bg-dark-green border-2 border-light-green rounded-3xl">
        <DPIconAdd />
        <span className="text-light-green">R$</span> 1,00
      </Link>
      <img
        crossorigin="anonymous"
        src={src}
        alt=""
        className="w-full object-cover h-3/4 rounded-[1rem]"
      />
      <div
        onClick={getLike}
        className="absolute rounded-full p-4 md:p-5 bg-white shadow-2xl bottom-[95px] left-[50%] translate-x-[-50%]  translate-y-[0] z-10"
      >
        {forLike ? <DPIconFilledHeart /> : <DPIconHeart />}
      </div>
      <div className="flex justify-between gap-4 p-4 items-center bg-white absolute bottom-[4.2rem] rounded-b-[2rem] md:px-4 md:py-6 w-full ">
        <span className="flex items-center gap-2">
          <DPIconFilledHeart />
          <p className="font-semibold text-sm">
            {forLike ? parseInt(likes) + 1 : likes}
          </p>
        </span>

        <span className="flex items-center gap-2">
          <DPIconComments />
          <p className="font-semibold text-sm">3,450</p>
        </span>
      </div>
    </div>
  );
};

export default ImageCard;

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardFooter from '../components/DashboardFooter';
import ImageCard from '../components/ImageCard';
import Loading from '../components/loader/Loading';
import Notification from '../components/Notification';
import {
  pageCounter,
  updateProfilesList,
  uploadProfiles,
} from '../redux/DashboardSlice';

const Dashboard = () => {
  const [isFetching, setIsFetching] = useState(false);
  const listener = useRef(true);
  const { isLoading, pageNumber, profiles } = useSelector(
    (state) => state.dashboard
  );

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(pageCounter());
    setIsFetching(false);
  };

  useEffect(() => {
    if (listener.current) {
      listener.current = false;
      dispatch(uploadProfiles(pageNumber));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setIsFetching(true);
        setTimeout(() => {
          increase();
          dispatch(updateProfilesList(pageNumber));
        }, 1500);
        return;
      }
    }
  };

  return (
    <div className="relative overflow-auto px-6 flex flex-col items-center pb-24 justify-center pt-20 bg-hero-pattern h-screen ">
      <Notification />
      {isLoading ? (
        <Loading />
      ) : (
        <div
          onScroll={() => onScroll()}
          ref={listInnerRef}
          className=" mt-10 overflow-auto h-screen"
        >
          {profiles?.map(({ URL, likes, id }, idx) => {
            return (
              <div key={idx} className="flex justify-center max-w-[786px]  ">
                <ImageCard src={URL} likes={likes} id={id} />
              </div>
            );
          })}
        </div>
      )}

      {isFetching ? <Loading /> : null}
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboardlayout from '../components/Dashboardlayout';
import ImageCard from '../components/ImageCard';
import Loading from '../components/loader/Loading';
import {
  pageCounter,
  updateProfilesList,
  uploadProfiles,
} from '../redux/DashboardSlice';
import './pages.css';

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

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setIsFetching(true);
      setTimeout(() => {
        increase();
        dispatch(updateProfilesList(pageNumber));
      }, 1500);
      return;
    }
  };

  return (
    <Dashboardlayout>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          onScroll={handleScroll}
          className="layout mt-10 mb-24 overflow-auto"
        >
          {profiles?.map(({ URL, likes, id }, idx) => {
            return (
              <div key={idx} className="flex justify-center max-w-[786px]  ">
                <ImageCard src={URL} likes={likes} id={id} />
              </div>
            );
          })}
          <div className="flex justify-center">
            {isFetching ? <Loading /> : null}
          </div>
        </div>
      )}
    </Dashboardlayout>
  );
};

export default Dashboard;

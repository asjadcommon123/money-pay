import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import DashboardFooter from '../components/DashboardFooter';
import ImageCard from '../components/ImageCard';
import Loading from '../components/loader/Loading';
import Notification from '../components/Notification';

const Dashboard = () => {
  const [dataItems, setDataItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [pageState, setPageState] = useState(1);
  const listener = useRef(true);

  const getProfiles = (page) => {
    const items = JSON.parse(localStorage.getItem('token'));
    const url = `https://testapp1-khaki.vercel.app/feed?page=${page}&page_size=15`;
    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + items,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setDataItems((prev) => [...prev, ...res.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const increase = () => {
    setIsFetching(true);
    setPageState((prev) => prev + 1);
  };

  useEffect(() => {
    if (listener.current) {
      listener.current = false;
      setIsLoading(true);
      getProfiles(pageState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        increase();
        setTimeout(() => {
          getProfiles(pageState);
          setIsFetching(false);
        }, 2000);
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
          {dataItems?.map(({ URL, likes, id }, idx) => {
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

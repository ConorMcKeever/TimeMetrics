import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; 

interface TimeData {
  epoch: number;
}

const App: React.FC = () => {
  const [serverTime, setServerTime] = useState<number | null>(null);
  const [metrics, setMetrics] = useState<string>('');
  const [loadingTime, setLoadingTime] = useState<boolean>(false);
  const [loadingMetrics, setLoadingMetrics] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingTime(true);
      try {
        const timeResponse = await axios.get<TimeData>('/time', {
          headers: { Authorization: 'mysecrettoken' },
        });
        setServerTime(timeResponse.data.epoch);
      } catch (error) {
        console.error('Error fetching time data:', error);
      } finally {
        setLoadingTime(false);
      }

      setLoadingMetrics(true);
      try { 
        const metricsResponse = await axios.get<string>('/metrics', {
          headers: { Authorization: 'mysecrettoken' },
        });
        setMetrics(metricsResponse.data);
      } catch (error) {
        console.error('Error fetching metrics data:', error);
      } finally {
        setLoadingMetrics(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 30000); // Fetch every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  const calculateDifference = () => {
    const clientTime = Math.floor(Date.now() / 1000);
    return serverTime !== null ? clientTime - serverTime : 0;
  };

  const formatTimeDifference = (difference: number) => {
    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const difference = calculateDifference();

  return (
    <div className="app-container">
      <div className="left-section">
        {loadingTime ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div>Server Time (epoch): {serverTime}</div>
            <div>Time Difference: {formatTimeDifference(difference)}</div>
          </>
        )}
      </div>
      <div className="right-section">
        {loadingMetrics ? (
          <div className="loading">Loading...</div>
        ) : (
          <pre>{metrics}</pre>
        )}
      </div>
    </div>
  );
};

export default App;
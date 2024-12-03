import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

interface TimeData {
  epoch: number;
}

const TimeMetrics: React.FC = () => {
  const [serverTime, setServerTime] = useState<number | null>(null);
  const [metrics, setMetrics] = useState<string>('');
  const [loadingTime, setLoadingTime] = useState<boolean>(false);
  const [loadingMetrics, setLoadingMetrics] = useState<boolean>(false);
  const [timeDifference, setTimeDifference] = useState<string>('00:00:00');

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
    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (serverTime !== null) {
      const interval = setInterval(() => {
        const clientTime = Math.floor(Date.now() / 1000);
        const difference = clientTime - serverTime;
        setTimeDifference(formatTimeDifference(difference));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [serverTime]);

  const formatTimeDifference = (difference: number) => {
    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor(difference % 3600 / 60);
    const seconds = difference % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <h2>Time</h2>
        {loadingTime && <div className="loading-overlay">Loading...</div>}
        <div>Server Time (epoch): {serverTime}</div>
        <div>Time Difference: 
          
          
          {timeDifference}</div>
      </div>
      <div className="divider"></div> {}
      <div className="right-section">
        <h2>Metrics</h2>
        <div className="metrics">
          {loadingMetrics && <div className="loading-overlay">Loading...</div>}
          <pre>{metrics}</pre>
        </div>
      </div>
    </div>
  );
};

export default TimeMetrics;
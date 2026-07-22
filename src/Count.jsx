import { useEffect, useState } from 'react';
export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // アンマウント時にタイマーをクリア
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleared');
    };
  }, []);

  return (
    <div>
      <h2>Timer: {count} seconds</h2>
    </div>
  );
}

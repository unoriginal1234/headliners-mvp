import React, { useEffect, useState } from 'react';

const NextUp = () => {

    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date();
            const nowInLA = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
            const midnight = new Date(nowInLA.getFullYear(), nowInLA.getMonth(), nowInLA.getDate() + 1, 0, 0, 0, 0);
            const diff = midnight - nowInLA;

            if (diff > 0) {
                const hours = Math.floor(diff / 1000 / 60 / 60);
                const minutes = Math.floor((diff / 1000 / 60) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTimeRemaining(
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                );
            } else {
                setTimeRemaining('00:00:00');
            }
        };

        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="next-up">
            {timeRemaining} until next Headliner
        </div>
    );
};

// export default CountdownTimer;


  // return (
  //   <div className="next-up">
  //     Next Headliner in ___
  //   </div>
  // )


export default NextUp
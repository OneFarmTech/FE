import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Counter = (props) => {
  const { login } = props;
  const [time, setTime] = useState(30);
  const [displayLink, setLink] = useState(false);

  useEffect(() => {
    let interval;

    if (time > 0) {
      interval = setInterval(() => {
        setTime((time) => (time - 1))
      }, 1000);
    } else {
      clearInterval(interval);
      setLink(true);
    }

    return () => clearInterval(interval);
    
  }, [time, displayLink])

  return (
    <>
      { displayLink ? (<Link onClick={login} className="not-italic text-green-30">Resend Code</Link>) : <span className="not-italic text-green-30">{time}</span>}
    </>
  )
}

export default Counter;

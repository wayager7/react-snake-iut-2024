import React, { useEffect } from 'react';
import useStore from "../../utils/store";
import s from "./Snake.module.scss";

const Snake = ({ data }) => {
  const { skin } = useStore();

  useEffect(() => {
    const snakeElement = document.createElement('div');
    snakeElement.className = 'snakeDot';
    document.body.appendChild(snakeElement);

    // Nettoyez l'élément lorsque le composant est démonté
    return () => {
      document.body.removeChild(snakeElement);
    };
  }, []);

  const getStyle = (dot, i) => {
    let background = null;

    const style = {
      transform: `translate(${dot[0]}px, ${dot[1]}px)`,
      background: background,
    };

    return style;
  };

  return (
    <>
      {data.map((dot, i) => (
        <div key={i} className={s.snakeDot} style={getStyle(dot, i)}></div>
      ))}
    </>
  );
};

export default Snake;

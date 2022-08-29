import classNames from "classnames";
import { useEffect, useState } from "react";
import './ScrollButton.scss';

type Props = {
  fieldRef: React.RefObject<HTMLDivElement>;
};

export const ScrollButton: React.FC<Props> = ({ fieldRef }) =>{
  const scroll = () => {
    if(fieldRef.current) {
      fieldRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <div className="container">
      {(
          <button 
            className="ScrollButton"
            onClick={scroll}
          />   
      )}
    </div> 
  );
}
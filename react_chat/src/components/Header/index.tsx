import React from 'react';



import './index.scss';

interface NavBarProps  extends React.HTMLProps<HTMLDivElement>{
  className?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onLeftClick?: React.MouseEventHandler<HTMLDivElement>;
  onRightClick?: React.MouseEventHandler<HTMLDivElement>;
  onCenterClick?: React.MouseEventHandler<HTMLDivElement>;
}
function HeaderCom(props:NavBarProps) {
  // props.className
    return (
        <div  className={'top-bar flex-center-wrap w-screen '+ props.className}>
            <div className="top-bar-left flex-center "  onClick={props.onLeftClick}>
                {props.leftContent}
            </div>
            <div className="top-bar-center flex-center flex1" onClick={props.onCenterClick}>
                {props.children}
            </div>
            <div className="top-bar-right flex-center" onClick={props.onRightClick}>
              {props.rightContent}

            </div>
        </div>
    );
}

export default HeaderCom;

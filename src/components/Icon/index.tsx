import React from "react";

import "./Icon.scss";

export { ReactComponent as Heart } from "../../docs/heart.svg";
export { ReactComponent as Mark } from "../../docs/mark.svg";


// const Icon = ({ name, color, size }) => (
//   <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
//     <use xlinkHref={`${Icons}#icon-${name}`} />
//   </svg>
// );

// interface IconProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}
// export const Heart: React.FC<IconProps> = props => {
//   //<img src={heartIcon} {...props} alt="heart" className="icon" />;
//   return <HeartIcon />;
// };

// export const Mark: React.FC<IconProps> = props => {
//   // return <object type="image/svg+xml" data={markIcon}></object>;
//   return <MarkIcon />;
//   // return <img src={markIcon} {...props} alt="arrow" className="icon" />;
// };

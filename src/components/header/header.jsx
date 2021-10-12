import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Simple</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1351,w_2400,x_0,y_0/f_auto,q_auto,w_1100/v1571796144/shape/mentalfloss/604599-gettyimages-1083893950.jpg"
        alt=""
      />
    </div>
  );
}

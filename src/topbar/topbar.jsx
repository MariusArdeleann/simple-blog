import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-linkedin-in"></i>
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Log Out</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://i.ytimg.com/vi/6di34z0eAaI/maxresdefault.jpg"
          alt=""
        />
        <i className="topSearch fas fa-search"></i>
      </div>
    </div>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";

export const Topbar = () => {
  return (
    <div className="topbar text-white container-fluid bg-dark h-25 d-flex justify-content-between px-5 py-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
        alt="logo"
        className="logo rounded"
        style={{ width: "80px", height: "80px" }}
      />

      <h3>Game Verse</h3>

      <div className="profileMenu">
        <div className="avatar-and-name">
          <img src="" alt="" className="avatar" />
          <h6>Ismail AliF</h6>
        </div>
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <button>Signout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

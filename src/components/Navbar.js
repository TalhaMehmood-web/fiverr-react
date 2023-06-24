import React from "react";
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <h3>
            fiverr{" "}
            <span className="dot" style={{ color: "green" }}>
              .
            </span>
          </h3>
        </div>

        <div className="right">
          <ul>
            <li>
              <a href="/">Fiverr Business</a>
            </li>
            <li>
              <a href="/">Explore</a>
            </li>
            <li>
              <a href="/">
                <span className="globe">
                  <i class="fa-solid fa-globe"></i>
                </span>
                English
              </a>
            </li>
            <li>
              <a href="/">Become a Seller</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
          <div> <button className="nav-btn">Join</button></div>
        </div>
      </div>
    </div>
  );
}

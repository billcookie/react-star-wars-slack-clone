import React from "react"

export default function Communications() {
  return (
    <div className="communications-container">
        <div className="communications-side-bar">
          <h1>Death Star</h1>
          <div className="person">
            <div id="user" class="online-circle-active"></div>
            <span>General Tarkin</span>
          </div>
          <div className="side-bar-info">
            <div className="channels-header">
              <h3>Channels</h3>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div clasNames="channel">
              <span><i className="fa-brands fa-galactic-republic"></i>general</span>
            </div>

            <div className="channel">
              <span><i class="fa-brands fa-galactic-republic"></i>help</span>
            </div>

            <div className="channel-active">
              <span><i class="fa-brands fa-galactic-republic"></i>orders</span>
            </div>

            <div class="channel">
              <span><i class="fa-solid fa-lock"></i>death-star-2-plans</span>
            </div>

            <div className="channel">
              <span><i class="fa-solid fa-lock"></i>emperor-meetings</span>
            </div>
            </div>

          <div className="side-bar-info">
            <div className="direct-message-header">
              <h3>Direct Messages</h3>
              <i className="fa-solid fa-plus"></i>
            </div>

            <div className="person">
              <div className="online-circle-active"></div>
              <span>Darthy Vader</span>
            </div>

            <div className="person">
              <div className="online-circle-active"></div>
              <span>Palpy</span>
            </div>

            <div className="person">
              <div className="online-circle-inactive"></div>
              <span>Boba Fett</span>
            </div>

            <div className="person">
              <div className="online-circle-inactive"></div>
              <span>Storm Trooper 1</span>
            </div>

            <div className="person">
              <div className="online-circle-inactive"></div>
              <span>Storm Trooper 2</span>
            </div>
          </div>
        </div>
      </div>
  )
}

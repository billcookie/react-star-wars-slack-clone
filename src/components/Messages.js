import React from "react"
import emperorAvatar from './images/emperor-avatar.png'
import vaderAvatar from './images/Darth-vader-avatar.png'
import stormTrooperAvatar from './images/Storm-trooper-avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Messages() {
  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1><FontAwesomeIcon icon="fa-brands fa-galactic-republic" />orders</h1>
      </div>

      <div class="message-conversations">

        <div className="message">
          <img className="message-img" src={vaderAvatar} alt="vader avatar"/>
          <div className="message-content">
            <p className="messenger-name"><strong>Darthy Vader</strong></p>
            <p>Hello</p>
            <p>Today the Emperor is coming to inspect the Death Star.
            Everyone please be on their best behaviour.
            </p>
          </div>
        </div>

        <div className="message">
          <img className="message-img"src={stormTrooperAvatar} alt="stormtrooper avatar"/>
          <div className="message-content">
            <p className="messenger-name"><strong>Storm Trooper 1</strong></p>
            <p>Of course sir! Will make sure the toilets are clean</p>
            <p>Anything else we should do?
            </p>
          </div>
        </div>

      <div className="message">
        <img className="message-img"src={stormTrooperAvatar} alt="stormtrooper avatar"/>
        <div className="message-content">
          <p className="messenger-name"><strong>Storm Trooper 2</strong></p>
          <p>How about we make cup cakes?</p>
          <p>I always hear the emperor has a sweet tooth.</p>
        </div>
      </div>

      <div className="message">
          <img className="message-img"src={vaderAvatar} alt="vader avatar"/>
          <div className="message-content">
            <p className="messenger-name"><strong>Darthy Vader</strong></p>
            <p>Sounds like a great idea! Make sure they chocolate flavoured.</p>
            <p>Everyone back to work!</p>
          </div>
      </div>

      <div className="message">
          <img className="message-img"src={emperorAvatar} alt="emperor avatar"/>
        <div className="message-content">
          <p className="messenger-name"><strong>Palpy</strong></p>
          <p>Please add many sprinkles to my cupcakes!</p>
          <p>I have a senate meeting now. Talk to you all in a minute.</p>
        </div>
      </div>
    </div>

    <div class="chat-input">
      <form action="text">
        <input type="text" id="your-message" class="form-control" placeholder="Type your message here..."/>
      </form>
    </div>
    </div>
  )
}

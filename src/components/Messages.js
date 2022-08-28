import React from "react"
import emperorAvatar from './images/emperor-avatar.png'
import vaderAvatar from './images/Darth-vader-avatar.png'
import stormTrooperAvatar from './images/Storm-trooper-avatar.png'

export default function Messages() {
  return (
    <div class="messages-container">
      <div class="messages-header">
        <h1><i class="fa-brands fa-galactic-republic"></i>orders</h1>
      </div>

      <div class="message-conversations">

        <div class="message">
          <img class="message-img" src={vaderAvatar} alt="vader avatar"/>
          <div class="message-content">
            <p class="messenger-name"><strong>Darthy Vader</strong></p>
            <p>Hello</p>
            <p>Today the Emperor is coming to inspect the Death Star.
            Everyone please be on their best behaviour.
            </p>
          </div>
        </div>

        <div class="message">
          <img class="message-img"src={stormTrooperAvatar} alt="stormtrooper avatar"/>
          <div class="message-content">
            <p class="messenger-name"><strong>Storm Trooper 1</strong></p>
            <p>Of course sir! Will make sure the toilets are clean</p>
            <p>Anything else we should do?
            </p>
          </div>
        </div>

      <div class="message">
        <img class="message-img"src={stormTrooperAvatar} alt="stormtrooper avatar"/>
        <div class="message-content">
          <p class="messenger-name"><strong>Storm Trooper 2</strong></p>
          <p>How about we make cup cakes?</p>
          <p>I always hear the emperor has a sweet tooth.</p>
        </div>
      </div>

      <div class="message">
          <img class="message-img"src={vaderAvatar} alt="vader avatar"/>
          <div class="message-content">
            <p class="messenger-name"><strong>Darthy Vader</strong></p>
            <p>Sounds like a great idea! Make sure they chocolate flavoured.</p>
            <p>Everyone back to work!</p>
          </div>
      </div>

      <div id="message">
          <img className="message-img"src={emperorAvatar} alt="emperor avatar"/>
        <div class="message-content">
          <p class="messenger-name"><strong>Palpy</strong></p>
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

import React, {useState} from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false)
  return (
    <div className={checked ? 'debug-on' : ''}>
      <div className="debug">
        <label>
          <input type="checkbox" value={checked} onClick={() => setChecked(!checked)}/>
          Debug
        </label>
      </div>
      <div className="parallax">
        <div id="group-1" className="parallax__group mock-navbar">
          <div class="parallax__layer parallax__layer--base">
            <div className="title">
              This is a navbar
          </div>
          </div>
        </div>
        <div id="group-2" className="parallax__group mock-hero">
          <div id="bg-image-1" class="parallax__layer parallax__layer--back">
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div className="title">
              SITE HERO TEXT
          </div>
          </div>
        </div>
        <div id="group-3" className="parallax__group">
          <div class="parallax__layer parallax__layer--base">
            <div className="title">
              This is the foreground
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

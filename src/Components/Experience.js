import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <div class="ExperienceContainer">
        <div class="ExperienceWrapper">
            <button class="experience">Work Experience</button>
        </div>
        <div class="work">
            <div class="topChan">
                <div class="leftChan">
                    <p>
                        Chan-MediPharm Ltd/Gte, Lagos State <br></br>
                        Position: Medical &amp; Sales Representative
                    </p>
               </div>
                <div class="rightChan">
                    <p>2019-2020</p>
                </div>
            </div>
            <ul>
                <li>Detailing and presentation of various company's product to doctors and other medical practitioners </li>
                <li>Medical &amp; Sales Report documentation</li>
            </ul>


            <div class="topKrs">
                <div class="leftKrs">
                    <p>
                        KRS INVESTMENT/CASCADE TABLE WATER <br></br>
                        Position: Quality Control &amp; Laboratory Assistant
                    </p>
               </div>
                <div class="rightKrs">
                    <p>2017</p>
                </div>
            </div>
            <ul>
                <li>Testing of the treated water to check for hardness,iron,cyanide,nitrate,nitrite chloride etc.</li>
                <li>Preparation of caustic dosing and chlorine dosing to be used at the water treatment plant </li>
                <li>routine check of the pH of the treated water</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience
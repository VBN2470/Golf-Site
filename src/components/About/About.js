
import React from 'react';
import './About.css';
import tee from '../../pictures/tee.PNG';

const About = () => {
    return (
        <div>
            <header className="showcase-about">
                <div className="showcase-content">
                    {/* <h1>About Us</h1> */}
                </div>
            </header>
            <div id='info-about'>
                  <p>
                        North's is home to more than just a footy club, but a whole community. Proudly
                        supporting projects that benefit our local community and provide significant impact
                        for those who need it most and hosting a variety of intra-club sporting and special
                        interest groups consisting of over 2,500 members. <br />
                  </p>
                  <p>
                        North's Golf (Intra Club) provides opportunities at an affordable cost to its members to
                        play social golf on a Sunday fortnightly basis at golf courses within the Greater
                        Sydney area. Whilst participating in a sporting activity and in the course of
                        play, members are encouraged to develop social relationships with other members.
                        We are all the better for this. Included are two additional major events (i) Weekend
                        trip away (ii) Christmas BBQ for members and their families. In addition, North's Golf
                        encourages its members to attend the annual Presidents Shield meeting and dinner
                        held by North's along with regular patronage at the club. <br />
                        
                    </p>
                    <p>
                        Come tee with us.
                    </p>
                    <img 
                        src={tee}
                        width="6%"
                        height="6%"
                    />
              </div>
              
        </div>
    );
};

export default About;

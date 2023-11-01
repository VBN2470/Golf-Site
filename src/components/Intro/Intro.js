
import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <div>
            <header id="showcase-intro">
            <div class="showcase-content">
                <h1>
                    Welcome to North's Golf Club
                </h1>
                <a href="#news" className='btn btn-dark'> <strong style={{ fontWeight: '500' }}>News & Updates</strong> </a>
            </div>
            </header>
            <div id="news" className='events'>
            <div>
                <div className="col">
                    <h2 className="title">News & Updates</h2>
                </div>
                </div>
                <div className="row">
                    <h3>Round 3 Richmond GC 6th February</h3>
                    <p>
                    Fourteen players made it to the historic course with the Blue Mountains as its backdrop. Winner on the day John Speck 38 points, Collin Nicholls 37 points from Brenton Price 36 points. 
                    Balls to Tony Killian, Alan De Boer on a count back from John Barber. Nearest the pin to Alan De Boer (2x’s) Tony Killian, Con Walsh and Ramesh Nadan. 
                    Commencement of the Doubles Championship began, Brenton Price & Ron Yeap won 2/1 from Mark Wareham & John Speck. 
                    John Barber & Tony Killian won 3/2 from Ramesh Nadan & Collin Nicholls.  
                    </p>
                </div>
                <div className="row">
                    <h3>Round 2 Cabramatta GC 23rd January</h3>
                    <p>
                    Fifteen players arrived for their 7.38am tee time slot. The course was in great condition and the day fine. 
                    Winner with a sterling performance Colin Nicholls 38 points, from John Barber 37points and Con Walsh 36 points. 
                    Golf balls to Ramesh Nadan and Mike Wareham. Nearest the pin to Mark Wareham and Colin Nicholls (3x’s) on fire! 
                    </p>
                </div>
                <div className="row">
                    <h3>Round 1 Mona Vale GC 9th January 2022</h3>
                    <p>
                    Fifteen players returned from holidays to the Northern Beaches favourite. 
                    Continuing his good form was 2021 Mountain Man, best on the day Ron Yeap 39 points from John Speck 38 points and Brett Davis 37 points on count back from Robyn King. 
                    Golf balls went to Wayne Bennett and Brenton Price. Nearest the pin to Alan De Boer, Mike Wareham, Tony Killian, Ron Yeap (2x’s) John Speck **HOLE IN ONE!** An awesome punch shot into the prevailing wind with his pitching wedge on the signature 16th. 
                    Trophy & one dozen golf balls are on there way.
                    </p>
                </div>
                {/* <div className="row">
                    <h3>Update 2022 Championship Points Score</h3>
                </div> */}
                <div className=''>
                    <h3>Visitors are always welcome, come and tee off with us.</h3>
                </div>
            </div>
        </div>
    );
};

export default Intro;

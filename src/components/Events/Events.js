
import React from 'react';
import './Events.css';


const Events = () => {
    return (
        <div>
            <header id="showcase-events">
                <div className='showcase-content'>
                    <h1>
                        Annual Events
                    </h1>
                    <a href="#main" className='btn btn-warning'> <strong style={{ fontWeight: '500' }}>Learn More</strong></a>
                </div>
            </header>
            <div id='main' className='events'>
                <div>
                    <div className="col">
                        <h2 className="title">Our Events (2022)</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className='title'>Doubles Championship (Feb - Mar)</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Round</th>
                                    <th>Venue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Doubles K.O. Rd 1 MatchPlay Stableford</td>
                                    <td>Richmond</td>
                                </tr>
                                <tr>
                                    <td>Doubles K.O. Rd 2 MatchPlay Stableford</td>
                                    <td>The Ridge</td>
                                </tr>
                                <tr>
                                    <td>Doubles K.O. Rd 3 MatchPlay Stableford</td>
                                    <td>Dunheved</td>
                                </tr>
                                <tr>
                                    <td>Doubles K.O. Rd 4 MatchPlay Stableford</td>
                                    <td>Glenmore Links</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <h4 className='title update'>10/04/2022: Update 1</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className='title'>Handicap Championship (Apr - May)</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Round</th>
                                    <th>Venue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Handicap Championship Rd 1 Stableford</td>
                                    <td>Fox Hills</td>
                                </tr>
                                <tr>
                                    <td>Handicap Championship Rd 2 Stableford</td>
                                    <td>Warringah</td>
                                </tr>
                                <tr>
                                    <td>Handicap Championship Rd 3 Stableford</td>
                                    <td>Long Reef</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <h4 className='title update'>10/04/2022: Update 1</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="title">Singles Championship (Jul - Sept)</h4>
                        <table>
                            <tr>
                                <th>Round</th>
                                <th>Venue</th>
                            </tr>
                            <tr>
                                <td>Singles K.O Rd 1 MatchPlay Stableford</td>
                                <td>Camden Lakeside</td>
                            </tr>
                            <tr>
                                <td>Singles K.O Rd 2 MatchPlay Stableford</td>
                                <td>Springs</td>
                            </tr>
                            <tr>
                                <td>Singles K.O Rd 3 MatchPlay Stableford</td>
                                <td>Richmond</td>
                            </tr>
                            <tr>
                                <td>Singles K.O Rd 4 MatchPlay Stableford</td>
                                <td>Mona Vale</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col">
                        <h4 className='title update'>10/04/2022: Update 1</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="title">Strokeplay Championship (Sept - Oct)</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Round</th>
                                    <th>Venue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Club Chmp Rd 1 Stroke</td>
                                    <td>Bankstown</td>
                                </tr>
                                <tr>
                                    <td>Club Chmp Rd 2 Stroke</td>
                                    <td>Glenmore Links</td>
                                </tr>
                                <tr>
                                    <td>Club Chmp Rd 3 Stroke</td>
                                    <td>Wakehurst</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <h4 className='title update'>10/04/2022: Update 1</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className='title'>Winners of Winners Championship (Nov)</h4>
                    </div>
                    <div className="col">
                        <h4 className='title update'>10/04/2022: Update 1</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className='title'>Mountain Man Event (Nov)</h4>
                    </div>
                    <div className="col">
                        <h4 className='title update'>10/04/2022: Update 1</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className='title'>Ambrose Event (Dec)</h4>
                    </div>
                    <div className="col">
                        <h4 className='title update'>10/04/2022: Update 1</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;

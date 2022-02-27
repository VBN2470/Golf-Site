
import React from 'react';
import './Membership.css';

const Membership = () => {
    return (
        <div>
            <div className='showcase-membership'>
                <h3>Join Us</h3>
            </div>
            <div id='info-membership'>
                <p>
                    At North's Golf Club, we welcome new members and encourage all membership enquiries. 
                    <br />
                    As this club is an Intra Sports Club under North's Club, we require each candidate to be a current member of <a href="https://norths.com.au/#membership">North's Club</a>.
                    <br />
                    Each member is required to have a valid Golf Australia handicap. New GA Handicap membership can be organised via our home golf club (membership cost applies). 
                    <br />
                    Annual fees for new members is <strong>$50.00</strong>, with subsidised game fees per round, as per the club's golf schedule. 
                </p>
                <p>
                     
                </p>
                <p>
                    For any membership queries, please do not hesitate to contact our Club President <a href="/contact"><strong>Mark Wareham</strong></a> on 0418 256 027 or by email at <a href="mailto:mwam@optusnet.com.au">mwam@optusnet.com.au</a>  <br /> or our Club Secretary <a href='/contact'><strong>Wayne Bennett</strong></a> on 0418 225 653 or by email at <a href="mailto:wayne@ardayne.com.au">wayne@ardayne.com.au</a>.
                </p>
            </div>
        </div>
    );
};

export default Membership;

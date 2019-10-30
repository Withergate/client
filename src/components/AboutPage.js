import React, { Component } from 'react';
import { Translate } from "react-localize-redux";
import { Table, Image } from 'react-bootstrap';

import CzechIcon from '../images/lang/czech.png';
import PatreonIcon from '../images/patreon.png';
import CardanoIcon from '../images/cardano.png';
import BitcoinIcon from '../images/bitcoin.png';
import GithubIcon from '../images/github.png';

class AboutPage extends Component {
    render() {
        return (
            <div className="m-4">
                <h3><Translate id="about.aboutHeader" /></h3>
                <p><Translate id="about.aboutText" /></p>

                <h3><Translate id="about.tutorialHeader" /></h3>
                <p><Translate id="about.tutorialText" /></p>
                <p>
                    <Image src={CzechIcon} width="25px" className="mr-2" /> <a href="https://witherpedia.fandom.com/cs/wiki/N%C3%A1pov%C4%9Bda_ke_h%C5%99e" target="_blank" rel="noopener noreferrer">Wiki</a>
                </p>

                <h3><Translate id="about.contributionHeader" /></h3>
                <p><Translate id="about.contributionText" /></p>

                <p><Image src={PatreonIcon} width="25px" className="mr-2" /> <b>Patreon: </b><a href="https://www.patreon.com/withergate" target="_blank" rel="noopener noreferrer">link</a></p>
                <p><Image src={BitcoinIcon} width="25px" className="mr-2" /> <b>Bitcoin: </b>{ window._env_.BITCOIN }</p>
                <p><Image src={CardanoIcon} width="25px" className="mr-2" /> <b>Cardano: </b>{ window._env_.CARDANO }</p>
                
                <h3><Translate id="about.developmentHeader" /></h3>
                <p><Translate id="about.developmentText" /></p>
                <p><Image src={GithubIcon} width="25px" className="mr-2" /> <a href="https://github.com/withergate" target="_blank" rel="noopener noreferrer">Github</a></p>

                <h3><Translate id="about.ackHeader" /></h3>
                <p><Translate id="about.photosText" /></p>
                
                <Table className="mt-4" striped bordered hover>
                    <thead>
                        <tr>
                            <th><Translate id="basic.name" /></th>
                            <th><Translate id="about.links" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Junktown crew</td>
                            <td>
                                <a href="https://www.junktown.eu/" target="_blank" rel="noopener noreferrer">Web</a>, <a href="https://www.facebook.com/junktownfestival/" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Petr Zip Hájek</td>
                            <td>
                                <a href="http://hajek.photo" target="_blank" rel="noopener noreferrer">Web</a>, <a href="https://www.facebook.com/Petr.Zip.Hajek" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Anna Baštýřová</td>
                            <td>
                                <a href="https://www.facebook.com/bastyr.anna" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Matej Slaviboj Bášti</td>
                            <td>
                                <a href="https://www.facebook.com/matej.basti" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>EXPit thru lens</td>
                            <td>
                                <a href="https://www.facebook.com/EXPit/" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Flying Sausages</td>
                            <td>
                                <a href="https://www.facebook.com/flying.sausages/" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default AboutPage;
import React, { Component } from 'react';
import { Translate } from "react-localize-redux";
import { Table, Image } from 'react-bootstrap';

import CardanoIcon from '../images/cardano.png';
import BitcoinIcon from '../images/bitcoin.png';
import GithubIcon from '../images/github.png';

class AboutPage extends Component {
    render() {
        return (
            <div className="m-4">
                <h3><Translate id="about.aboutHeader" /></h3>
                <p><Translate id="about.aboutText" /></p>

                <h3><Translate id="about.contributionHeader" /></h3>
                <p><Translate id="about.contributionText" /></p>

                <p><Image src={BitcoinIcon} width="25px" className="mr-2" /> <b>Bitcoin: </b>39CRNV8DotZ1LDkdoPVkuy8j1tRa7S7Cna</p>
                <p><Image src={CardanoIcon} width="25px" className="mr-2" /> <b>Cardano: </b>Ae2tdPwUPEZ2WWNpiWoSW1wKoXp8mZWctTkBieMBsAarV9xiA6ZTdVMz1nB</p>
                
                <h3><Translate id="about.developmentHeader" /></h3>
                <p><Translate id="about.developmentText" /></p>
                <p><Image src={GithubIcon} width="25px" className="mr-2" /> <a href="https://github.com/withergate">Github</a></p>

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
                                <a href="https://www.junktown.eu/">Web</a>, <a href="https://www.facebook.com/junktownfestival/">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Petr Zip Hájek</td>
                            <td>
                                <a href="http://hajek.photo">Web</a>, <a href="https://www.facebook.com/Petr.Zip.Hajek">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Anna Baštýřová</td>
                            <td>
                                <a href="https://www.facebook.com/bastyr.anna">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Matej Slaviboj Bášti</td>
                            <td>
                                <a href="https://www.facebook.com/matej.basti">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>EXPit thru lens</td>
                            <td>
                                <a href="https://www.facebook.com/EXPit/">Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Flying Sausages</td>
                            <td>
                                <a href="https://www.facebook.com/flying.sausages/">Facebook</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

AboutPage.propTypes = {
};

export default AboutPage;
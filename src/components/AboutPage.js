import React, { Component } from 'react';
import { Translate } from "react-localize-redux";
import { Table } from 'react-bootstrap';

class AboutPage extends Component {
    render() {
        return (
            <div className="m-4">
                <p>
                    <h3><Translate id="about.aboutHeader" /></h3>
                    <Translate id="about.aboutText" />
                </p>
                <p>
                    <h3><Translate id="about.contributionHeader" /></h3>
                    <Translate id="about.contributionText" />
                </p>
                <p>
                    <h3><Translate id="about.ackHeader" /></h3>
                    <Translate id="about.photosText" />
                
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
                </p>
            </div>
        );
    }
}

AboutPage.propTypes = {
};

export default AboutPage;
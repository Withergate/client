import React from 'react';
import { Card, Button } from 'react-bootstrap';

import { Translate } from 'react-localize-redux';

const NewsletterPanel = ({profile}) => (
    <Card className="p-3">
        <p>
            <Translate id="profile.newsletter" />
        </p>
            <a 
                target="_blank"
                rel="noopener noreferrer"
                href={localStorage.getItem('lang') === 'cs' ? "https://landing.mailerlite.com/webforms/landing/u2w6n0" : "https://landing.mailerlite.com/webforms/landing/w4m5r9"}>
                <Button className="button-large" variant="dark"><Translate id="profile.subscribe" /></Button>
            </a>
    </Card>
);

export default NewsletterPanel;
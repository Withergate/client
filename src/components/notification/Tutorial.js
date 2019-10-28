import React from 'react';
import { Translate } from "react-localize-redux";
import { Carousel, Image } from 'react-bootstrap';

const Tutorial = () => (
    <Carousel className="mt-4" interval={null} slide={false}>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/turns.png"
                />
                <h3><Translate id="header.turn" /></h3>
                <p><Translate id="tutorial.turns" /></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/news.png"
                />
                <h3><Translate id="header.news" /></h3>
                <p><Translate id="tutorial.news" /></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/clan.png"
                />
                <h3><Translate id="header.clan" /></h3>
                <p><Translate id="tutorial.clan" /></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/actions.png"
                />
                <h3><Translate id="header.actions" /></h3>
                <p><Translate id="tutorial.actions" /></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/fame.png" 
                />
                <h3><Translate id="header.fame" /></h3>
                <p><Translate id="tutorial.fame" /></p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default Tutorial;
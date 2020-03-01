import React from 'react';
import { Translate } from "react-localize-redux";
import { Carousel, Image } from 'react-bootstrap';

const Preview = () => (
    <Carousel className="preview" interval={null} slide={false}>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/turns.png"
                />
                <h3><Translate id="header.turn" /></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/news.png"
                />
                <h3><Translate id="header.news" /></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/clan.png"
                />
                <h3><Translate id="header.clan" /></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/actions.png"
                />
                <h3><Translate id="header.actions" /></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/fame.png" 
                />
                <h3><Translate id="header.fame" /></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <Image
                    className="d-block w-100 mt-4 mb-4"
                    src="https://storage.googleapis.com/withergate-images/tutorial/default.png" 
                />
                <h3><Translate id="tutorial.defaultHeader" /></h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default Preview;
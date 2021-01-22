import React from 'react';
import { Translate } from "react-localize-redux";
import { Image, Carousel } from 'react-bootstrap';

const Preview = () => (
    <div className="preview text-center">
        <Carousel className="preview">
            <Carousel.Item>
                <Carousel.Caption>
                    <Translate>
                        {({ translate }) => 
                            <a href={translate("login.preview.image1")} target="_blank" rel="noopener noreferrer">
                                <Image src={translate("login.preview.image1")} className="w-100 mb-2 preview-image" />
                            </a>
                        }
                    </Translate>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <Translate>
                        {({ translate }) => 
                            <a href={translate("login.preview.image2")} target="_blank" rel="noopener noreferrer">
                                <Image src={translate("login.preview.image2")} className="w-100 mb-2 preview-image" />
                            </a>
                        }
                    </Translate>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <Translate>
                        {({ translate }) => 
                            <a href={translate("login.preview.image3")} target="_blank" rel="noopener noreferrer">
                                <Image src={translate("login.preview.image3")} className="w-100 mb-2 preview-image" />
                            </a>
                        }
                    </Translate>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <Translate>
                        {({ translate }) => 
                            <a href={translate("login.preview.image4")} target="_blank" rel="noopener noreferrer">
                                <Image src={translate("login.preview.image4")} className="w-100 mb-2 preview-image" />
                            </a>
                        }
                    </Translate>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            
    </div>
);

export default Preview;
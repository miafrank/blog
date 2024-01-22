import React from 'react';
import '../index.css';
import { Footer } from 'flowbite-react';
import { BsGithub, BsLinkedin, BsMailbox, BsPhone } from 'react-icons/bs';

const HomeFooter = () => (
    <Footer container>
        <div className="w-full">
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Mia Frank" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="https://github.com/miafrank/" icon={BsGithub} />
                    <Footer.Icon href="https://www.linkedin.com/in/mia-frank/" icon={BsLinkedin} />
                    <Footer.Icon href="tel:314-000-0000" icon={BsPhone} />
                    <Footer.Icon href="mailto: mia.jo.frank@gmail.com" icon={BsMailbox} />
                </div>
            </div>
        </div>
    </Footer>
);

export default HomeFooter;
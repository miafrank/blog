import React from 'react'
import '../index.css'
import { Footer } from 'flowbite-react'
import { BsGithub, BsLinkedin, BsMailbox, BsPhone } from 'react-icons/bs'

const HomeFooter = () => (
    <footer class="bg-white shadow  border-gray-200 dark:bg-gray-900">
        <div className="w-full">
            <div class="max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="flex items-center justify-between">
                    <Footer.Copyright href="https://www.linkedin.com/in/mia-frank/" by="Mia Frank" year={2024} />
                    <ul class="flex flex-wrap items-center space-x-4 mb-6 text-sm font-medium text-left text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Footer.Icon href="https://github.com/miafrank/" icon={BsGithub} />
                        </li>
                        <li>
                            <Footer.Icon href="https://www.linkedin.com/in/mia-frank/" icon={BsLinkedin} />
                        </li>
                        <li>
                            <Footer.Icon href="tel:314-000-0000" icon={BsPhone} />
                        </li>
                        <li>
                            <Footer.Icon href="mailto: mia.jo.frank@gmail.com" icon={BsMailbox} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default HomeFooter

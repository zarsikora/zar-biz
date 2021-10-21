import React from 'react';
import styled from 'styled-components';
//Assets
import MainGraphic1 from "./../../img/case-studies/tlc/main-graphic1-01.png";
import MainGraphic2 from "./../../img/case-studies/tlc/main-graphic2-02.png";
import SecondaryGraphic1 from './../../img/case-studies/tlc/secondary-graphics-03.png';
import SecondaryGraphic2 from './../../img/case-studies/tlc/secondary-graphics-04.png';
import TertiaryGraphic from './../../img/case-studies/tlc/tertiary-graphics-05.png';
import AthDocMocks1 from './../../img/case-studies/tlc/adoc-mocks1.png';
import AthDocMocks2 from './../../img/case-studies/tlc/adoc-mocks2.png';
import MedDocMocks1 from './../../img/case-studies/tlc/mdoc-mocks1.png';
import MedDocMocks2 from './../../img/case-studies/tlc/mdoc-mocks2.png';
import BwDocMocks from './../../img/case-studies/tlc/bw-doc-mock.png';
import AthWeb1 from './../../img/case-studies/tlc/ath-web1.png';
import MedWeb1 from './../../img/case-studies/tlc/med-web1.png';
import IgMed from './../../img/case-studies/tlc/ig-med.png';
import TwitterMed from './../../img/case-studies/tlc/twitter-med.png';
import ZipFile from './../../files/Journalist-Guides.zip';

// add alt text

const TLC = () => {
    return (
        <Wrapper>
            <Hero>
                <PinkBlock><h1>Transgender Law Center</h1></PinkBlock>
                
                <Details>
                    <p>Role: Graphic designer, web designer, accessibility consultant</p>
                    <p>Status: Complete</p>
                    <p>Duration: August 2021-October 2021</p>
                </Details>
            </Hero>

            <SlidesCta target="BLANK" href={ZipFile} aria-label="Download Journalist Guides (zip file)">
                Download Guides
            </SlidesCta>
            <Content>
                <RichText>
                    <Heading>Project Vision</Heading>
                    <p>
                        The Transgender Law Center is the largest trans-led organization in the United States. Their mission is to keep transgender and gender nonconforming people alive, thriving, and fighting 
                        for liberation. One of the many ways which this organization advocates for transgender individuals is by providing resources to the public on how to better push back against discriminatory
                        practices they see happening in the world.
                    </p>

                    <p>
                        In this project, I collaborated with TLC on two guides which advise journalists on best practices when reporting on issues related to anti-trans legislation, specifically anti-trans medical
                        and athletics bans. We worked together to create a solid visual ecosystem for these reports, including PDFs, landing pages, and social media graphics. 
                    </p>
                </RichText>

                <RichText>
                    <Heading>Challenges</Heading>

                    <PinkBlock>
                        <p>Build a solid identity that is visually engaging, accessible, and consistent across mediums</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>Assure that not only web experiences, but also PDFs are ADA-compliant</p>
                    </PinkBlock>  

                    <PinkBlock>
                        <p>Present a dense amount of information in a way that reduces cognitive strain</p>
                    </PinkBlock> 
                </RichText>

                <RichText>
                    <Heading>Graphics</Heading>
                    <p>
                        Before beginning the design process on the documents and web pages, I wanted to solidify the main visual elements I would
                        be using across the breadth of the project. Starting with sketches and moving into vectorization, I sought to create a suite 
                        of simple, representative, and empowering imagery to accompany guide text.
                    </p>

                    <p>
                        Rather than visualizing disenfranchisement in the status quo, each primary image showcases a trans individual experiencing inclusion 
                        and the sense of euphoria and empowerment that goes along with that. 
                    </p>

                    <img alt="" src={MainGraphic1} />
                    <img alt="" src={MainGraphic2} />

                    <p>
                        To compliment the primary images, I illustrated secondary assets that contribute to the theme of each piece.
                    </p>

                    <img alt="" src={SecondaryGraphic2} />
                    <img alt="" src={SecondaryGraphic1} />

                    <p>
                        Finally, I made some small decorative graphics to accent headings and other main ideas.
                    </p>

                    <img alt="" src={TertiaryGraphic} />
                </RichText>

                <RichText>
                    <Heading>Document Design</Heading>

                    <p>
                        When approaching document design for this project, I prioritized readability above all else. By limiting 
                        background colors to white and pale yellow and text colors to black and dark green, I ensured maximum contrast
                        to reduce eye strain. By establishing a clear heading hierarchy, I ensured that the flow of the document was easy to
                        follow and would not fatigue readers despite the considerable length of these resources.
                    </p>

                    <p>
                        With the visual design phase for these guides completed, I conducted a full accessibilty audit and remediated each 
                        PDF to ensure full ADA compliance. Through inputting document metadata, reinforcing structural hierarchy in paragraph styles,
                        and defining flow through article creation and layer reordering, I ensured that each document would be fully accessible by screen 
                        readers and other commonly used accessibility tools. 
                    </p>

                    <img alt="" src={MedDocMocks1} />
                    <img alt="" src={MedDocMocks2} />
                    <img alt="" src={AthDocMocks1} />
                    <img alt="" src={AthDocMocks2} />

                    <p>You can view these documents <a target="_BLANK" href="http://transgenderlawcenter.org/wp-content/uploads/2021/10/Athletics-Doc-Final.pdf">here (athletics)</a> and <a target="_BLANK" href="http://transgenderlawcenter.org/wp-content/uploads/2021/10/Medical-Doc-Final.pdf">here (medical)</a>.</p>

                    <p>
                        A final point I considered in my design process was this: what other conditions may a person want to utilize these guides in? What if someone intends to 
                        print these documents out in black and white? While the digital PDF was completely readable, I worried about the hit contrast may take when being printed 
                        out by a low quality printer in grayscale. How would black text on a yellow background translate in those conditions? To assure readability in even the most 
                        rustic of hard copies, I created a second iteration of each document in grayscale that focuses on further optimizing text contrast. 
                    </p>

                    <img alt="" src={BwDocMocks} />

                    <p>You can view the high-contrast iterations of these documents <a target="_BLANK" href="http://transgenderlawcenter.org/wp-content/uploads/2021/10/Athletics-Doc-Print-Final.pdf">here (athletics)</a> and <a target="_BLANK" href="http://transgenderlawcenter.org/wp-content/uploads/2021/10/Medical-Doc-Print-Final.pdf">here (medical)</a>.</p>
                </RichText>

                <RichText>
                    <Heading>Web Design</Heading>
                    <p>
                        When designing landing page experiences to compliment the guides, I focused on retaining the visual identity established in the PDFs while taking into account
                        web-specific concerns. Namely, I sought to make sure that these landing pages were fully responsive and specifically paid mind to mobile design, knowing that
                        a large portion of readers would convert over to TLC's site via Instagram and Twitter. 
                    </p>

                    <img alt="" src={AthWeb1} />
                    <img alt="" src={MedWeb1} />

                    <p>Review my prototypes <a target="_BLANK" href="https://xd.adobe.com/view/d6d0d979-0031-40b3-a45c-e957ade273e3-8383/?fullscreen">here</a>!</p>

                    <p>
                        Ultimately, some facets of these designs had to be adjusted to accommodate the Wordpress builder being utilized by the dev team. However, none of the changes
                        affect visual cohesion between the landing pages and their respective documents.
                    </p>

                    <p>You can check out the live landing pages <a target="_BLANK" href="https://transgenderlawcenter.org/journalist-resource-reporting-on-anti-trans-athletic-bans">here (athletics)</a> and <a target="_BLANK" href="https://transgenderlawcenter.org/journalist-resource-reporting-on-anti-trans-medical-bans">here (medical)</a>.</p>
                </RichText>

                <RichText>
                    <Heading>Graphic Design for Social Media</Heading>

                    <p>
                        Leading up to launch, TLC wanted to display both promotional graphics and graphics that introduced summarized versions of each document
                        across multiple social media outlets.
                    </p>

                    <p>
                        Using a boiled-down copy deck, I designed two carousels for Instagram that would introduce each guide's main ideas and present viewers
                        with the opportunity to learn more by navigating to the web experience. As is true with each facet of this project, I focused specifically
                        on readability, balancing imagery with sparse amounts of high-contrast text to keep viewers swiping. 
                    </p>

                    <img alt="" src={IgMed} />

                    <p>You can view these graphics live <a target="_BLANK" href="https://www.instagram.com/p/CVQg87sFO4i/">here (medical)</a>.</p>

                    {/* <p>IG story goals, twitter stuff</p> */}

                    <p>
                        In addition, I created promotional banner images to be used on Twitter as well as for Open Graph images on the landing pages themselves:
                    </p>

                    <img alt="" src={TwitterMed} />
                </RichText>

                <RichText>
                    <Heading>Conclusion</Heading>

                    <p>
                        This project married a number of individual skills I had been cultivating separately into one effort. Beyond the more obvious technical opportunities for
                        learning (specifically with Adobe InDesign), my work on this initiative provided invaluable experience with creating cohesive visual identities across
                        numerous platforms and mediums. I look forward to doing more work like this in the future!
                    </p>
                </RichText>
            </Content>
        </Wrapper>
    );
}

export default TLC;

const Wrapper = styled.div `
    color: #000;
    background-color: #fff;
    padding-bottom: 3rem;
    text-align: center;
    @media (min-width: 768px){
        padding-bottom: 8rem;
    }
`

const Hero = styled.div`
    padding: 5rem 5rem 2rem;
    text-align: center;

    h1 {
        font-size: 3rem;
        color: #2C493A;
        @media(min-width: 768px){
            font-size: 7rem;
        }
        @media(min-width: 992px){
            font-size: 10rem;
        }
    }
`

const Details = styled.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`

const SlidesCta = styled.a `
    color: #2C493A;
    text-decoration: none;
    transition: all ease 300ms;
    font-size: 4rem;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    padding: 1rem;
    background-color: #FED771;

    @media(hover: hover){
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`

const Content = styled.div`
    font-family: "Roboto";
    padding: 0 2rem;
    @media (min-width: 768px){
        padding: 0 5rem;
        max-width: 90%;
        margin: 0 auto;
    }

    p {
        font-family: "Helvetica";
        font-size: 1.6rem;
        line-height: 1.5em;
        max-width: 60rem;
        margin: 1rem 0;
    }

    a {
        color: #000;
        text-decoration: underline;
        transition: all ease 300ms;

        &:hover {
            color: red;
        }
    }

    ul {
        padding: 0;
        margin-left: 2rem;
        font-size: 1.6rem;
        font-family: Helvetica;
        list-style: none;
        display: flex;
        max-width: 60rem;
        margin: 0 auto;
        
        li {
            margin-bottom: 1.5rem;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        height: auto;
        margin: 2rem auto;
    }
`

const Heading = styled.h2 `
    font-size: 3rem;
`

const PinkBlock = styled.div`
    background-color: #FED771;
    padding: 2rem;
    display: block;
    margin: 0 auto 2rem;
    @media (min-width: 768px){
        width: 50%;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
    }

    p {
        font-family: "Roboto";
    }

    &:last-child {
        margin-bottom: 0;
    }
`

const RichText = styled.div`
    margin-bottom: 6rem;
    text-align: center;

    &.desktopOnly {
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }

    p {
        margin: 1rem auto;

        &:last-child{
            margin-bottom: 0;
        }
    }
`
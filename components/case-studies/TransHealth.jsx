import React from 'react';
import styled from 'styled-components';
//Assets
import Persona1 from "./../../img/case-studies/transhealth/user-persona-1.jpeg";
// import MobilePersona1 from "./../../img/case-studies/lfdm/persona-mobile-1.png";
// import MobilePersona2 from "./../../img/case-studies/lfdm/persona-mobile-2.png";
import Persona2 from "./../../img/case-studies/transhealth/user-persona-2.jpeg";
import LofiPrototype from "./../../img/case-studies/transhealth/lofi-prototype.jpeg";
import HomeFlow from "./../../img/case-studies/transhealth/home-flow.png";
import Staff from "./../../img/case-studies/transhealth/staff.png";
import Resources from "./../../img/case-studies/transhealth/resources.png";
import Hifi from "./../../img/case-studies/transhealth/hifi-mock.png";
import Hifi2 from "./../../img/case-studies/transhealth/hifi-mock2.jpeg";
import Hifi3 from "./../../img/case-studies/transhealth/hifi-mock3.jpeg";


const TransHealth = () => {
    return (
        <Wrapper>
            <Hero>
                <PinkBlock><h1>TransHealth</h1></PinkBlock>
                
                <Details>
                    <p>Role: UX designer, UX researcher, developer</p>
                    <p>Status: Complete</p>
                    <p>Duration: September 2020 - March 2021</p>
                </Details>

                <Cta target="_BLANK" href="https://www.transhealth.org/">View Live Site</Cta>
            </Hero>

            <Content>
                <RichText>
                    <Heading>Project Vision</Heading>
                    <p>
                        Transhealth is an up-and-coming health organization in Western Massachusetts seeking to expand access to
                        transgender-friendly medical services outside of major metropolitan areas. Ahead of the opening of their 
                        clinic in Northampton, the founders of this organization wanted to establish a strong digital presence through 
                        a web application that would give future patients quick, intuitive access to resources they need as well as solve 
                        for pre-existing pain points specific to the trans user experience in digital medical spaces.
                    </p>
                </RichText>

                <RichText>
                    <Heading>Challenges</Heading>

                    <PinkBlock>
                        <p>Design a digital health platform tailored to the needs of trans and gender-nonconforming users</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>Ease the task of patient intake for staff and users alike with a simple user flow for prospective patient registration and learning more about offered services</p>
                    </PinkBlock>
                </RichText>

                <RichText>
                    <Heading>Getting to Know the User</Heading>

                    <p>
                        The success of this project hinged upon an early and thorough understanding of trans and gender-nonconforming 
                        users seeking medical care and the pain points they have historically encountered in that process.
                    </p>

                    <p>
                        I led the research efforts on this project, combining pre-existing findings from the <a target="_BLANK" href="https://www.transhealthresearch.org/post/the-path-project-plan-and-act-for-transgender-health" >
                        PATH Project</a> with my own primary research. This research took the form of an anonymous survey focusing on trans and gender non-conforming
                        respondents that live or have lived in Western Massachusetts. By working with LGBTQ organizations in the area we were able to receive
                        50 submissions for analysis. You can check out my synthesis of these fully anonymous results <a target="_BLANK" href="https://docs.google.com/presentation/d/1OmMKHNPl-neNbqXi6BMfZGZUCMWiouOWjF_ecSAbX8w/edit?usp=sharing">here</a>.
                    </p>

                    <p>Overall, responses pointed to a consistent cluster of pain points:</p>

                    <PinkBlock>
                        <h3>Historically Justifiable Distrust</h3>
                        <p>
                            With 68% of survey respondents reporting it either somewhat common or extremely common to have to educate healthcare professionals on their unique needs as a 
                            trans person, it's no wonder that trans patients are very hesitant to put their trust in clinics or providers.
                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Primary Tasks are Draining</h3>
                        <p>
                            On many medical sites, flows for primary tasks force a user to navigate multiple screens and repeatedly view/input potentially triggering content such
                            as their deadname, biological sex, etc. These obstacles disincentivize proactivity in setting up health checks, renewing prescriptions, and other
                            crucial tasks for wellness.
                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Existing Resources are Profit-Driven, Lack Community, Not Representative</h3>
                        <p>
                            Multiple respondents commented that past trans clinics they had visited were more often than not profit-focused
                            "boutique healthcare facilit[ies] for skinny white nonbinary people with expensive insurance plans" rather than community-focused,
                            intersectional, and financially accessible. This attitude of profit and exclusivity can manifest in ways varying from the obvious (limited 
                            insurance offerings outlined, no mention of financial assistance), to the more nuanced (photography choices limited to a narrow and unrepresentative
                            window of the community). 
                        </p>
                    </PinkBlock>
                </RichText>

                <RichText>
                    <Heading>Meet the Users</Heading>
                    
                    <p>
                        Before presenting to the client, my team synthesized the results of my research into two primary user personas, as well as a 
                        secondary user community of parents, providers, and those who may be gender questioning.
                    </p>

                    <img alt="User persona for Distant and Disillusioned" src={Persona1} />
                    <img alt="User persona for Inadequately Affirmed" src={Persona2} />
                </RichText>

                <RichText>
                    <Heading>Wireframing</Heading>

                    <p>
                        Through the needs shared by our primary personas, we were able to glean the primary characteristics necessary
                        for successful user movement across the application. 
                    </p>

                    <p>
                        There was a clear, consistent need for community-building with other transgender and gender-diverse people and full transparency about medical staff qualifications while keeping
                        in mind tone and visual elements to help foster a sense of belonging and comfort in a historically anxiety-inducing place. 
                        While Distant and Disillusioned needs to quickly request prescription refills, Inadequately Affirmed wants to browse community events and
                        check in on staff credentials to make sure their providers are a good fit. 
                    </p>

                    <img alt="" src={LofiPrototype} />

                    <p>
                        We addressed the needs of those who wanted to complete their intended task and leave as soon as possible by positioning access to the 
                        Patient Portal front, center, and loud in the navigation. We also positioned navigation to resources for new intake above the fold of
                        the home page to show the user our best guess on what they need within their first look.
                    </p>

                    <img alt="" src={HomeFlow} />

                    <p>
                        To assuage levels of distrust surrounding staff qualifications and background
                        with transgender patients, we designed clinician profiles to center background and credentials.
                    </p>

                    <img alt="" src={Staff} />

                    <p>
                        To support users beyond the realm of paid medical services and emphasize attention to holistic community health, we designed a resource
                        tool with an extensive library of curated content related to the many dimensions of wellness in the trans community. This tool not only
                        provides helpful guidance to our primary personas but also our secondary communities, including parents of trans children and healthcare 
                        providers seeking to better serve their patients.
                    </p>

                    <img alt="" src={Resources} />

                    <p>
                        For those looking to forge connections within the community, we outfitted the site with an events tool that connected to Eventbrite, Facebook,
                        and Google Calendar so that after the pandemic, users could easily make plans to engage socially and add event information to their calendar before
                        they had a chance to forget.
                    </p>
                </RichText>

                <RichText>
                    <Heading>UI Decisions</Heading>

                    <p>
                        In a competitive audit of adjacent solutions, our team noticed that a majority of health-centered web applications had very cold, clinical
                        color palettes. We sought to challenge this visual trend and introduce feelings of warmth and welcomeness while still upholding professionalism.
                        To achieve this, we decided upon a color palette that was vibrant without feeling gendered or infantilizing and embellished with inclusive photography
                        and a custom icon set.
                    </p>

                    <img alt="" src={Hifi} />

                    <img alt="" src={Hifi2} />

                    <img alt="" src={Hifi3} />

                </RichText>

                <RichText>
                    <Heading>Conclusion</Heading>

                    <p>
                        Since <a target="_BLANK" href="https://www.gazettenet.com/Trans-Health-center-opens-in-Northampton-40244480">opening</a> in May of 2021, 
                        Transhealth has already made a tangible impact on access to care outside of New England's urban communities as well as an ideological impact
                        on how transgender medical care is viewed through <a target="_BLANK" href="https://www.wbur.org/radioboston/2021/09/16/masshealth-transgender-care">consistent media engagement</a> on 
                        trans issues. I couldn't be more proud to have contributed to this project!
                    </p>
                </RichText>
            </Content>
        </Wrapper>
    );
}

export default TransHealth;

const MobileImg = styled.img `
    display: block;
    @media (min-width: 768px){
        display: none;
    }
`

const DesktopImg = styled.img `
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`

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
        font-size: 10rem;
    }
`

const Details = styled.div`
    font-family: "Roboto";
    font-size: 1.6rem;
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
    background-color: #A4C5D9;
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

const Cta = styled.a `
    color: #000;
    text-decoration: none !important;
    transition: all ease 300ms;
    font-size: 4rem;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    padding: 1rem;
    background-color: #A4C5D9;
    margin-top: 3rem;

    @media(hover: hover){
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`
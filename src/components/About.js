const About = () => {
    return (
        <div className='container'>
            <div class="about-me-heading"><h1>About me</h1></div>
            <p>Hej!</p>
            <p>
                Welcome to my portfolio. My Name is Faisal Akhlaq. I live in Copenhagen.
                I am a software developer who loves travelling, fitness activities and sports.
                I create successful applications that are easy to use and built with
                best practices. Currently I am focused on learning and enhancing skills in Python (Flask and Django).
            </p>
            <p>
                Recently I developed some web projects using Django:
                <ul>
                    <li>MobileTilbud website for sale offers on mobiles from different companies</li>
                    <li>Social web application</li>
                    <li>Simple ecommerce web application</li>
                    Details and links to projects can be seen in projects section.
                </ul>
                Python is used in different application domains, I explored following:
                <ul>
                    <li>Web apps using Flask, Jinja templating, login management,
                        decorators, restricting access to functions and resources
                        based on roles</li>
                    <li>Web development using Django and Rest Framework-API</li>
                    <li>Interacting with databases in desktop and web applications
                        using SQLAlchemy and simple Database querying. CRUD operations</li>
                    <li>Learnt bit of mapping</li>
                    <li>Graphs using Bokeh and pandas</li>
                    <li>Some interesting web-scrapping of  dynamic and static websites
                        using requests and selenium</li>
                    <li>A bit of image and video processing using OpenCV</li>
                    <li>Basics of stock market data fetching and displaying in a
                        Candlestick chart</li>
                    <li>Desktop application using tkinter</li>
                    <li>Deployment on Heroku</li>
                </ul>
            </p>
            <p>
                <h3>Education</h3>
                MSc Software Engineering and Management from <i>Linköpings University, Sweden</i>.
                <h5>Recent Educational Activities</h5>
                Scientific Computing with Python Certification (www.freecodecamp.org)<br />
                Python Mega Course: Build 10 Real World Application (www.udemy.com)<br />
                E-commerce web development with Django (www.udemy.com)<br />
            </p>
            <p>
                <h3>Publications</h3>
                <ul>
                    <li>
                        Automatic Assembler Generator for NoGAP - IEEE <br />
                        Ist author: Per Karlström,
                    </li>
                    <li>
                        Cycle Accurate Simulator Generator for NoGAP - IEEE <br />
                        Ist author: Per Karlström,
                    </li>
                </ul>
            </p>
            <div id="education">
                <h3>Experience</h3>
                1. Django-Python Developer Intern at "Ticketbutler Copenhagen" - 2018 <br />
                2. Java Software Developer at "Korgix" - 2014 <br />
                3. Java Developer Intern at "Simus-Systems GmbH" - 2012 <br />
            </div>
            <p>
                <h3>Languages</h3>
                1. Urdu - Native
                2. English - Professional Proficiency
                3. Danish - Fluent in spoken
                4. Punjabi - Fluent
            <pre class="tab"></pre>
            </p>
        </div>

    );
}

export default About
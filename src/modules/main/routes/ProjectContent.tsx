import eagle from "../../../assets/EagleScout1.webp"
import "../../../styles/components/project-banner.css"
import "../../../styles/components/project-timeline.css"
// reference this: https://www.kenan-flagler.unc.edu/about/history/

function ProjectContent() {
    return (
        <> 
            <section className="project-banner">
                <div className="project-banner__img-wrapper">
                    <img src={eagle} alt="Close up of an eagle scout woggle worn by a scout as they hold it"/>
                </div>
            </section>
            <section className="project__main" aria-label="Troop 227's Eagle Scout project timeline">
                <div className="project__content">
                    <h2>The Eagle Scouts of Troop 227</h2>
                    <p>
                        Achieving Eagle is a long and arduous task. Scouting is no doubt one of the greatest organizations in the
                        world to foster the ideals of citizenship. It is little wonder then that so many of our nation’s greatest leaders
                        had some of their earliest leadership experiences in scouting. The total development from boyhood to
                        manhood depends on physical, mental and moral growth expressed in the Scout Oath and Law.
                    </p>
                    <p>The Eagle Award is the highest honor awarded to a scout due to their efforts towards his fellow Troop members and his leaders. A scout
                        must earn 21 Merit Badges in various crafts and skills. Eleven of these badges are specifically required by
                        the Boy Scouts of America. An Eagle Candidate must hold offices of Leadership within the Troop.
                    </p>
                    <p>
                        Each Eagle Candidate also must plan and supervise an Eagle Service Project. An Eagle Candidate must
                        demonstrate a Scout’s abilities and willingness to exert his leadership in activities that are constructive and
                        worthwhile in the community. Since the recharter of Troop 227, we have produced 33 Eagle Scouts since 2003.
                    </p>
                </div>
                <div className="project-timeline">
                    <ol className="project__year-list">
                        <li className="project__year" aria-labelledby="2003-h">
                            <div className="project__year-content">
                                <h2 id="2003-h">2003</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Rusty Leonard</h3>
                                        <p>Refurbished a basketball court area in Switzer Park, Bargersville, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2005-h">
                            <div className="project__year-content">
                                <h2 id="2005-h">2005</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Bobby Leonard</h3>
                                        <p>Added playground equipment to Switzer Park, Bargersville, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2006-h">
                            <div className="project__year-content">
                                <h2  id="2006-h">2006</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Dalton Chin</h3>
                                        <p>Built an outdoor chapel at Praise Acres, including benches (pews), a podium, and a large cross.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Nick Leonard</h3>
                                        <p>Added a roof to Playground Equipment and a mulched trail at Switzer Park, Bargersville.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Paul Haney</h3>
                                        <p>Built a Marian Grotto at St. Rose of Lima Catholic Church in Franklin, IN.</p>                            
                                    </li>
                                    <li className="project__card">
                                        <h3>Taylor Woodward</h3>
                                        <p>Rebuilt donated bicycles for Lord's Locker in Trafalgar.  Taylor's project was awarded the District and Council projects of the year.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Michael Kurek</h3>
                                        <p>Built and equipped a Science Lab at St. Rose School School in Franklin, IN, in memory of his father.</p>                            
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2007-h">
                            <div className="project__year-content">
                                <h2  id="2007-h">2007</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Matt Byrne</h3>
                                        <p>Built firepits at Praise Acres camping area in Bargersville, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>John Bennett</h3>
                                        <p>Built a shelter, fireplace and chairs at Praise Acres camping area in Bargersville, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Brian Byrne</h3>
                                        <p>Built wooden toy cars for the Lord's Locker charity organization in Trafalgar, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2008-h">
                            <div className="project__year-content">
                                <h2 id="2008-h">2008</h2>
                                <ul className="project__project-list" >
                                    <li className="project__card">
                                        <h3>Kevin Riley</h3>
                                        <p>Assembled book bags filled with school supplies for Johnson County and St. Rose of Lima Schools</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Cody Magar</h3>
                                        <p>Rebuilt and painted shelter house at Hopewell Church in Bargersville, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2009-h">
                            <div className="project__year-content">
                                <h2 id="2009-h">2009</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Brady Aldridge</h3>
                                        <p>Built benches and picnic tables for St. Rose of Lima School, along with flower boxes and garden areas.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2010-h">
                            <div className="project__year-content">
                                <h2 id="2010-h">2010</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>James Brummett</h3>
                                        <p>Built St. Rose of Lima Church entry signs and concrete patio and kneelers for the Marian Grotto.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>William Roush</h3>
                                        <p>Renovated the playground ground and constructed a front sign (including a light system for messages) for St. Rose of Lima Catholic School in Franklin, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>William Torrance</h3>
                                        <p>Constructed a large perrenial garden at Windisch Park in Bargersville, IN, which included the construction of pergolas.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Drew Baker</h3>
                                        <p>Built a handicap ramp, removed a garage, and donated supplies to women's shelter in Shelbyville, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Brian Adams</h3>
                                        <p>Built picnic tables and benches for Windisch Park in Bargersville, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                            <li className="project__year" aria-labelledby="2012-h">
                                <div className="project__year-content">
                                <h2 id="2012-h">2012</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Glenn Kyle III</h3>
                                        <p>Renovated gardens used for science classes at Union Elementary School in Bargersville, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Ryan Long</h3>
                                        <p>Renovated a jet plane display and grounds at American Legion in Edinburg, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2014-h">
                            <div className="project__year-content">
                                <h2 id="2014-h">2014</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Caleb Brown</h3>
                                        <p>Made Christmas trees using tomato cages and donated garland, lights, and ornaments for the Lord's Locker in Trafalgar, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2016-h">
                            <div className="project__year-content">
                                <h2 id="2016-h">2016</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Christian Kyle</h3>
                                        <p>Added statue, memorial plaque, and plantings at Windisch Park in Bargersville, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Michael Moreno</h3>
                                        <p>Renovated gardens at Torrance Eagle Project at Windisch Park in Bargersville, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Travis Davison</h3>
                                        <p>Built a handicap ramp for St. Rose of Lima School modular building allowing school to meet ADA requirments.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2017-h">
                            <div className="project__year-content">
                                <h2 id="2017-h">2017</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Jacob McKinney</h3>
                                        <p>Renovated Scott Park near baseball diamonds in Franklin, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Austin Hicks</h3>
                                        <p>Renovated and landscaped at the American Legion in Franklin, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2019-h">
                            <div className="project__year-content">
                                <h2 id="2019-h">2019</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Seth Long</h3>
                                        <p>Built playground equipment, including gaga pit, at St. Rose of Lima School in Franklin, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2020-h">
                            <div className="project__year-content">
                                <h2 id="2020-h">2020</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Aiden Miller</h3>
                                        <p>Gathered care packages for the Wheeler Mission Women's Shelter in Indianapolis, IN.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Gaven Miller</h3>
                                        <p>Built Pre-School playground equipment at St. Rose of Lima Catholic School in Franklin, IN.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2022-h">
                            <div className="project__year-content">
                                <h2 id="2022-h">2022</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Alejandro Garnica</h3>
                                        <p>Created weekend meals and birthday gifts for patrons of the Interchurch Food Pantry of Johnson County.</p>
                                    </li>
                                    <li className="project__card">
                                        <h3>Joshua Stephan Miller</h3>
                                        <p>Helped Resources of Hope in Whiteland IN move their inventory to a new facility and built clothing shelves for their new location.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2023-h">
                            <div className="project__year-content">
                                <h2 id="2023-h">2023</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Damien Burke</h3>
                                        <p>Created Christmas Care Packages for the Franklin Senior Citizens Center, and planned and emceed a party for the seniors, at which the care packages were distributed.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="project__year" aria-labelledby="2024-h">
                            <div className="project__year-content">
                                <h2 id="2024-h">2024</h2>
                                <ul className="project__project-list">
                                    <li className="project__card">
                                        <h3>Braiddinn Plymate</h3>
                                        <p>Built a Covid-19 Memorial at Franklin IN Park, honoring emergency workers, first responders, and those who died during the COVID-19 epidemic.  The memorial included a timecapsule with letters and articles discussing life during the epidemic. Braiddinn's project was awarded the District and Council project of the year.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    )
}

export default ProjectContent
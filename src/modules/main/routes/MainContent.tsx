import project1 from '../../../assets/project1.jpg'
import project2 from '../../../assets/project2.jpg'
import project3 from '../../../assets/project3.jpg'
import group from '../../../assets/group.jpg'

import '../../../styles/global/App.css'
import '../../../styles/components/mainhero.css'

function MainContent() {
    return (
      <>
        <section className="home-hero" aria-label="Our Impact">
          <article className='home-hero__content'>
            <h1 className='home-hero__header'>The Scouts of Johnson County</h1>
            <p className='home-hero__typography'>Troop 227 extends the values of Scouting to the Johnson County area by providing youth an environment to have fun and foster growth. It has been active in the Johnson County area for over 60 years.</p>
          </article>
        </section>

        <section className='home-intro' aria-label="Be prepared">
          {/* This is copied from the offical BS site Make sure to change! */}
          <div className='container home-intro--all'>
            <h1>Be Prepared</h1>
              <div className='home-intro--content'>
                <div className='mission'>
                  <h2 className='home-intro--header'>Scout Mission</h2>
                  <p className='home-intro--p'>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.</p>
                </div>
                <div className='scout-law'>
                  <h2 className='home-intro--header'>Scout Law</h2>
                  <p className='home-intro--p'>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</p>
                </div>
                <div className='scout-oath'>
                  <h2 className='home-intro--header'>Scout Oath</h2>
                  <p className='home-intro--p'>“On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.”</p>  
                </div>
              </div>
              <div className='polaroid'>
                <img src={group} alt='A group photo of Troop 227 at a camp site'/>
              </div>
          </div>
        </section>

        <section className='home-impact' aria-label='making a difference'>
            <h1>Making a difference in the community</h1>
            <ul className='gallery responsive-grid' aria-label="community projects by troop 227">
              <li>
                <figure className='gallery-item' aria-labelledby='project-1'>
                  <img src={project1} alt="Troop 227 scout and adult leaders measuring dimensions of a children's playground"/>
                  <figcaption className='gallery-desc'>
                      <h3 id='project-1'>Project 1</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Mi sit amet mauris commodo quis. </p>
                      <a href='' className='gallery-button'>Read More</a>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className='gallery-item' aria-labelledby='project-2'>
                  <img src={project2} alt='Scout and his grandfather standing in front of food that was donated for his Eagle project'/>
                  <figcaption className='gallery-desc'>  
                      <h3 id='project-2'>Project 2</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Mi sit amet mauris commodo quis. </p>
                      <a href='' className='gallery-button'>Read More</a>
                  </figcaption >
                </figure>
              </li>
              <li>
                <figure className='gallery-item' aria-labelledby='project-3'>
                  <img src={project3} alt='Scout standing infront of clothing racks created for his Eagle project'/>
                  <figcaption className='gallery-desc'>
                      <h3 id='project-3'>Project 3</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Mi sit amet mauris commodo quis. </p>
                      <a href='' className='gallery-button'>Read More</a>
                  </figcaption>
                </figure>
              </li>
            </ul>
        </section>

      </>
    )
}

export default MainContent
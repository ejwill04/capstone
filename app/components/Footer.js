import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'

const tabHeaderStyle = () => {
  if (window.innerWidth < 600) {
    return '10px'
  } else {
    return '14px'
  }
}

const Footer = () => {
    return (
    <div id='footer'>
      <Tabs>
        <Tab className='footer-tab-header' label='What is Neumann?' style={{ fontSize: tabHeaderStyle() }}>
          <div className='tab'>
            <p className="copy-text-headline">Neumann allows Turing students and alumni to share and gather information about employers.
            Got a job? Add your company, tell everyone why it's so great, and share info on how to get a job there.
            Job seeker? Peruse companies where Turing alumni work and figure out how to work there.</p>

              <h3 className="copy-subtext">
                Select a state from the dropdown menu to begin your search! Log in to begin contributing!
              </h3>
          </div>
        </Tab>
        <Tab className='footer-tab-header' label='Who is Neumann?' style={{ fontSize: tabHeaderStyle() }}>
          <div className='tab'>
            <p className='copy-text-headline'>John von Neumann was a Hungarian-American mathematician who worked with Alan Turing to build the first stored-program computer.
            Neumann used Turing's idea of a single machine that can be used to compute any computable sequence.
            He is considered to be one of the true fathers of computing.</p>
          </div>
        </Tab>
        <Tab className='footer-tab-header' label='Who are we?' style={{ fontSize: tabHeaderStyle() }}>
          <div className='tab'>
            <div className='about-us-container'>
              <div className='member-name'>
                <a href='https://www.turing.io/alumni/gabi-procell' target='_blank'>
                <img
                className='team-github-pic' src='https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/gabrielle_procell_1024.jpg?itok=d4yChcTt'
                />
              </a>
                <p><a
                  href='https://www.turing.io/alumni/gabi-procell' className='team-member-name' target='_blank'>Gabi Procell</a></p>
              </div>
              <div className='member-name'>
                <a href='https://www.turing.io/alumni/elijah-williams' target='_blank'>
                <img
                className='team-github-pic' src='https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/Headshot_2.jpg?itok=aIK-3Hgy'
                />
                </a>
                <p><a
                  href='https://www.turing.io/alumni/elijah-williams' className='team-member-name' target='_blank'>Elijah Williams
                </a></p>
              </div>
              <div className='member-name'>
                <a href='https://www.turing.io/alumni/devin-beliveau' target='_blank'>
                <img
                className='team-github-pic' src='https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/IMG_2112%20%281%29.jpg?itok=VOY6RwGz'
                />
                </a>
                <p><a
                  href='https://www.turing.io/alumni/devin-beliveau' className='team-member-name' target='_blank'>Devin Beliveau</a></p>
              </div>
              <div className='member-name'>
                <a href='https://www.turing.io/alumni/bekah-lundy' target='_blank'><img
                className='team-github-pic' src='https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/Rebekah%20Lundy.jpg?itok=pxqR9NyJ'
                />
                </a>
                <p><a
                  href='https://www.turing.io/alumni/bekah-lundy' className='team-member-name' target='_blank'>Bekah Lundy</a></p>
              </div>
              <div className='member-name'>
                <a
                href='https://www.turing.io/alumni/annastasia-psitos' target='_blank'><img
                className='team-github-pic' src='https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/headshot%20%281%29.jpg?itok=OMn_qZas'
                />
                </a>
                <p><a
                href='https://www.turing.io/alumni/annastasia-psitos' className='team-member-name' target='_blank'>Annastasia Psitos</a></p>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
    );
  }

  export default Footer

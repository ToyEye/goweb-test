import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import contactsInfo from './contactsInfo';
import { TeamContainer, ListStyled } from './Team.styled';

const Contacts = () => {
  return (
    <TeamContainer>
      <p className="teamText">Who we are</p>
      <h2>Our Professional Team</h2>
      <p className="aboutTeam">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ListStyled>
        {contactsInfo &&
          contactsInfo.map(
            ({
              id,
              contactJpg,
              contactJpgx,
              contactWebp,
              contactWebpx,
              name,
              role,
            }) => (
              <li key={id} className="item">
                <article>
                  <div className="foto">
                    <picture>
                      <source
                        srcSet={`${contactWebp} 1x, ${contactWebpx} 2x`}
                      />
                      <source
                        srcSet={`${contactJpg} 1x, ${contactJpgx} 2x,`}
                        type="image/jpeg"
                      />
                      <img src={contactJpg} alt={name} />
                    </picture>
                    <ul className="iconList">
                      <li>
                        <a href="facebook.com">
                          <FaFacebook className="icon" />
                        </a>
                      </li>
                      <li>
                        <a href="twitter.com">
                          <BsTwitter className="icon" />
                        </a>
                      </li>
                      <li>
                        <a href="youtube.com">
                          <BsYoutube className="icon" />
                        </a>
                      </li>
                      <li>
                        <a href="linkedin.com">
                          <FaLinkedinIn className="icon" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p className="name">{name}</p>
                  <p className="role">{role}</p>
                </article>
              </li>
            )
          )}
      </ListStyled>
    </TeamContainer>
  );
};

export default Contacts;

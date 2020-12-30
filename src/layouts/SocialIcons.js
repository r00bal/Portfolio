import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Footer } from '../components'

export default function SocialIcons({ color = 'black' }) {
  return (
    <Footer.IconWrapper>
      <Footer.IconLink
        href="https://github.com/r00bal?tab=repositories"
        target="_blank"
        color={color}
        hoverColor="var(--green-color)"
      >
        <FontAwesomeIcon size="2x" icon={['fab', 'github']} title="github link" />
      </Footer.IconLink>
      <Footer.IconLink href="https://codepen.io/r00bal" target="_blank" color={color} hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon={['fab', 'codepen']} title="codepen link" />
      </Footer.IconLink>
      <Footer.IconLink
        href="https://www.linkedin.com/in/piotr-andrzejewski-422184125"
        target="_blank"
        color={color}
        hoverColor="var(--green-color)"
      >
        <FontAwesomeIcon size="2x" icon={['fab', 'linkedin-in']} title="linkedin link" />
      </Footer.IconLink>
      <Footer.IconLink href="mailto:frontendpit@gmail.com" color={color} hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon="paper-plane" title="send email" />
      </Footer.IconLink>
    </Footer.IconWrapper>
  )
}

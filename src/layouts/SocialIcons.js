import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Footer } from '../components'

export default function SocialIcons({ color = 'black' }) {
  return (
    <Footer.IconWrapper>
      <Footer.IconLink href="#" color={color} hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon={['fab', 'github']} title="github account for Peter" />
      </Footer.IconLink>
      <Footer.IconLink href="#" color={color} hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon={['fab', 'codepen']} title="codepen account for Peter" />
      </Footer.IconLink>
      <Footer.IconLink href="#" color={color} hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon={['fab', 'linkedin-in']} title="linkedin account for Peter" />
      </Footer.IconLink>
      <Footer.IconLink href="#" color={color} hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon="paper-plane" />
      </Footer.IconLink>
    </Footer.IconWrapper>
  )
}

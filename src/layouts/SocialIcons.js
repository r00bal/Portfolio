import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Footer } from '../components'

export default function SocialIcons() {
  return (
    <Footer.Box>
      <Footer.IconLink href="#" color="var(--blue-color)" hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon={['fab', 'github']} title="github account for Peter" />
      </Footer.IconLink>
      <Footer.IconLink href="#" color="var(--blue-color)" hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon={['fab', 'codepen']} title="codepen account for Peter" />
      </Footer.IconLink>
      <Footer.IconLink href="#" color="var(--blue-color)" hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon={['fab', 'linkedin-in']} title="linkedin account for Peter" />
      </Footer.IconLink>
      <Footer.IconLink href="#" color="var(--blue-color)" hoverColor="var(--green-color)">
        <FontAwesomeIcon size="2x" icon="paper-plane" />
      </Footer.IconLink>
    </Footer.Box>
  )
}

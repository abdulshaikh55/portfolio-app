import React from 'react'
import { ArrowBack } from '@mui/icons-material';
import './styles/Contact.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Contact = () => {
  return (
    <div className='contact'>
      <AnchorLink href='#main'>
        <ArrowBack className='arrow' />
      </AnchorLink>
    </div>
  )
}

export default Contact

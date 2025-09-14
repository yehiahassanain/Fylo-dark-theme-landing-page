import React, { useState } from 'react'
import FeatureBox from './FeatureBox'

const Feature = () => {
    const [items, setItems] = useState([
        {
            icon: 'icon-access-anywhere.svg',
            title: 'Acess your file anyway',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
        },
        {
            icon: 'icon-any-file.svg',
            title: 'Real time for any file Collection',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
        },
        {
            icon: 'icon-collaboration.svg',
            title: 'Real time Collection',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
        },
        {
            icon: 'icon-security.svg',
            title: 'Real time to security Collection',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
        },
    ])
  return (
    <section className='pb-[150px]'>
      <dev className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[865px] mx-auto max-w-full'>
            {items.map((item)=>(
                <FeatureBox
                  key={item.title} 
                  icon={item.icon} 
                  title={item.title} 
                  desc={item.desc}
                   />
            ))}
        </div>
      </dev>
    </section>
  )
}

export default Feature

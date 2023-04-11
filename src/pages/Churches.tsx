import React from 'react'
import { Icon } from '@iconify/react'

const Churches = () => {
  return (
    <section className='church'>
      <div className="flex">

        <h2 className="title">Onboarding</h2>
        <div className="btn__container">
          <button>
          <Icon icon="material-symbols:add-circle-rounded" className='icon'/>
            Add Church
          </button>
          <button>
          <Icon icon="material-symbols:add-circle-rounded" className='icon'/>
            Add Parish
          </button>
        </div>
      </div>
    </section>
  )
}

export default Churches
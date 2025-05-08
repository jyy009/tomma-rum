import React from 'react'

function Project({...project}) {
  return (
    <section>
      <div>
        <img src={project.source_url} alt={project.slug} />
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default Project

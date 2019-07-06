import React from 'react'
import RepoItem from './RepoItem.js'
function Repos({repos}) {
  return (
    <div className="panel">
      {repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)}
    </div>
    
  )
}

export default Repos

import AddCompanyForm from './AddCompanyForm'

import React from 'react'

const CompanyProfile = () => {
  return(
    <div className="companyprofile-container">
      <div className="information-container">
        <h1 className="profile-name">Name</h1>
        <h2 className="profile-industry">Industry</h2>
        <h2 className="profile-techstack">Tech Stack</h2>
        <h2 className="profile-alumni">Alumni</h2>
      </div>
      <button>Add Yourself</button>
      <AddCompanyForm />
    </div>
  )
}

export default CompanyProfile

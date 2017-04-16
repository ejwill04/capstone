import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  radioButton: {
    marginTop: 16,
  },
}

export default class AddCompanyPopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      cohort: '',
      company_id: '',
      email: '',
      industry: '',
      interviewQuestion: '',
      message: '',
      name: '',
      num_of_emp: 10,
      open: false,
      remote_ok: false,
      tech_stack: '',
      slack: '',
      state: '',
      value: 1,
      worksThereNow: false,
    }
  }

  postACompany() {
    let {name, industry, tech_stack, remote_ok, num_of_emp} = this.state
    let company = {
      name,
      industry,
      tech_stack,
      remote_ok,
      num_of_emp
    }
    fetch('http://localhost:3000/api/v1/companies',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        company
      ),
    })
      .then((response) => response.json())
      .then((company_id) => {
        this.postALocation(company_id)
        // this.getName()
        this.updateUser(company_id)
      })
  }

  postALocation(company_id) {
    console.log('psot locations', company_id)
    this.setState({ company_id: company_id})
    let { city, state } = this.state
    let location = {
      city,
      state,
      company_id
    }
    fetch('http://localhost:3000/api/v1/locations',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        location
      ),
    })
      .then((response) => response.json())
      .then((payload) => {
        this.props.newCompanyAdded(this.state.state)
      })
  }


  updateUser(company_id) {
    let { cohort, slack, email, remote_ok } = this.state
    let id = JSON.parse(localStorage.profile).identities[0].user_id

    let user = {
      cohort,
      slack,
      email,
      company_id,
      remote: remote_ok
    }
    fetch(`http://localhost:3000/api/v1/users/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(
        user
      ),
    })
      .then((response) => response.json())
      .then((user_id) => {
        this.postAReview(user_id)
        this.postAnInterviewQuestion(user_id)
      })
  }

  postAReview(user_id) {
    let { company_id, message } = this.state
    let review = {
      message,
      user_id,
      company_id
    }
    console.log('review', review)
    fetch('http://localhost:3000/api/v1/reviews',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(
          review
        ),
      })
      .then((response) => response.json())
      .then((payload) => console.log('post a review', payload))
  }

  postAnInterviewQuestion (user_id) {
    let { company_id, interviewQuestion } = this.state
    let interview_question = {
      message: interviewQuestion,
      user_id,
      company_id
    }
    console.log('interview_question', interview_question)
    fetch('http://localhost:3000/api/v1/interview_questions',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(
          interview_question
        ),
      })
      .then((response) => response.json())
      .then((payload) => console.log('post a interview_question', payload))
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleSubmit() {
    this.postACompany()
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={(e) => {
          this.handleSubmit()
          this.handleClose()}}
      />,
    ]

    return (
      <div className='company-btn-container'>
        <RaisedButton label="Add A Company"
                      className='add-company-btn'
                      backgroundColor='#00C2D2'
                      onTouchTap={() => this.handleOpen()} />
        <Dialog title="Add A Company"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={() => this.handleClose()}
                autoScrollBodyContent={true}>
            <TextField floatingLabelText="Company Name"
                       hintText="Ex:ABC Co."
                       onChange={(e) => this.setState({name: e.target.value})}></TextField>
            <TextField floatingLabelText="City"
                       hintText="Denver"
                       onChange={(e) => this.setState({city: e.target.value})}></TextField>
            <TextField floatingLabelText="State"
                       hintText="Colorado"
                       onChange={(e) => this.setState({state: e.target.value})}></TextField>
            <TextField floatingLabelText="Industry"
                       hintText="Roofing"
                       onChange={(e) => this.setState({industry: e.target.value})}></TextField>
            <DropDownMenu value={this.state.value}
                          onChange={this.handleChange}>
                       <MenuItem value={1}
                                 primaryText="10"
                                 onClick={(e) => this.setState({num_of_emp: 10, value: 1})}/>
                       <MenuItem value={2}
                                 primaryText="40"
                                 onClick={(e) => this.setState({num_of_emp: 40, value: 2})}/>
                       <MenuItem value={3}
                                 primaryText="100"
                                 onClick={(e) => this.setState({num_of_emp: 100, value: 3})}/>
                       <MenuItem value={4}
                                 primaryText="200"
                                 onClick={(e) => this.setState({num_of_emp: 200, value: 4})}/></DropDownMenu>
            <Toggle    label="I work remotely"
                       labelPosition="right"
                       style={styles.toggle}
                       onToggle={(e) => this.setState({ remote_ok: !this.state.remote_ok})}/>
            <TextField floatingLabelText="Tech Stack"
                       hintText="Java, React"
                       onChange={(e) => this.setState({tech_stack: e.target.value})}></TextField>
            <TextField floatingLabelText="Review"
                       hintText="We have TONS of fun."
                       onChange={(e) => this.setState({message: e.target.value})}></TextField>
            <TextField floatingLabelText="Interview Questions"
                       hintText="What is your greatest weakness?"
                       onChange={(e) => this.setState({interviewQuestion: e.target.value})}></TextField>
            <Toggle    label="I currently work here"
                       labelPosition="right"
                       style={styles.toggle}
                       onToggle={(e) => this.setState({ worksThereNow: !this.state.worksThereNow})}/>
            <TextField floatingLabelText="Slack handle"
                       hintText="@macDaddy"
                       onChange={(e) => this.setState({slack: e.target.value})}></TextField>
            <TextField floatingLabelText="cohort"
                       hintText="1610"
                       onChange={(e) => this.setState({cohort: e.target.value})}></TextField>
            <TextField floatingLabelText="Email Address"
                       hintText="macDaddy@daddymac.com"
                       onChange={(e) => this.setState({email: e.target.value})}></TextField>
        </Dialog>
      </div>
    )
  }
}

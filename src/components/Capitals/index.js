import {Component} from 'react'
import OptionItem from '../OptionItem'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({selectedCapital: event.target.value.toUpperCase()})
  }

  getCapitalCountry = () => {
    const {selectedCapital} = this.state
    const countrylist = countryAndCapitalsList.find(
      eachItem => eachItem.id === selectedCapital,
    )
    return countrylist
  }

  render() {
    const {selectedCapital} = this.state
    const listNew = this.getCapitalCountry(selectedCapital)
    const {country} = listNew

    return (
      <div className="app-container">
        <div className="question-container">
          <h1 className="question-heading">Countries And Capitals</h1>
          <select
            className="question-option"
            name="capitals"
            id="capitals"
            onChange={this.onChangeCapital}
          >
            {countryAndCapitalsList.map(eachItem => (
              <OptionItem
                optionItem={eachItem}
                key={eachItem.id}
                changeCountry={this.onChangeCapital}
              />
            ))}
          </select>
          <label htmlFor="capitals" className="label-text">
            is capital of which country?
          </label>
          <h1 className="answer">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

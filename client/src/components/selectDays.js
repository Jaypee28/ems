import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'day1', label: 'Monday' },
  { value: 'day2', label: 'Tuesday' },
  { value: 'day3', label: 'Wednesday' },
  { value: 'day4', label: 'Thursday' },
  { value: 'day5', label: 'Friday' }
];

class SelectDays extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti
      />
    );
  }
}

export default SelectDays;
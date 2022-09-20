import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'employee1', label: 'Sample Name' },
  { value: 'employee2', label: 'Sample Name' },
  { value: 'employee3', label: 'Sample Name' },
];

class SelectEmployee extends React.Component {
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
      />
    );
  }
}

export default SelectEmployee;
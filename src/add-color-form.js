import React, { Component} from 'react';

class AddColorForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    const {_title, _color} = this.refs;
    event.preventDefault();
    _title.value = '';
    _color.value = '';
    _title.focus();
  }
  render() {
    return (
      <form onSubmit={this.submit}>
          <input ref="_title"
                 type="text"
                 placeholder="color title .." required />
          <input ref="_color"
                 type="color" required/>
          <button>ADD</button>
      </form>
    )
  }
}
export default AddColorForm;

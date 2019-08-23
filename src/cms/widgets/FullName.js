import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import CMS from 'netlify-cms-app';

const fields = [
  {
    label: 'First Name',
    name: 'firstname',
    required: true,
  },
  {
    label: 'Middle Name',
    name: 'middlename',
    required: false,
  },
  {
    label: 'Last Name',
    name: 'lastname',
    required: true,
  },
];

class FullNameControl extends PureComponent {
  parseValue(value) {
    let parsedValue = {};
    try {
      parsedValue = JSON.parse(value);
    } catch (error) {
      console.warn(error);
    }

    return parsedValue;
  }

  getValues() {
    const parsedValue = this.parseValue(this.props.value);
    return fields.reduce((values, currentValue) => {
      values[currentValue.name] = _.get(parsedValue, currentValue.name) || '';
      return values;
    }, {});
  }

  handleChange(value, name) {
    const newValues = this.getValues();
    newValues[name] = value;
    this.props.onChange(JSON.stringify(newValues));
  }

  // Need to be arrow function instead of class method to bind 'this'
  isValid = () => {
    const values = this.getValues();
    const isAllEmpty = Object.keys(values).reduce((isAllEmpty, key) => {
      if (values[key] === '') isAllEmpty = false;
      return isAllEmpty;
    }, true);
    if (isAllEmpty) return true;

    if (values.firstname !== '' && values.lastname !== '') return true;

    return { error: 'Please fill in both first name and last name.' };
  }

  render () {
    const {
      forID,
      classNameWrapper,
      classNameLabel,
      classNameWidget,
    } = this.props;
    const values = this.getValues();
    return (
      <div className={classNameWrapper} style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        {
          fields.map(({
            label,
            name,
            required,
          }) => {
            return (
              <div key={name}>
                <label
                  className={classNameLabel}
                  htmlFor={`${forID}${name}`}
                >
                  {label}{ required ? '' : ' (Optional)' }
                </label>
                <input
                  id={`${forID}${name}`}
                  type="text"
                  name={name}
                  value={values[name]}
                  required={required}
                  className={classNameWidget}
                  onChange={({ target: { value, name }}) => this.handleChange(value, name)}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}

FullNameControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string.isRequired,
  classNameWidget: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
};

class FullNamePreview extends PureComponent {
  render() {
    const StringPreview = CMS.getWidget('string').preview;
    return <StringPreview {...this.props} />;
  }
}

FullNamePreview.propTypes = {
  value: PropTypes.string,
};

export { FullNameControl, FullNamePreview };

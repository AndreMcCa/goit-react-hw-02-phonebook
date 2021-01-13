import PropTypes from 'prop-types';

export default function Input({label, type, name, value, onChange}) {
    return (
    <label> {label}
        <input type={type} name={name} value={value} onChange={onChange}/>
    </label>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
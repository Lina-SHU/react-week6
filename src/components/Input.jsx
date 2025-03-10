import PropTypes from 'prop-types';

const Input = ({ register, errors, id, labelText, type, placeholder, rules }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{labelText}</label>
            <input
                type={type}
                className={`form-control ${errors[id] && 'is-invalid'}`}
                id={id}
                placeholder={placeholder}
                {...register(id, rules)}
            />
            {
                errors[id] && (
                    <div className="invalid-feedback">{errors?.[id]?.message}</div>
                )
            }
        </div>
    )
};

Input.propTypes = {
    register: PropTypes.object,
    errors: PropTypes.object,
    id: PropTypes.string,
    labelText: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    rules: PropTypes.object,
};

export default Input;

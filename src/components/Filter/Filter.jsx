import style from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onFilterChange }) => (
    <div>
        <label>
            Find contacts by name
            <input
                type="text"
                className={style.filterInput}
                value={value}
                onChange={onFilterChange}
            />
        </label>
    </div>
);

Filter.propTypes = {
    value: PropTypes.string,
    onFilterChange: PropTypes.func,
};

export default Filter;

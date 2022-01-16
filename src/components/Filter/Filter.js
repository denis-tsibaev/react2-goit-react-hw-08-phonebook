import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';
export default function Filter({ filter, onFindName }) {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    Find contact by name
                </InputGroup.Text>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onFindName}
                />
            </InputGroup>
        </>
    );
}

Filter.propTypes = {
    filter: PropTypes.string,
};

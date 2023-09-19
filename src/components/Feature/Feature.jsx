import PropTypes from 'prop-types';
import { HiCheckCircle } from 'react-icons/hi';
const Feature = ({feature}) => {
    return (
        <div>
            <p className='border border-black mb-3 p-2 rounded-sm flex items-center gap-3'> <HiCheckCircle className='text-[#F004B8] text-2xl'></HiCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
};

export default Feature;
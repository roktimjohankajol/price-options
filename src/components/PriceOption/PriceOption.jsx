import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-red-100 p-8 rounded-md text-center space-y-5 flex flex-col'>
            <p className='text-3xl py-5 rounded-md text-white bg-secondary'><span className='text-5xl'>{price}</span> <span>/Month</span></p>
            <p className='text-3xl'>{name}</p>
            <p className='flex-grow'>
                {
                    features.map( (feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </p>
            <button className='btn btn-secondary'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}
export default PriceOption;
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>
                {
                    features.map( (feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </p>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}
export default PriceOption;
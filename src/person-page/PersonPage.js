import './PersonPage.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import PersonImage from '../components/PersonImage';
import Button from '../components/Button';

function PersonPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { state } = location;
    const { person } = state;

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="person-page">
            <div className="person-details">
                <PersonImage person={person} size="large" />

                <div className="person-firstName">{person.name.first}</div>
                <div className="person-age">{person.dob.age} years old</div>
            </div>

            <div className="actions">
                <Button onClick={handleGoBack}>GO BACK</Button>
            </div>
        </div>
    );
}

export default PersonPage;

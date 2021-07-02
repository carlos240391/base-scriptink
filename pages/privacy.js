import LayoutPage from '../components/layout/layout-page';
import PrivacyContent from '../components/sections/privacy/privacy';

const Privacy = (props) => {
    return ( 
        <>
        <LayoutPage {...props}>
            <PrivacyContent {...props}/>
        </LayoutPage>
        </>
     );
}
 
export default Privacy;
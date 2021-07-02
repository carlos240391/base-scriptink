import LayoutPage from '../components/layout/layout-page';
import PrivacyContent from '../components/sections/privacy/privacy';
import TermsComp from '../components/sections/privacy/terms_comp';

const Terms = (props) => {
    return ( 
        <>
        <LayoutPage {...props}>
            <TermsComp {...props}/>
        </LayoutPage>
        </>
     );
}
 
export default Terms;
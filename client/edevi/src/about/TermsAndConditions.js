import { Divider } from "@material-ui/core";
import privacyPolicy from '../docs/eDevi_Web_T_C_Privacy_Policy.pdf'
import refundPolicy from '../docs/eDevi_Web_T_C_Refund_Policy.pdf'
import termsOfService from '../docs/eDevi_Web_T_C_Terms_of_Service.pdf'

const docMap = {
  privacyPolicyDoc: privacyPolicy,
  refundPolicyDoc: refundPolicy,
  termsOfServiceDoc: termsOfService
}

function TermsAndConditions() {

  function redirectDoc (docName) {
    window.open(docMap[docName]);
  }

  return (
    <div className="TermsAndConditions">
      <div className='TermsTitle'> Terms and conditions </div>
      <Divider />
      <div className='moduleSection' onClick={()=>{redirectDoc('privacyPolicyDoc')}}>  Privacy Policy </div>
      <div className='moduleSection' onClick={()=>{redirectDoc('refundPolicyDoc')}}>  Terms of Service </div>
      <div className='moduleSection' onClick={()=>{redirectDoc('termsOfServiceDoc')}}>  Refund Policy </div>
    </div>
  );

}


export default TermsAndConditions;
import { Divider } from "@material-ui/core";


function TemporaryPaymentView(props) {
    return (
        <div className='TempRedirect'>
             <div className='title'>Bank Details</div>
             <Divider />
                Thank you for bridging the gap! Do visit our social media handles for updates on how your contribution made a difference
            <div>
            #virtualyyours #edevi
            </div>
            <div className='BankDetails'>Name     : Anandana Kapur <br/>
                A/c no.   : 00881140171609 <br/>
                Bank      : HDFC Bank Ltd. <br/>
                IFSC Code no. : HDFC0000088</div>
        </div>
    )
}


export default TemporaryPaymentView;
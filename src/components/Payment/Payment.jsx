import Image from "next/image";
import Marquee from "react-fast-marquee";

const Payment = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        <Marquee>
      <Image
        src="https://i.ibb.co/WkfFwjb/PayPal.png
"
        alt="paypal"
        width={120}
        height={120}
      />
      <Image
        src="https://i.ibb.co/W0qTbYx/Amazon-Pay.png
"
        alt="paypal"
        width={120}
        height={120}
      />
      <Image
        src="https://i.ibb.co/XXSHwhL/Google-Pay.png

"
        alt="paypal"
        width={120}
        height={120}
      />
      <Image
        src="https://i.ibb.co/qsSTVLj/Facebook-Pay.png
"
        alt="paypal"
        width={120}
        height={120}
      />
      <Image
        src="https://i.ibb.co/f0z1LjG/Mastercard.png

"
        alt="paypal"
        width={120}
        height={120}
      />
      <Image
        src="https://i.ibb.co/tpxQnq1/Stripe.png
"
        alt="paypal"
        width={120}
        height={120}
      />
      <Image
        src="https://i.ibb.co/NtpGDCk/ApplePay.png
"
        alt="paypal"
        width={120}
        height={120}
      />
    </Marquee>
    </div>
    
  );
};

export default Payment;

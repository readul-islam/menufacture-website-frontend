import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ payProduct }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errors, setErros] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId  ,setTransactionId ] = useState("");
  const { total,email ,_id} = payProduct;
// console.log(payProduct);

  useEffect(() => {
    const payment = async () => {
     if(total){
       
      const { data } = await axios.post("http://localhost:5000/payment", {
        total,
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
     if(data.clientSecret){
       
    
      setClientSecret(data?.clientSecret)
     }
     }

     
    };
    payment();
    
  }, [total]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErros(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErros('')
    }
    // ----confirm payment
    const {paymentIntent, payError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      },
    );
    if(payError){
      setErros(payError?.message)
    }
    else{
      toast.success('Congrats!, Your payment is completed',{id:1})
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent);
     if(paymentIntent.id){
      const {data}= await axios.patch(`http://localhost:5000/order/${_id}`,{
        email: email, transactionId: paymentIntent.id
      }) 
     }
     
      setErros('')
    }
  };
console.log(transactionId);
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {errors ? (
        <small className="text-red-400 block mt-2">{errors}</small>
      ) : (
        ""
      )}
      <button
        className="btn btn-warning px-8 mt-6"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;

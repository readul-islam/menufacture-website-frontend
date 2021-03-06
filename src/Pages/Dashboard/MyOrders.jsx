import { useQuery } from "react-query";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Loding/Loading";
import MyOrder from "./MyOrder";
import { useAuthState } from 'react-firebase-hooks/auth';

const MyOrders = () => {
 const [user] = useAuthState(auth)
 const email = user.email
 
  const { isLoading, error, data:myOrders, refetch } = useQuery('order', () =>
    fetch(`http://localhost:5000/order/${email}`,{
      
      
    }).then((res) => res.json())
  );
  if(isLoading){
      return <Loading/>
  }
//  
  return (
    <div>
      <p className="text-4xl text-secondary font-bold pt-6">MY ORDERS</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {myOrders.map(order => <MyOrder refetch={refetch} key={ order._id} order={ order } />)}
      </div>
    </div>
  );
};

export default MyOrders;

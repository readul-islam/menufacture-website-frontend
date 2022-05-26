

import { useQuery } from 'react-query';
import Loading from '../Loding/Loading';
import ManageAllproduct from './ManageAllproduct';

const ManageAllProducts = () => {
    // const [products, setProducts] = useState([])
    // useEffect(() =>{
    //   const dataLoad = async() => {
    //       const {data} = await axios.get('http://localhost:5000/products');
    //       setProducts(data);
    //       // console.log(data);
    //   }
    //   dataLoad()
    // },[])
    const { isLoading, error, data:products, refetch } = useQuery('order', () =>
    fetch(`http://localhost:5000/products`,{
      
      
    }).then((res) => res.json())
  );
  if(isLoading){
      return <Loading/>
  }
    return (
        <section className=' py-14 px-4 bg-zinc-800'>
            <div className='text-center mb-8 '>
                <h1 className='text-5xl font-bold text-[#B65C2F]'>Manage All Products</h1>
                
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-w-lg lg:px-4 xl:pl-24'>
         {products.map(product =>  <ManageAllproduct refetch={refetch} key={product._id} product={product} />)}
        </div>
        </section>
    );
};

export default ManageAllProducts;
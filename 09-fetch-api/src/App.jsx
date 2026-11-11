import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const handleFetch = async () => {
    try {

      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      console.log(data.products);
      setList(data.products);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((product,index)=>(
                    <tr>
                      <td>{index+1}</td>
                      <td><img src={product.thumbnail} style={{height:'50px'}}/></td>
                      <td>{product.title}</td>
                      <td>$ {product.price}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
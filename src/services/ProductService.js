import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response); 
        return response;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        throw error;
      });
  }
  getProductById(id) {
    return axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response); 
        return response;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        throw error;
      });
  }
}

/*export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:5002/api/Products/GetAll")
    }



    getProductById(productId) {
        return axios.get(`http://localhost:5002/api/Products/GetById/${productId}`)
          .then((response) => {
            console.log(response); 
            return response;
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
            throw error;
          });
      }
}*/

import { create } from 'zustand'  // Import the create function from the zustand library.

export const useProductStore = create((set) => ({ // Create a store using the create function.
    products:[],  // Initialize the products array.
    setProducts: (products) => set({products}),  
    createProduct: async (newProduct) => {         // Create a createProduct function that takes a newProduct object as an argument.
        if (!newProduct.name || !newProduct.price || !newProduct.image) {  // Check if the newProduct object has all the required fields.
            return { success: false, message: "Please fill in all fields" }  // Return an error message if the newProduct object is missing any fields.
        }
        const res = await fetch('/api/products', {  //Send a POST request to the /api/products endpoint with the newProduct object as the body.
            method: 'POST',    // Set the method of the request to POST.
            headers: {
                'Content-Type': 'application/json', // Set the Content-Type header to application/json.
            },
            body: JSON.stringify(newProduct), // Convert the newProduct object to a JSON string and set it as the body of the request.
        })
        const data = await res.json(); // Parse the response body as JSON.
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "Product created successfully" }; // Return a success message if the product was created successfully. 
    },

    fetchProducts: async () => {   // Create a fetchProducts function that fetches the products from the server.
        const res = await fetch("/api/products");  // Send a GET request to the /api/products endpoint.
        const data = await res.json();  // Parse the response body as JSON.
        set({products:data.data});  // Update the products array in the store with the fetched products.
    }
}));
  
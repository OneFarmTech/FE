class ShoppingCart {
  constructor(userId) {
    this.userId = userId;
      this.cartItems = JSON.parse(localStorage.getItem(`cartItems_${this.userId}`)) || [];
      this.updateLocalStorage();
    }
   
    addToCart(item) {
      const existingItemIndex = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    
      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update quantity and total amount
        this.cartItems[existingItemIndex].quantity += 1;
        this.cartItems[existingItemIndex].total = this.cartItems[existingItemIndex].quantity * this.cartItems[existingItemIndex].cost;

      } else {
        // Item doesn't exist, add it to the cart
        const newItem = {
          id: item.id,
          image: item.images[0].image,
          name: item.name,
          cost: item.cost,
          quantity: 1,
          total: item.cost,
        };
        this.cartItems.push(newItem);
      }
  
      this.updateLocalStorage();
    }
  
    removeFromCart(itemId) {
      const itemIndex = this.cartItems.findIndex((item) => item.id === itemId);
  
      if (itemIndex !== -1) {
        // Decrease quantity and update total amount
        this.cartItems[itemIndex].quantity -= 1;
        this.cartItems[itemIndex].total -= this.cartItems[itemIndex].cost;
  
        // Remove item if quantity becomes 0
        if (this.cartItems[itemIndex].quantity === 0) {
          this.cartItems.splice(itemIndex, 1);
        }
  
        this.updateLocalStorage();
      }
    }
  
    emptyCart() {
      this.cartItems = [];
      this.updateLocalStorage();
    }
  
    getCartItems() {
      return this.cartItems;
    }
  
    getTotalAmount() {
       return this.cartItems.reduce((total, item) => total + (parseFloat(item.total) || 0), 0);
    }
  
    updateLocalStorage() {
      localStorage.setItem(`cartItems_${this.userId}`, JSON.stringify(this.cartItems));
    }
  }
  
  export default ShoppingCart;
  
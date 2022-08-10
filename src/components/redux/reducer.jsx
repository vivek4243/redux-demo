import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_PRODUCTS
} from "./types"


const INITIAL_STATE = {
  products: [
    {
      img: "https://rukminim1.flixcart.com/image/880/1056/kk2wl8w0/shoe/q/a/1/12189600-43-jack-jones-alloy-original-imafzg7cfjwacddz.jpeg?q=50",
      id: "01",
      name: "JACK & JONES",
      description: "JFWGEORGE KNIT LACE UP Sneakers For Men  (Grey)",
      price: 799,
      dealer: "HSAtlastradeFashion"
    },
    {
      img: "https://rukminim1.flixcart.com/image/880/1056/xif0q/shoe/u/z/v/-original-imagfyyv77zpxb6h-bb.jpeg?q=50",
      id: "02",
      name: "RED TAPE",
      description: "Walking Shoes For Men  (Black)",
      price: 1548,
      dealer: "sdhbmkvskdl"
    },
    {
      img: "https://rukminim1.flixcart.com/image/880/1056/l45xea80/sandal/g/n/l/-original-imagf4fmyzmkcxcf.jpeg?q=50",
      id: "03",
      name: "CROCS",
      description: "Men Bayaband Navy Sandal",
      price: 1747,
      dealer: "HSAtlastradeFashion"
    },
    {
      img: "https://rukminim1.flixcart.com/image/880/1056/l4ei1e80/slipper-flip-flop/x/4/l/-original-imagfb9xqvmfhyyd.jpeg?q=50",
      id: "04",
      name: "CROCS",
      description: "Bayaband Flip Flip Flops  (Black, White 9)",
      price: 1497,
      dealer: "sdhbmkvskdl"
    },
    {
      img: "https://rukminim1.flixcart.com/image/880/1056/xif0q/shoe/3/w/w/11-rso199-red-tape-black-original-imagbgdm9swurnea-bb.jpeg?q=50",
      id: "05",
      name: "RED TAPE",
      description: "Walking Shoes For Men  (Black)",
      price: 550,
      dealer: "sdhbmkvxddskdl"
    }],
  cart: [],
  currentItem: null,
}



const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id)
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false)
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      }
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
      }
    case LOAD_PRODUCTS:
      return {
        ...state,
        currentItem: action.payload
      }
    default:
      return state
  }
}

export default shopReducer;
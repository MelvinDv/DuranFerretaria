const state = {
  cart: [],
};

const mutations = {
  SET_CART(state, cart) {
    state.cart = cart;
  },
  ADD_PRODUCT(state, product) {
    let productExist = state.cart.find((item) => item.id === product.id);

    if (productExist) {
      if (productExist.quantity > productExist.selected) {
        productExist.selected += 1;
      }
    } else {
      state.cart.push({ ...product, selected: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  DELETE_PRODUCT(state, productId) {
    state.cart = state.cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  REDUCE_PRODUCT(state, productId) {
    let productExist = state.cart.find((item) => item.id === productId);

    if (productExist.selected > 1) {
      productExist.selected -= 1;
    }

    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  CLEAN_CART(state) {
    state.cart = [];

    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
};

const actions = {
  initCart({ commit }) {
    const saveCart = JSON.parse(localStorage.getItem("cart")) || [];
    commit("SET_CART", saveCart);
  },
  addProduct({ commit }, product) {
    commit("ADD_PRODUCT", product);
  },
  deleteProduct({ commit }, productId) {
    commit("DELETE_PRODUCT", productId);
  },
  reduceProduct({ commit }, productId) {
    commit("REDUCE_PRODUCT", productId);
  },
  cleanCart({ commit }) {
    commit("CLEAN_CART");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

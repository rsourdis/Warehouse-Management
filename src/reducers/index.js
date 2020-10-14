import produce from 'immer';

const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        searching: state.inventario.map((item) => item.floors.map((floor) => floor.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()) || product.codes[2].toLowerCase().includes(action.payload.toLowerCase()) || product.codes[1].toLowerCase().includes(action.payload.toLowerCase())))) ||
        [],
      };
    case 'IS_SEARCHING':
      return {
        ...state,
        isSearching: action.payload,
      };
    case 'FILTER_CATEGORIE':
      return {
        ...state,
        filter: state.originals.filter((items) => items.categorie === action.payload) ||
        [],
      };
    case 'SERVICE_DETAIL':
      return {
        ...state,
        serviceDetail: state.originals.filter((items) => items.id === Number(action.payload)) || [],
      };
    case 'RESERVA_DETAIL':
      return {
        ...state,
        reservaDetail: state.reservas.filter((items) => items.id === Number(action.payload)) || [],
      };
    case 'AGREGAR_SERVICIO':
      return {
        ...state,
        originals: [...state.originals, action.payload],
      };
    case 'RESERVAR_SERVICIO':
      return {
        ...state,
        reservas: [...state.reservas, action.payload],
      };
    case 'CARGA_PRODUCTOS':
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case 'AGREGAR_PRODUCTO':
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case 'SET_ITEMPICKEDSTATE':
      return produce(state, (draftState) => {
        draftState.lists[action.indexOflist].items[action.indexOfItem].picked = true;
      });
    case 'SET_LISTSTATE':
      return produce(state, (draftState) => {
        draftState.lists[action.indexOflist].status = 'closed';
      });
    case 'SET_CARGARINVENTARIO':
      return {
        ...state,
        inventario: action.inventario,
      };
    case 'SET_CARGARACTIONS':
      return {
        ...state,
        logs: action.logs,
      };
    case 'SET_CARGARLISTS':
      return {
        ...state,
        lists: action.lists,
      };
    case 'SET_CARGARORDER':
      return {
        ...state,
        packingorder: action.order,
      };
    case 'SET_FLOORNAME':
      return {
        ...state,
        floorname: action.payload,
      };
    case 'SET_BININDEX':
      return {
        ...state,
        binindex: action.payload,
      };
    case 'SET_FLOORINDEX':
      return {
        ...state,
        floorindex: action.payload,
      };
    case 'SET_NEWQTYINVENTORY':
      return produce(state, (draftState) => {
        draftState.inventario[action.binindex].floors[action.floorindex][action.itemindex].quantity = action.newqty;
      });
    case 'SET_BINPICKER':
      return produce(state, (draftState) => {
        draftState.binpicker.name = action.name;
        draftState.binpicker.index = action.index;
      });
    case 'SET_FLOORPICKER':
      return produce(state, (draftState) => {
        draftState.floorpicker.name = action.name;
        draftState.floorpicker.index = action.index;
      });
    case 'SET_SHOWBINPICKER':
      return {
        ...state,
        showbinpicker: action.payload,
      };
    case 'SET_SHOWFLOORPICKER':
      return {
        ...state,
        showfloorpicker: action.payload,
      };
    case 'SET_MOVEMENT':
      return produce(state, (draftState) => {
        draftState.inventario[action.binindex].floors[action.floorindex][action.itemIndex].quantity = action.newqty;
        draftState.inventario[action.binpicker].floors[action.floorpicker].push(action.itemMoved);
      });
    case 'SET_MOVEMENTEXISTE':
      return produce(state, (draftState) => {
        draftState.inventario[action.binindex].floors[action.floorindex][action.itemIndex].quantity = action.newqty;
        draftState.inventario[action.binpicker].floors[action.floorpicker][action.existeIndex].quantity = Number(draftState.inventario[action.binpicker].floors[action.floorpicker][action.existeIndex].quantity) + Number(action.qtyMoved);
      });
    case 'SET_VERIFYCERO':
      return produce(state, (draftState) => {
        draftState.inventario[action.binindex].floors[action.floorindex].splice(itemIndex, 1);
      });
    case 'RESET_PICKER':
      return produce(state, (draftState) => {
        draftState.binpicker.name = action.payload;
        draftState.binpicker.index = action.payload;
        draftState.floorpicker.name = action.payload;
        draftState.floorpicker.index = action.payload;
      });
    default:
      return state;
  }

};

export default reducer;

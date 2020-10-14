import axios from 'axios';

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const searchRequest = (payload) => ({
  type: 'SEARCH_REQUEST',
  payload,
});
export const isSearching = (payload) => ({
  type: 'IS_SEARCHING',
  payload,
});
export const filterCategorie = (payload) => ({
  type: 'FILTER_CATEGORIE',
  payload,
});
export const serviceDetailReq = (payload) => ({
  type: 'SERVICE_DETAIL',
  payload,
});
export const reservaDetailReq = (payload) => ({
  type: 'RESERVA_DETAIL',
  payload,
});
export const agregarServicio = (payload) => ({
  type: 'AGREGAR_SERVICIO',
  payload,
});
export const reservarServicio = (payload) => ({
  type: 'RESERVAR_SERVICIO',
  payload,
});
export const cargaProductos = (payload) => ({
  type: 'CARGA_PRODUCTOS',
  payload,
});
export const agregarProducto = (payload) => ({
  type: 'AGREGAR_PRODUCTO',
  payload,
});
export const setItemPickedState = (indexOflist, indexOfItem) => ({
  type: 'SET_ITEMPICKEDSTATE',
  indexOflist,
  indexOfItem,
});
export const setListSate = (indexOflist) => ({
  type: 'SET_LISTSTATE',
  indexOflist,
});
export const setCargarInventario = (inventario) => ({
  type: 'SET_CARGARINVENTARIO',
  inventario,
});
export const setCargarActions = (logs) => ({
  type: 'SET_CARGARACTIONS',
  logs,
});
export const setCargarLists = (lists) => ({
  type: 'SET_CARGARLISTS',
  lists,
});
export const setCargarOrder = (order) => ({
  type: 'SET_CARGARORDER',
  order,
});
export const setFloorName = (payload) => ({
  type: 'SET_FLOORNAME',
  payload,
});
export const setBinIndex = (payload) => ({
  type: 'SET_BININDEX',
  payload,
});
export const setFloorIndex = (payload) => ({
  type: 'SET_FLOORINDEX',
  payload,
});
export const setNewQtyInventory = (binindex, floorindex, itemindex, newqty) => ({
  type: 'SET_NEWQTYINVENTORY',
  binindex,
  floorindex,
  itemindex,
  newqty,
});
export const setBinPicker = (name, index) => ({
  type: 'SET_BINPICKER',
  name,
  index,
});
export const setFloorPicker = (name, index) => ({
  type: 'SET_FLOORPICKER',
  name,
  index,
});
export const setShowBinPicker = (payload) => ({
  type: 'SET_SHOWBINPICKER',
  payload,
});
export const setShowFloorPicker = (payload) => ({
  type: 'SET_SHOWFLOORPICKER',
  payload,
});
export const resetpicker = (payload) => ({
  type: 'RESET_PICKER',
  payload,
});
export const setMovement = (binindex, floorindex, itemIndex, newqty, binpicker, floorpicker, itemMoved) => ({
  type: 'SET_MOVEMENT',
  binindex,
  floorindex,
  itemIndex,
  newqty,
  binpicker,
  floorpicker,
  itemMoved,
});
export const setMovementExiste = (binindex, floorindex, itemIndex, newqty, binpicker, floorpicker, existeIndex, qtyMoved) => ({
  type: 'SET_MOVEMENTEXISTE',
  binindex,
  floorindex,
  itemIndex,
  newqty,
  binpicker,
  floorpicker,
  existeIndex,
  qtyMoved,
});
export const setVerifyCero = (binindex, floorindex, itemIndex) => ({
  type: 'SET_VERIFYCERO',
  binindex,
  floorindex,
  itemIndex,
});

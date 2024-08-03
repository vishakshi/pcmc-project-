import { jwtDecode } from "jwt-decode"

export const getDecodedToken = () => {
 return jwtDecode(sessionStorage.getItem('@authToken'))
}
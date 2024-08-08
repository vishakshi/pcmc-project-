import { jwtDecode } from "jwt-decode"

export const getDecodedToken = () => {
 return jwtDecode(sessionStorage.getItem('@authToken'))
}

export function pxToRem(value) {
    return `${value / 16}rem`;
  }
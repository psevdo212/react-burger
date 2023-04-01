import { ICookieProps } from "./interfaces";

function setCookie(
  name: string,
  value: string | number | boolean,
  props: ICookieProps = {}
): void {
  props = {
    path: "/",
    ...props,
  };
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = d;
  }
  if (exp instanceof Date && exp) {
    exp = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie: string = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

function getCookie(name: string): string {
  const matches: RegExpMatchArray | null = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
      // eslint-disable-next-line
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : '';
}

function deleteCookie(name: string) {
  setCookie(name, "", {
    expires: -1,
  });
}

export { setCookie, getCookie, deleteCookie };

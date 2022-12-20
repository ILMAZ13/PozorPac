function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "hr.*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru") ||
      shWxpMatch(host, "chls.pro")
  ) return "PROXY 192.168.1.109:8888";
  return "DIRECT";
}

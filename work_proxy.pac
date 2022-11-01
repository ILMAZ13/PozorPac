function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "hr.*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")
  ) return "PROXY 172.18.34.126:8888";
  return "DIRECT";
}

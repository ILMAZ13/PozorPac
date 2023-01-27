function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "hr.*tinkoff*.ru") ||
      shExpMatch(host, "access.tinkoff.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")
  ) return "PROXY 172.23.203.176:8888";
  return "DIRECT";
}

function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru") ||
      shExpMatch(host, "*.vetrf.ru")
  ) return "PROXY 192.168.1.35:8888";
  return "DIRECT";
}

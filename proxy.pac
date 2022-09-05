function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")
  ) return "PROXY macbook-igumerov.local:8888";
  return "DIRECT";
}

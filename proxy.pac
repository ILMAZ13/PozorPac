function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")   
  ) return "PROXY 192.168.0.102:8888";
  if (shExpMatch(url, "https://yandex.ru/")) return "PROXY 0.0.0.0:8080";
  return "DIRECT";
}

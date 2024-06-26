function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "hr.tinkoff.ru") ||
      shExpMatch(host, "access.tinkoff.ru") ||
      shExpMatch(host, "api-test*.tinkoff.ru") ||
      shExpMatch(host, "test*.t-bank*") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")
  ) return "PROXY 192.168.1.109:8888";
  return "DIRECT";
}

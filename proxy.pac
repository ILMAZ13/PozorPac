function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") || shExpMatch(host, "qa*.tinkoff.ru")) return "PROXY 192.168.1.35:8888"; "DIRECT";
  return "DIRECT";
}

function FindProxyForURL(url, host) {
  if (shExpMatch(host, "qa*.tcsbank.ru") || shExpMatch(host, "qa*.tinkoff.ru")) return "PROXY 192.168.1.35:8888"; "DIRECT";
  if (shExpMatch(host, "yandex.ru")) return "PROXY 192.168.1.35:8888";
  return "DIRECT";
}

function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "hr.*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")
  ) return "PROXY 192.168.0.108:8888";
//  if (shExpMatch(host, "*twitter.com") ||
//      shExpMatch(host, "*twimg.com") ||
//      shExpMatch(host, "(www.)?t.co") ||
//      shExpMatch(host, "*facebook.com") ||
//      shExpMatch(host, "*fbcdn.net") ||
//      shExpMatch(host, "*instagram.com") ||
//      shExpMatch(host, "*cdninstagram.com") ||
//      shExpMatch(host, "(www.)?fb.com") ||
//      shExpMatch(host, "*messenger.com")
//  ) return "PROXY 192.168.0.105:8118";
  return "PROXY 192.168.0.108:8888" //"DIRECT";
}

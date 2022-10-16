function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "hr.*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")
  ) return "PROXY 192.168.0.108:8888";
      // inst
  if (//shExpMatch(host, "*twitter*") ||
      //shExpMatch(host, "*twimg*") ||
      //shExpMatch(host, "(www.)?t.co") ||
      //shExpMatch(host, "*facebook*") ||
      //shExpMatch(host, "*fbcdn*") ||
      //shExpMatch(host, "*instagram*") ||
      //shExpMatch(host, "(www.)?fb.com") ||
      //shExpMatch(host, "*messenger.com") ||
      // Torents
      shExpMatch(host, "*rutracker*") ||
      shExpMatch(host, "*pornolab*") ||
      // Streams
      shExpMatch(host, "*4h0y.gitlab.io") ||
      shExpMatch(host, "*udarnik.cc") ||
      shExpMatch(host, "*hdrezka.ag")
  ) return "PROXY 192.168.0.105:8118";
  return "DIRECT";
}

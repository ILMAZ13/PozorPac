const localProxy = "PROXY 192.168.1.35:8888";
const antizapretProxy = "HTTPS proxy-ssl.antizapret.prostovpn.org:3143; PROXY proxy-nossl.antizapret.prostovpn.org:29976; DIRECT";

const blockedList = ["redgifs.com"]

function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tcsbank.ru") ||
      shExpMatch(host, "(qa*|*qa).*tinkoff*.ru") ||
      shExpMatch(host, "(test*|*test).*tinkoff*.ru")
  ) return localProxy;
  if (blockedList.indexOf(host) != -1) return antizapretProxy;
  return "DIRECT";
}

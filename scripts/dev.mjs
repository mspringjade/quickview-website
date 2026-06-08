import { spawn } from 'node:child_process';
import os from 'node:os';

const VIRTUAL_ADAPTER = /docker|wsl|vmware|virtualbox|vethernet|hyper-v|loopback/i;

function getLocalIPv4() {
  const candidates = [];

  for (const [name, interfaces] of Object.entries(os.networkInterfaces())) {
    if (VIRTUAL_ADAPTER.test(name)) continue;

    for (const iface of interfaces ?? []) {
      if (iface.family !== 'IPv4' || iface.internal) continue;
      if (iface.address.startsWith('169.254.')) continue;

      const isWifi =
        /wi-?fi|wlan|wireless/i.test(name) || iface.address.startsWith('192.168.');
      candidates.push({ address: iface.address, isWifi, name });
    }
  }

  candidates.sort((a, b) => Number(b.isWifi) - Number(a.isWifi));
  return candidates[0]?.address ?? null;
}

const ip = getLocalIPv4();
const port = process.env.PORT ?? 3000;

console.log('\n  开发服务器启动中...\n');
if (ip) {
  console.log(`  📱 手机预览：http://${ip}:${port}`);
  console.log('     （请确保手机与电脑在同一 Wi-Fi 下）\n');
} else {
  console.log('  ⚠️  未检测到局域网 IP，请在本机用 ipconfig 查看后手动访问\n');
}

const child = spawn('npx', ['next', 'dev', '-H', '0.0.0.0', '-p', String(port)], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => process.exit(code ?? 0));

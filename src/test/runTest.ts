import * as path from 'path';
import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    // 测试工作空间的根路径
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    // 测试文件所在的路径
    const extensionTestsPath = path.resolve(__dirname, './index');

    // 运行测试
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
    });
  } catch (err) {
    console.error('Failed to run tests:', err);
    process.exit(1);
  }
}

main(); 
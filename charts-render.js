import * as echarts from 'echarts';
import 'echarts-gl';

// 确保在浏览器环境中使用全局的 echarts
const echartsLib = (typeof window !== 'undefined' && window.echarts) || echarts;

/**
 * 当页面加载完成时执行的主函数
 * 负责初始化和渲染所有 ECharts 图表
 */
function contentLoaded() {
  console.log('%c[ECharts Preview]', 'color: blue; font-weight: bold', '开始执行图表渲染流程...');
  
  // 设置3D图表的全局默认配置
  const threeDimensionalTheme = {
    grid3D: {
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'  // 纯白色，用于坐标轴线
        }
      },
      axisLabel: {
        textStyle: {
          color: '#E0E0E0'  // 浅灰白色，用于刻度标签
        }
      },
      splitLine: {
        lineStyle: {
          color: '#CCCCCC',  // 更浅的灰白色，用于网格线
          opacity: 0.6       // 适当降低网格线透明度
        }
      },
      axisPointer: {
        lineStyle: {
          color: '#00FFFF',  // 青色，用于鼠标悬停时的指示线
          opacity: 0.6       // 调整透明度让它不那么刺眼
        }
      }
    },
    xAxis3D: {
      axisLine: {
        lineStyle: { color: '#FFFFFF' }  // 与主轴线保持一致
      },
      axisLabel: {
        textStyle: { color: '#E0E0E0' }  // 与主刻度标签保持一致
      }
    },
    yAxis3D: {
      axisLine: {
        lineStyle: { color: '#FFFFFF' }
      },
      axisLabel: {
        textStyle: { color: '#E0E0E0' }
      }
    },
    zAxis3D: {
      axisLine: {
        lineStyle: { color: '#FFFFFF' }
      },
      axisLabel: {
        textStyle: { color: '#E0E0E0' }
      }
    }
  };

  // 获取所有带有 chartjs 类名的元素
  var chartElements = document.getElementsByClassName("chartjs");
  console.log('%c[ECharts Preview]', 'color: blue; font-weight: bold', `找到 ${chartElements.length} 个图表代码块`);

  // 存储需要进行替换的元素信息
  var changes = [];

  // 第一次遍历：收集所有图表信息
  console.log('开始收集图表信息...');
  for (let index = 0; index < chartElements.length; index++) {
    var element = chartElements.item(index);
    // 获取图表的配置数据（JSON 字符串）
    var source = element.textContent;
    console.log(`处理第 ${index + 1} 个图表，配置数据长度: ${source.length}`);

    // 保存需要替换的元素信息，同时保存配置数据
    changes.push({
      placeholder: element.parentElement.parentElement,
      chart: element,
      source: source  // 保存配置数据
    });
  }
  console.log(`成功收集 ${changes.length} 个图表信息`);

  // 第二次遍历：替换原始元素为 ECharts 容器并渲染
  console.log('开始创建 ECharts 容器并渲染...');
  for (let index = 0; index < changes.length; index++) {
    try {
      const element = changes[index];
      
      // 创建新的容器
      const container = document.createElement('div');
      container.style.width = '600px';
      container.style.height = '400px';
      container.className = 'echarts-chart';
      container.setAttribute('data-index', index.toString());
      
      // 替换原始元素
      element.placeholder.parentNode.replaceChild(container, element.placeholder);
      
      console.log(`初始化第 ${index + 1} 个 ECharts 实例`);
      
      // 解析配置数据
      var source = element.source.replace(
        /(['"])?([a-zA-Z0-9_]+)(['"])?:/g, 
        '"$2": '
      );
      var option = JSON.parse(source.trim());
      
      // 检查是否是3D图表
      const is3D = option.series?.some(series => 
        series.type?.includes('3D') || 
        option.grid3D || 
        option.xAxis3D || 
        option.yAxis3D || 
        option.zAxis3D
      );
      
      // 根据是否是3D图表选择渲染器
      var chart = echartsLib.init(container, 'dark', {
        renderer: is3D ? 'webgl' : 'canvas'
      });
      
      // 如果是3D图表，合并主题配置
      if (is3D) {
        option = echartsLib.util.merge(option, threeDimensionalTheme, true);
      }
      
      // 使用配置项设置并渲染图表
      chart.setOption(option);
      console.log(`第 ${index + 1} 个图表渲染完成, 使用${is3D ? 'WebGL' : 'Canvas'}渲染器`);

      // 存储图表实例
      container._echarts = chart;
    } catch (error) {
      console.error(`渲染第 ${index + 1} 个图表时出错:`, error);
    }
  }
  
  console.log('所有图表渲染完成！');
  
  // 开始观察文档变化
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true
  });
}

// 添加防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 监听内容变化的函数
function handleContentChanged() {
  console.log('%c[ECharts Preview]', 'color: blue; font-weight: bold', '检测到内容变化，等待DOM更新...');
  
  // 等待一个微任务周期，确保 DOM 已更新
  Promise.resolve().then(() => {
    // 获取所有现有的图表容器
    const containers = document.getElementsByClassName('echarts-chart');
    const chartElements = document.getElementsByClassName('chartjs');

    console.log(`当前图表容器数量: ${containers.length}, 图表代码块数量: ${chartElements.length}`);

    if (chartElements.length === 0) {
      console.log('没有找到图表代码块，跳过渲染');
      return;
    }

    // 销毁所有现有的图表实例
    Array.from(containers).forEach(container => {
      if (container._echarts) {
        container._echarts.dispose();
      }
    });

    // 重新渲染
    contentLoaded();
  });
}

const debouncedHandleContentChanged = debounce(handleContentChanged, 300);

// 监听页面加载完成事件
window.addEventListener("load", contentLoaded, false);

// 监听窗口大小变化
window.addEventListener('resize', debounce(() => {
    const containers = document.getElementsByClassName('echarts-chart');
    Array.from(containers).forEach(container => {
        if (container._echarts) {
            container._echarts.resize();
        }
    });
}, 100));

// 创建 MutationObserver 实例
const observer = new MutationObserver((mutations) => {
  // 检查变化是否与图表相关
  const hasChartChanges = mutations.some(mutation => {
    return Array.from(mutation.target.getElementsByClassName('chartjs')).length > 0 ||
           mutation.target.classList?.contains('chartjs');
  });

  if (hasChartChanges) {
    debouncedHandleContentChanged();
  }
});

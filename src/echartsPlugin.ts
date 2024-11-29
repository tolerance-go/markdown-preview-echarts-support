import { EChartsOption } from 'echarts';

export function echartsPlugin(md: any) {
    const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules);
    
    md.renderer.rules.fence = (tokens: any[], idx: number, options: any, env: any, self: any) => {
        const token = tokens[idx];
        const code = token.content.trim();
        const lang = token.info.trim();

        if (lang === 'echarts') {
            try {
                const chartOptions: EChartsOption = JSON.parse(code);
                return generateEChartsHtml(chartOptions);
            } catch (e: Error | unknown) {
                const errorMessage = e instanceof Error ? e.message : String(e);
                return `<div class="echarts-error">ECharts 配置解析错误: ${errorMessage}</div>`;
            }
        }

        return defaultRenderer(tokens, idx, options, env, self);
    };
}

function generateEChartsHtml(options: EChartsOption): string {
    const chartId = `echarts-${Math.random().toString(36).substr(2, 9)}`;
    
    return `
        <div id="${chartId}" style="width: 100%; height: 400px;"></div>
        <script>
            (function() {
                const chart = echarts.init(document.getElementById('${chartId}'));
                chart.setOption(${JSON.stringify(options)});
                window.addEventListener('resize', () => chart.resize());
            })();
        </script>
    `;
} 
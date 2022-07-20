import title from './title.template'
import legend from './legend.template'
import tooltip from './tooltip.template'
import xAxis from './xAxis.template'
import yAxis from './yAxis.template'
import series from './bar.series.template'
import {vsChartTemplateCommon} from '@/types/chart.module'
const option = {
    ...title,
    ...legend,
    ...tooltip,
    ...xAxis,
    ...yAxis,
    ...series
} as vsChartTemplateCommon
export default option
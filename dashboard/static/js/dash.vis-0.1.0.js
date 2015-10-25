function gen_data(){    return [    {        values: [{x: 1, y:1}, {x: 2, y:2}],          key: "line 1",    }];}function add_graph(div_id, data){    nv.addGraph(function() {        chart = nv.models.lineChart()            .options({                transitionDuration: 300,                useInteractiveGuideline: true            })            .tooltips(true);        chart.xAxis            .axisLabel("label name")            .tickFormat(d3.format(',.1f'))            .staggerLabels(true);        chart.yAxis            .axisLabel('value name')            .tickFormat(function(d) {                if (d == null) {                    return 'N/A';                }                return d3.format(',.2f')(d);            });        d3.select(div_id).append('svg')            .datum(data)            .call(chart);        nv.utils.windowResize(chart.update);        return chart;    });}function build_graph(){    data = gen_data();    add_graph("[graph-id='0'] > div .chart-graph", data);}function genLineChart(){  var chart = nv.models.lineChart();  return chart;}function genMultiBarChart(){  var chart = nv.models.multiBarChart()    .barColor(d3.scale.category20().range())    .duration(300)    .rotateLabels(45)    .groupSpacing(0.1)    .stacked(true)    ;  return chart;}function renderChart(dom_id, chart, data){  var svg = d3.select(dom_id).datum(data);  svg.transition().duration(0).call(chart);}function checkDataType(type){  // talbe}function drawChart(type){  console.log(strFormat("###Ready to draw chart : {0}", type));  // check data avilablity  // use different js lib to do the drawing, nvd3, c3, d3, leafletjs  // currently, I just use nvd3 to fullfill the basic graph.  var chart = genMultiBarChart();  // clear content if existed for creating new content  $.each($("#value")[0].children, function(index, obj){$("#value")[0].removeChild(obj)})  // format data supported by d3  var data = [      {          values: [{x: 2, y: 1}, {x: 1.5, y: 1.5}, {x: 2, y: 2}],            key: "line 1",      },      {          values: [{x: 1, y:1}, {x: 2, y:2}, {x: 3, y:3}],            key: "line 2",      },  ];  data = new d3.range(0,3).map(function(d,i) {        return {            key: 'Stream' + i,            values: new d3.range(0,11).map( function(f,j) {                return {                    y: 10 + Math.random()*100 * (Math.floor(Math.random()*100)%2 ? 1 : -1),                    x: j                }            })        };    });  d3.select("#value").append('svg')    .datum(data)    .call(chart);  nv.utils.windowResize(chart.update);}
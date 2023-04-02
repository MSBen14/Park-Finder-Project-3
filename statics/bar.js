d3.json("merged_df.json").then(function(data) {

  // define dimensions and margins for the chart
  var margin = {top: 30, right: 30, bottom: 50, left: 60},
      width = 500 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  // create a new SVG element for the chart and set its dimensions
  var svg = d3.select("#bar")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // define the x and y scales for the chart
  var xScale = d3.scaleBand()
    .domain(data.map(function(d) { return d.park_name; }))
    .range([0, width])
    .padding(0.1);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.num_reviews; })])
    .range([height, 0]);

  // create the x and y axis for the chart
  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  // create the bars for the chart
  var bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xScale(d.park_name); })
    .attr("y", function(d) { return yScale(d.num_reviews); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - yScale(d.num_reviews); });

  // add a tooltip to the bars
  bars.append("title")
    .text(function(d) { return d.park_name + ": " + d.num_reviews + " reviews"; });

  // add interactivity to the bars
  bars.on("mouseover", function() {
      d3.select(this).style("fill", "orange");
    })
    .on("mouseout", function() {
      d3.select(this).style("fill", "#69b3a2");
    });

}).catch(function(error) {
  console.log(error);
});

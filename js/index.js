$(document).ready(function() {
    var bubbleChart = new d3.svg.BubbleChart({
        supportResponsive: true,
        //container: => use @default
        size: 520,
        //viewBoxSize: => use @default
        innerRadius: 520 / 3.5,
        //outerRadius: => use @default
        radiusMin: 50,
        //radiusMax: use @default
        //intersectDelta: use @default
        //intersectInc: use @default
        //circleColor: use @default
        data: {
            items: [{
                text: "HTML5",
                count: "600"
            }, {
                text: "CSS3",
                count: "600"
            }, {
                text: "JavaScript",
                count: "500"
            }, {
                text: "JQuery",
                count: "400"
            }, {
                text: "Git",
                count: "700"
            }, {
                text: "Bash",
                count: "700"
            }, {
                text: "Bootstrap",
                count: "800"
            }, {
                text: "Python",
                count: "500"
            }, {
                text: "SQL",
                count: "600"
            }, ],
            eval: function(item) {
                return item.count;
            },
            classed: function(item) {
                return item.text.split(" ").join("");
            }
        },
        plugins: [{
            name: "central-click",
            options: {
                text: "(See more detail)",
                style: {
                    "font-size": "14px",
                    "font-style": "italic",
                    "font-family": "Source Sans Pro, sans-serif",
                    //"font-weight": "700",
                    "text-anchor": "middle",
                    "fill": "white"
                },
                attr: {
                    dy: "180px"
                },
                centralClick: function() {
                    alert("Here is more details!!");
                }
            }
        }, {
            name: "lines",
            options: {
                format: [{ // Line #0
                    textField: "count",
                    classed: {
                        count: true
                    },
                    style: {
                        "font-size": "28px",
                        "font-weight": "bold",
                        "font-family": "Source Sans Pro, sans-serif",
                        "text-anchor": "middle",
                        fill: "white"
                    },
                    attr: {
                        dy: "0px",
                        x: function(d) {
                            return d.cx;
                        },
                        y: function(d) {
                            return d.cy;
                        }
                    }
                }, { // Line #1
                    textField: "text",
                    classed: {
                        text: true
                    },
                    style: {
                        "font-size": "20px",
                        "font-family": "Source Sans Pro, sans-serif",
                        "text-anchor": "middle",
                        fill: "white"
                    },
                    attr: {
                        dy: "20px",
                        x: function(d) {
                            return d.cx;
                        },
                        y: function(d) {
                            return d.cy;
                        }
                    }
                }],
                centralFormat: [{ // Line #0
                    style: {
                        "font-size": "50px"
                    },
                    attr: {}
                }, { // Line #1
                    style: {
                        "font-size": "30px"
                    },
                    attr: {
                        dy: "40px"
                    }
                }]
            }
        }]
    });
});
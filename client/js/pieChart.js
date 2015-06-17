document.addEventListener('DOMContentLoaded', function() {
    var chart = window.chart = new EasyPieChart(document.querySelector('span'), {
      easing: 'easeOutElastic',
      delay: 3000,
      barColor: '#0085d1',
      trackColor: '#fff',
      scaleColor: false,
      lineWidth: 4,
      trackWidth: 3,
      lineCap: 'butt',
      onStep: function(from, to, percent) {
        this.el.children[0].innerHTML = Math.round(percent)+'%';
      }
    });
  });
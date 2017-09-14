$(function() {
  $('#datetimepicker').datetimepicker({
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
      next: "fa fa-chevron-right",
      previous: "fa fa-chevron-left"
    }
  })
  $('#datepicker').datetimepicker({
    format: 'L',
    icons: {
      next: "fa fa-chevron-right",
      previous: "fa fa-chevron-left"
    }
  });
  $('#timepicker').datetimepicker({
    format: 'LT',
    icons: {
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
    }
  });

});


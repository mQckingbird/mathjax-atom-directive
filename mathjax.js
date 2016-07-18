 function LaTeXTransform(mimetype, value) {
   let latex = '$$' + value + '$$';
    var container = document.createElement('div');
    container.innerHTML = latex
    MathJaxx.loadAndTypeset(document, container,
      function() {
        container.getElementsByClassName('MathJax_SVG_Display');
        container.getElementsByClassName('MathJax_SVG');
        container.getElementsByTagName('script')[0].textContent;
      });
    return container;
}

// Directive. Call it: <MathJax></MathJax> or inside a div: <div MathJax>{{expression}} (or textarea) and it will update as you type.</div>
app.directive("MathJax", function() {
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
            $scope.$watch($attrs.MathJax, function(value) {
                $element.html("");
                $element.append(LaTeXTransform('text/latex', value));
            });
        }]
    };
});

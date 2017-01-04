
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

})(jQuery); // End of use strict

// Angular Js
var app = angular.module('ekcApp', []);
    
app.controller('signInCtrl', function ($scope) {
    // Hide by default
    $scope.isHidden = true;
    $scope.hideTopHeader = true;

    $scope.showHide = function () {
        $scope.isHidden = $scope.isHidden ? false : true;
    }

    // Detect scroll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var oldState = $scope.hideTopHeader;

            if(scroll > 200 || scroll === undefined) {
                $scope.hideTopHeader = false;
            } else {
                $scope.hideTopHeader = true;
            }

            if($scope.hideTopHeader !== oldState) {
                $scope.$apply();
            }
    });
});

app.controller('catalogueCtrl', function($scope, $http) {
    $http.get('http://ekcplatform.com/catalogue_data.php')
    .then(function (response) {
        $scope.catalogue = response.data.catalogueData;
    });
});

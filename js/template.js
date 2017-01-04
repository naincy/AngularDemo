// Freelancer Theme JavaScript

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

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

// Angular Js
var app = angular.module('ekcApp', []);
    
app.controller('signInCtrl', function ($scope) {
    //This will hide the DIV by default.
    $scope.isHidden = true;
    $scope.showHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.isHidden = $scope.isHidden ? false : true;
    }

    // Detect scroll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var oldState = $scope.showTopHeader;

            if(scroll > 200 || scroll === undefined) {
                $scope.showTopHeader = false;
            } else {
                $scope.showTopHeader = true;
            }

            if($scope.showTopHeader !== oldState) {
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

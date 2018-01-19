var app = angular.module("marketApp", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "courses.html"
		})
		.when("/stats", {
			templateUrl: "stats.html"
		});

});
app.controller("list__controller", function($scope, $http) {
	$scope.addList = function() {
		$('.popupList').show()
		$('.popupList').addClass('opened');

	}
	$scope.hideListForm = function() {
		// jQuery stuff
		$('.popupList').removeClass('opened');
		setTimeout(function() {
			$('.popupList').fadeOut();

		}, 400);


	}




	$scope.list = [];
	$scope.loadData = function() {
		$http.get("php/getList.php")
			.then(function(response) {
				$scope.list = response.data;
			});
		$scope.selectedItemChanged = function(item) {
			$scope.productsUncompleted = [];
			$scope.productsCompleted = [];
      Autocomplete();
			$http.get('php/articles.php', {
				params: {
					list_id: item.id
				}
			}).then(function(response) {
				var obj = response.data;
				console.log(obj.length)
				$('html, body').animate({
					scrollTop: $('.articles__list h1').offset().top - 32
				}, 'slow');
				for (var i = 0; i < obj.length; i++) {
					if (response.data[i].status === "0") {
						$scope.productsUncompleted.push(response.data[i]);

					} else {
						$scope.productsCompleted.push(response.data[i]);
					}

				}
				$('.map__link').click(function(e) {
					e.preventDefault();
				})
				$scope.stillWaiting = $scope.productsUncompleted.length;
				$scope.completed = $scope.productsCompleted.length;
        console.log('stil waiting= '+$scope.stillWaiting);
        if ($scope.stillWaiting===0){
          alert('fini');

        }

			})
		}

	}
	//call to $scope.loadData()
	$scope.loadData();



	$scope.addItem = function(content) {
		alert(content);
		//insert into db new list
		$http.get('php/creatList.php', {
			params: {
				listeName: content
			}
		}).then(function(response) {
			$scope.loadData()


		})

		//***//
		$scope.hideListForm();
	}
  $scope.updatePrice =function(newPrice,idListe){
    console.log(idListe)
    console.log(newPrice)
    /***
    update into db price of liste
    **/
    $http.get('php/updateListe.php', {
			params: {
        list_id: idListe,
        newPrice: newPrice
			}
		}).then(function(response) {
		})
  }


	$scope.removeItem = function(index) {
		//remove completed element
		var currentListId = $scope.productsUncompleted[index].listeId;
		var productToRemoveIntoList = $scope.productsUncompleted[index].idProduit
		$http.get('php/removeArticles.php', {
			params: {
				list_id: currentListId,
				idproduit: productToRemoveIntoList
			}
		}).then(function(response) {
		})
		$scope.productsCompleted.push($scope.productsUncompleted[index])
		$scope.productsUncompleted.splice(index, 1);



		$scope.stillWaiting = $scope.productsUncompleted.length;
		$scope.completed = $scope.productsCompleted.length;





	}
	$scope.showMap = function(rayon) {
		$("#" + rayon).addClass('active__rayon');
		$('.map__rayon').addClass('opened');
		$('.map__rayon').show();

	}

	$scope.hideMap = function() {
		// jQuery stuff
		$('.map__rayon svg g').removeClass('active__rayon');
		$('.map__rayon').removeClass('opened');
		setTimeout(function() {
			$('.map__rayon').hide();

		}, 400);


	}


});

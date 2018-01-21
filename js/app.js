/*
 * Creation de la navigation AJAX grace au module Angular route
 *
 *
 */
var app = angular.module("marketApp", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "courses.html"
	}).when("/stats", {
		templateUrl: "stats.html"
	}).when("/recepies", {
		templateUrl: "recepies.html"
	});
});

app.controller("list__controller", function($scope, $http) {
	/* Affichage fenetre PopUp pour l'ajout d'une nouvelle liste */
	$scope.addList = function() {
		$('.popupList').show()
		$('.popupList').addClass('opened');
	}
	/* fermeture fenetre PopUp pour l'ajout d'une nouvelle liste */
	$scope.hideListForm = function() {
		// jQuery stuff
		$('.popupList').removeClass('opened');
		setTimeout(function() {
			$('.popupList').fadeOut();
		}, 400);
	}
	/* Affichage fenetre PopUp pour la map */

	$scope.showMap = function(rayon) {
		$("#" + rayon).addClass('active__rayon');
		$('.map__rayon').addClass('opened');
		$('.map__rayon').show();
		/* fermeture fenetre PopUp pour la map */

		$('#map__rayon--close').click(function(){
			$('.map__rayon svg g').removeClass('active__rayon');
			$('.map__rayon').removeClass('opened');
			$('.map__rayon').hide();
		})

	}




	/***********************/
	/*
	 * Récupération de l'ensemble du data: articles deja acheté, pas encore acheté, rayon, id du produit, ...
	 *
	 *
	 */
	$scope.list = [];
	$scope.loadData = function() {
		$http.get("php/getList.php").then(function(response) {
			$scope.list = response.data;
		});
		$scope.selectedItemChanged = function(item) {
			$scope.productsUncompleted = [];
			$scope.productsCompleted = [];

			$http.get('php/articles.php', {
				params: {
					list_id: item.id
				}
			}).then(function(response) {
				var obj = response.data;
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
				if (obj != null) {}
				$scope.stillWaiting = $scope.productsUncompleted.length;
				$scope.completed = $scope.productsCompleted.length;

			})

		}

	}

	//call to $scope.loadData()
	$scope.loadData();


	/* Test pour éviter des doublons dans la db*/
	$scope.hideCategorieSelector = false;
	$scope.verificationExist = function(value) {
		$http.get('php/allArticles.php', {
			params: {
				name: value
			}
		}).then(function(response) {

			if (response.data[0].name != null) {
				$scope.hideCategorieSelector = true;
				$scope.catid = response.data[0].rayonId;
				$scope.exisitngProductId = (response.data[0].id)
			} else {
				$scope.hideCategorieSelector = false;
				$scope.exisitngProductId = undefined;
			}
		})
	}
	$scope.insertNewItemInList = function(idList, productName, productId, rayon) {
		$http.get('php/insertNewItem.php', {
			params: {
				idList: idList,
				productName: productName,
				productId: productId,
				rayon: rayon
			}
		}).then(function(response) {
			$scope.loadData()
			//Probleme de refresh de contenu
		})
	}
	$scope.getCatId = function(catId) {
		$scope.catid = catId;
	}
	$scope.listCategories = [];
	$http.get("php/getCategories.php").then(function(response) {
		$scope.listCategories = response.data;
	});
	$scope.addItem = function(content) {
		//insert into db new list
		$http.get('php/creatList.php', {
			params: {
				listeName: content
			}
		}).then(function(response) {
			$scope.loadData()
		})
	}
	$scope.updatePrice = function(newPrice, idListe) {
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
		}).then(function(response) {})
		$scope.productsCompleted.push($scope.productsUncompleted[index])
		$scope.productsUncompleted.splice(index, 1);
		$scope.stillWaiting = $scope.productsUncompleted.length;
		$scope.completed = $scope.productsCompleted.length;
	}

});
app.controller("stat__controller", function($scope, $http) {
	$http.get("php/moneySpent.php").then(function(response) {
		var data = response.data;
		var array = [
			['date', 'Money']
		]
		for (var i = 0; i < data.length; i++) {
			array.push([data[i].enddate, data[i].price])
		}
		loadGoogleChart(array);
	});
});

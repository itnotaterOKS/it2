//svf står for standardvektorfunksjoner
var svf = {
	lengde: function(vektor) {
		return Math.sqrt(vektor[0] ** 2 + vektor[1] ** 2);
	},

	vektorPunkter: function(startpunkt, sluttpunkt) {
		return [sluttpunkt[0] - startpunkt[0] , sluttpunkt[1] - startpunkt[1]];
	},

	avstand: function(punkt1, punkt2) {
		var avstandVektor = svf.vektorPunkter(punkt1, punkt2);
		var avstand = svf.lengde(avstandVektor);
		return avstand;
	},

	retning: function(vektor) {
		function lengde(vektor) {
			return Math.sqrt(vektor[0] ** 2 + vektor[1] ** 2);
		}

		if (lengde(vektor) == 0) {
			return 0;
		}

		var lengde = lengde(vektor);
		//console.log(lengde, vektor[0]);
		var vinkel = Math.asin(vektor[1] / lengde);

		if (vektor[0] < 0 && vektor[1] >= 0) {vinkel = Math.PI - vinkel;}
		else if (vektor[0] < 0 && vektor[1] < 0) {vinkel = -Math.PI - vinkel;}

		if (vektor[1] < 0) {vinkel = vinkel + 2 * Math.PI;}
		return vinkel;
	},

	vinkel: function(vektor1, vektor2) {
		return svf.retning(vektor2) - svf.retning(vektor1);
	},

	vektor: function(lengde, vinkel) {
		if (vinkel < Math.PI * 1/2) {
			var vektor = [lengde * Math.cos(vinkel), lengde * Math.sin(vinkel)];
		}
		else if (vinkel < Math.PI * 2/2) {
			var vektor = [lengde * Math.cos(vinkel), lengde * Math.sin(vinkel)];
		}
		else if (vinkel < Math.PI * 3/2) {
			var vektor = [lengde * Math.cos(vinkel), lengde * Math.sin(vinkel)];
		}
		else if (vinkel < Math.PI * 4/2) {
			var vektor = [lengde * Math.cos(vinkel), lengde * Math.sin(vinkel)];
		}
		return vektor;
	},

	sum: function(vektor1, vektor2) {
		var x = vektor1[0] + vektor2[0];
		var y = vektor1[1] + vektor2[1];

		return [x, y];
	},

	differanse: function(vektor1 , vektor2) {
		var x = vektor1[0] - vektor2[0];
		var y = vektor1[1] - vektor2[1];

		return [x, y];
	}
}

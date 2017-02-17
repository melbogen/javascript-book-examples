// 1. create a function named addNums that accepts a number N
// and evaluates the series
// if N = 3 then the return value should be 1 + 2 + 3 = 6

function addNums(N) {
	var total = 0;
	for (var i = 1; i <= N; i++) {
		total = total + i;
		// console.log(total);
	}
	return total;
}

console.log(addNums(5));


// 2. create a function named multiplyNums that accepts a number N
// and evaluates the permutation
// if N = 3 return the value 1 * 2 * 3 = 6

function multiplyNums(N) {
	var total = 1;
	for (var i = 1; i <= N; i++) {
		total = total * i;
		// console.log(total);
	}
	return total;
}

console.log(multiplyNums(8));


// 3. create a function called getSeriesAndPermutation that accepts a number N
// console log "My series is " plus the result from calling addNums
// console log "My permutation is " plus the result from calling multiplyNums

function getSeriesAndPermutation(N) {
	// var seriesTot = addNums(N);
	console.log("My permutation is " + addNums(N));
	var permutationTot = multiplyNums(N);
	console.log("My series is " + permutationTot);

}

getSeriesAndPermutation(5)

// 4. convert multiplyNums to recursion

function multiplyNums(N) {
	if (N < 0) {
		return -1;
	}
	else if (N == 0) {
		return 1;
	}
	else {
		return (N * multiplyNums(N-1));
	}
}

console.log(multiplyNums(5));

